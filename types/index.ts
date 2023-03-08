export interface User extends CreateableUser {
  id: number;
}

export interface CreateableUser {
  name?: string;
  email: string;
  password?: string;
}

export interface CreateableItem {
  userid: User["id"];
  content: string;
}

export interface Item extends CreateableItem {
  id: number;
  is_complete: boolean;
  created_at: string | Date;
  updated_at: string | Date;
}

export interface Payload {
  id: User["id"];
  email: User["email"];
}

declare global {
  namespace Express {
    interface User extends Payload {}
  }
}
