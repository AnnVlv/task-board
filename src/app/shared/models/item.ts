import { User } from './user';

export interface Item {
  id: number;
  title: string;
  assignTo: User;
}
