import Image from 'next/image';

export default function UserImage({ width, height, className }) {
  return (
    <Image
      // Image attributes
      className={className}
      src="/assets/images/profile/test.jpg"
      width={width}
      height={height}
      alt="Profile"
    />
  );
}
