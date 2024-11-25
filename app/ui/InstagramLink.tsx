import { FC } from 'react';
import { PiInstagramLogo } from 'react-icons/pi';

type InstagramLinkProps = {
  href: string;
  className?: string;
};

const InstagramLink: FC<InstagramLinkProps> = ({ href, className }) => {
  return (
    <a href={href} className={`flex items-center gap-2 ${className}`}>
      <PiInstagramLogo size={18} />
      <span>Instagram</span>
    </a>
  );
};

export default InstagramLink;
