import Image from 'next/image';

/**
 * Displays user profile image
 */
export default function UserImage({ styles, width, height }) {
  return (
    <Image
      // Image attributes
      className={styles.profileImage}
      src="/assets/images/profile/test.jpg"
      width={width}
      height={height}
      alt="profile-image"
    />
  );
}
