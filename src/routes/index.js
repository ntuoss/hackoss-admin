import { Dashboard, Person, Class } from '@material-ui/icons';

import DashboardPage from 'containers/Dashboard';
import UserPage from 'containers/User';
import CoursePage from 'containers/Course';

export const DASHBOARD = '/';
export const USER = '/user';
export const COURSE = '/course';

// prettier-ignore
export default [
  {
    path: DASHBOARD,
    exact: true,
    sidebarName: 'Dashboard',
    navbarName: 'Outfox Dashboard',
    icon: Dashboard,
    component: DashboardPage,
  },
  {
    path: USER,
    headerRoute: true,
    navbarName: 'User Profile',
    icon: Person,
    component: UserPage,
  },
  {
    path: COURSE,
    sidebarName: 'Crouses',
    navbarName: 'Courses',
    icon: Class,
    component: CoursePage,
  },
  { redirect: true, 
    path: '/dashboard', 
    to: DASHBOARD, 
    navbarName: 'Redirect' 
  },
];
