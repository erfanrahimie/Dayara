import { RiCustomerService2Line, RiLink } from 'react-icons/ri'
import Link from 'next/link'

/**
 * Displays user details such as name, bio, and website link
 */
export default function UserDetails({
  styles,
  username,
  bio,
  website,
  usernameIcon = true,
  websitelinkIcon = true,
}) {
  return (
    // Container for user information
    <div className={styles.information}>
      {username && (
        // Display user name with icon
        <h2 className={styles.username}>ERFAN {usernameIcon && <RiCustomerService2Line />}</h2>
      )}
      {bio && (
        // Display user bio
        <p className={styles.biography}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmz
        </p>
      )}
      {website && (
        // Display website link
        <Link href={'https://www.instagram.com/nex_nahira/'} className={styles.websiteLink}>
          {websitelinkIcon && <RiLink />} instagram.com/nex_nahira
        </Link>
      )}
    </div>
  )
}
