import FilesIcon from '../../components/icons/FilesIcon'
import GithubIcon from '../../components/icons/GithubIcon'
import CodeIcon from '../../components/icons/CodeIcon'
import PencilIcon from '../../components/icons/PencilIcon'
import MailIcon from '../../components/icons/MailIcon'
import AccountIcon from '../../components/icons/AccountIcon'
import SettingsIcon from '../../components/icons/SettingsIcon'
import sidebarItemsI from '../../lib/interfaces/sidebarItemsI'

export const sidebarTopItems: sidebarItemsI[] = [
  {
    Icon: FilesIcon,
    path: '/',
  },
  {
    Icon: GithubIcon,
    path: '/github',
  },
  {
    Icon: CodeIcon,
    path: '/projects',
  },
  {
    Icon: PencilIcon,
    path: '/articles',
  },
  {
    Icon: MailIcon,
    path: '/contact',
  },
]

export const sidebarBottomItems: sidebarItemsI[] = [
  {
    Icon: AccountIcon,
    path: '/about',
  },
  {
    Icon: SettingsIcon,
    path: '/settings',
  },
]
