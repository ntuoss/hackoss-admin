import { Dashboard, Person, Class } from '@material-ui/icons';

import DashboardPage from 'containers/Dashboard';
import UserPage from 'containers/User';
import CoursePage from 'containers/Course';

// prettier-ignore
export default [
  {
    path: '/dashboard',
    exact: true,
    sidebarName: 'Dashboard',
    navbarName: 'Outfox Dashboard',
    icon: Dashboard,
    component: DashboardPage,
  },
  {
    path: '/user',
    sidebarName: 'My Profile',
    navbarName: 'Profile',
    icon: Person,
    component: UserPage,
  },
  {
    path: '/course',
    sidebarName: 'Crouses',
    navbarName: 'Courses',
    icon: Class,
    component: CoursePage,
  },
  { redirect: true, 
    path: '/', 
    to: '/dashboard', 
    navbarName: 'Redirect' 
  },
];
