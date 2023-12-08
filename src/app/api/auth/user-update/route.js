import { CLOUDINARY_CONFIG } from '@/config/config';
import {v2 as cloudinary} from 'cloudinary';
import { NextResponse } from 'next/server';
import prisma from '@/db/client';
import tmp from 'tmp-promise';
import fs from 'fs';

export async function PUT(request) {
  const formData = await request.formData();
  const imageFile = formData.get('image'); 
  const { id , username, fullName, email } = JSON.parse(formData.get('data'));
  let image
  
  try {
    const user = await prisma.user.findUnique({where: {id}})

    if (user.username !== username || user.email !== email) {
      const userCount = await prisma.user.count({ where: {OR: [{ username }, { email } ], NOT: { id }}})
      if (userCount) return NextResponse.json({ message: 'Username or email already exists' }, { status: 400 })
    }

    if (imageFile.name) {
      const {path, cleanup} = await tmp.file();
      const buffer = Buffer.from( await imageFile.arrayBuffer());

      fs.writeFileSync(path, buffer);
      cloudinary.config(CLOUDINARY_CONFIG);

      const res = await cloudinary.uploader.upload(path,
        { folder: "Profile", width: 500, height: 500, crop: 'fill'});
  
      if (user.image) {
        const publicId = user.image.split('/').pop().split('.')[0];
        await cloudinary.uploader.destroy('Profile/' + publicId);
      }
  
      image = res.secure_url;
      cleanup();
    }

    await prisma.user.update({
      where: {id},
      data: {username, fullName, email, image},
    })
    return NextResponse.json({ message: 'ok' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Something went wrong' }, { status: 400 });
  }
}