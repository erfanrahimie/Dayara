'use client';
import UserProfileInfo from '@/components/user-profile/user-profile-info/UserProfileInfo';
import styles from './page.module.css';

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <UserProfileInfo />
    </div>
  );
}
