import { User } from './user';

export interface Item {
  id: number;
  title: string;
  content: string;
  assignTo: User;
}
