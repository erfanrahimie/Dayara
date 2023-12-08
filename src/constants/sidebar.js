import {
  RiCustomerService2Line,
  RiHeart3Line,
  RiLogoutCircleLine,
  RiMessage3Line,
  RiSettings4Line,
  RiUser3Line,
} from 'react-icons/ri';
import { ROOT_ROUTES } from '@/constants/routes/root';

/**
 * Sidebar menu items data
 * constant
 * type {Array}
 */
export const SIDEBAR_ITEMS = [
  // Array of menu items
  {
    icon: <RiUser3Line />,
    href: ROOT_ROUTES.dashboard.index,
    text: 'Profile',
  },
  {
    icon: <RiMessage3Line />,
    href: ROOT_ROUTES.dashboard.index,
    text: 'Messages',
  },
  {
    icon: <RiHeart3Line />,
    href: ROOT_ROUTES.home,
    text: 'Likes',
  },
  {
    icon: <RiSettings4Line />,
    href: ROOT_ROUTES.dashboard.index,
    text: 'Settings',
  },
  {
    icon: <RiCustomerService2Line />,
    href: ROOT_ROUTES.dashboard.index,
    text: 'Support',
  },
  {
    icon: <RiLogoutCircleLine />,
    href: ROOT_ROUTES.dashboard.index,
    text: 'Logout',
  },
];
