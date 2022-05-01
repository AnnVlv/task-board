import { List } from '../shared/models';
import { USERS } from './users';

export const LISTS: List[] = [
  {
    id: 1,
    title: 'To do',
    items: [
      { id: 1, title: 'Notifications settings', assignTo: USERS[0] },
      { id: 2, title: 'Localization keys', assignTo: USERS[1] },
      { id: 3, title: 'Attendance registration', assignTo: USERS[1] },
      { id: 4, title: 'Products table', assignTo: USERS[1] },
      { id: 5, title: 'File statuses', assignTo: USERS[0] },
      { id: 6, title: 'Advanced Search', assignTo: USERS[1] },
      { id: 7, title: 'Notes from home page', assignTo: USERS[1] },
    ],
  },
  { id: 2, title: 'In progress', items: [] },
  { id: 3, title: 'In review', items: [] },
];
