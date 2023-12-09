/**
 * Displays user statistics (followers and following)
 */
export default function UserStats({ styles, followers, following, text = true }) {
  return (
    // Status bar for followers and following
    <ul className={styles.statusBar}>
      {followers && (
        // Display followers count
        <li>
          <span>60</span> {text && 'followers'}
        </li>
      )}
      {following && (
        // Display following count
        <li>
          <span>60</span> {text && 'following'}
        </li>
      )}
    </ul>
  )
}
