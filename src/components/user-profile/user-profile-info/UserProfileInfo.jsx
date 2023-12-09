'use client'
import UserSocialNetworks from '@/components/shared/user-profile/UserSocialNetworks'
import UserDetails from '@/components/shared/user-profile/UserDetails'
import UserImage from '@/components/shared/user-profile/UserImage'
import UserStats from '@/components/shared/user-profile/UserStats'
import styles from './UserProfileInfo.module.css'

/**
 * Renders user profile info
 */
export default function UserProfileInfo() {
  return (
    // Main profile section
    <section className={styles.profile}>
      <div className={styles.details}>
        {/* User image component */}
        <UserImage styles={styles} width={120} height={120} />
        {/* User details component */}
        <UserDetails styles={styles} username={true} bio={true} website={true} />
      </div>
      <div className={styles.stats}>
        {/* User stats component */}
        <UserStats styles={styles} followers={true} following={true} />
        {/* User social networks component */}
        <UserSocialNetworks styles={styles} />
      </div>
    </section>
  )
}
