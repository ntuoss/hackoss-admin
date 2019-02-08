import { Dashboard, Person, Class, Event } from '@material-ui/icons';

import AppEntry from 'layout/Dashboard';
import SignInPage from 'containers/SignIn';
import DashboardPage from 'containers/Dashboard';
import UserPage from 'containers/User';
import CoursePage from 'containers/Course';
import EventFormPage from 'containers/EventForm';

export const DASHBOARD = '/';
export const SIGN_IN = '/sign_in';
export const SIGN_OUT = '/sign_out';
export const USER = '/user';
export const COURSE = '/course';
export const EVENT_FORM = '/event_form';

export const AUTH_ROUTE = [
  {
    path: SIGN_IN,
    component: SignInPage,
  },
  {
    path: DASHBOARD,
    auth: true,
    component: AppEntry,
  },
];

// prettier-ignore
export const APP_ROUTE = [
  {
    path: DASHBOARD,
    exact: true,
    sidebarName: 'Dashboard',
    navbarName: 'Dashboard',
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
  {
    path: EVENT_FORM,
    sidebarName: 'Create Events',
    navbarName: 'Event Management',
    icon: Event,
    component: EventFormPage,
  },
  { redirect: true, 
    path: '/dashboard', 
    to: DASHBOARD, 
    navbarName: 'Redirect' 
  },
];
