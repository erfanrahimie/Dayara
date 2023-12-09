import { RiDiscordLine, RiTwitterLine, RiInstagramLine, RiGithubLine } from 'react-icons/ri'

/**
 * Displays user social network links
 */
export default function UserSocialNetworks({ styles }) {
  return (
    // Container for social network links
    <div className={styles.socialLinks}>
      <a href="">
        <RiDiscordLine />
      </a>
      <a href="">
        <RiTwitterLine />
      </a>
      <a href="">
        <RiInstagramLine />
      </a>
      <a href="">
        <RiGithubLine />
      </a>
    </div>
  )
}
