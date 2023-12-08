import { z } from 'zod';

// Validation schema for sign up form
export const signupSchema = z
  .object({
    username: z.string()
      .max(20, 'Username should not be more than 20 characters')
      .nonempty('This field is required'),

    fullName: z.string()
      .max(25, 'Full name should not be more than 25 characters')
      .optional(),

    email: z.string()
      .email('The email is not valid')
      .nonempty('This field is required'),

    password: z.string()
      .min(8, 'Password must be more than 8 characters')
      .nonempty('This field is required'),

    confirmPassword: z.string()
    .nonempty('This field is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  })

// Validation schema for sign in form
export const signinSchema = z.object({
  username: z.string()
    .max(20, 'Username should not be more than 20 characters')
    .nonempty('This field is required'),

  password: z.string().nonempty('This field is required'),
})

// Validation schema for editing user profile
export const editProfileSchema = z.object({
  image: z.any()
    .refine((value) => !value.length || ['image/jpeg', 'image/png'].includes(value[0].type),
      'Invalid image format. Allowed jpg, png'
    ),

  username: z.string()
    .max(20, 'Username should not be more than 20 characters')
    .nonempty('This field is required'),

  fullName: z.string()
    .max(25, 'Full name should not be more than 25 characters')
    .optional(),

  email: z.string()
    .email('The email is not valid')
    .nonempty('This field is required'),
})
