'use client';
import { RiCustomerService2Line, RiLink } from 'react-icons/ri';
import UserProfileImage from '@/components/shared/user-profile/UserImage';
import UserSocialNetworks from '@/components/shared/user-profile/UserSocialNetworks';
import styles from './UserProfileInfo.module.css';
import Link from 'next/link';

/**
 * Renders user profile info 
 */
export default function UserProfileInfo() {
  
  return (
    <section className={styles.profile}>
      <div className={styles.details}>
        <UserProfileImage className={styles.profileImage} width={120} height={120} />
        <div className={styles.information}>
          <h2 className={styles.username}>
            ERFAN <RiCustomerService2Line />
          </h2>
          <p className={styles.biography}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmz
          </p>
          <Link href={'https://www.instagram.com/nex_nahira/'} className={styles.websiteLink}>
            <RiLink /> loremsaz.com
          </Link>
        </div>
      </div>
      <div className={styles.stats}>
        <ul className={styles.statusBar}>
          <li>
            <span>60</span> followers
          </li>
          <li>
            <span>60</span> following
          </li>
        </ul>
        < UserSocialNetworks className={styles.socialLinks} />
      </div>
    </section>
  );
}
