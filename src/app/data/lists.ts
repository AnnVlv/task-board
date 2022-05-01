import { List } from '../shared/models';
import { USERS } from './users';

export const LISTS: List[] = [
  {
    id: 1,
    title: 'To do',
    items: [
      { id: 1, title: 'Notifications settings', content: '', assignTo: USERS[0] },
      { id: 2, title: 'Localization keys', content: '', assignTo: USERS[1] },
      { id: 3, title: 'Attendance registration', content: '', assignTo: USERS[1] },
      { id: 4, title: 'Products table', content: '', assignTo: USERS[1] },
      { id: 5, title: 'File statuses', content: '', assignTo: USERS[0] },
      { id: 6, title: 'Advanced search', content: '', assignTo: USERS[1] },
      { id: 7, title: 'Notes from home page', content: '', assignTo: USERS[1] },
    ],
  },
  {
    id: 2,
    title: 'In progress',
    items: [
      { id: 8, title: 'Reset filters', content: '', assignTo: USERS[0] },
    ],
  },
  {
    id: 3,
    title: 'In review',
    items: [
      { id: 9, title: 'Search apps', content: '', assignTo: USERS[0] },
      { id: 10, title: 'Filter apps', content: '', assignTo: USERS[1] },
      { id: 11, title: 'Download apps', content: '', assignTo: USERS[0] },
    ],
  },
];
