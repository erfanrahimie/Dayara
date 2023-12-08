import { RiDiscordLine, RiTwitterLine, RiInstagramLine, RiGithubLine } from 'react-icons/ri';

export default function UserSocialNetworks({ className }) {
  return (
    <div className={className}>
      <a
        href=""
      >
        <RiDiscordLine />
      </a>
      <a
        href=""
      >
        <RiTwitterLine />
      </a>
      <a
        href=""
      >
        <RiInstagramLine />
      </a>
      <a
        href=""
      >
        <RiGithubLine />
      </a>
    </div>
  );
}
