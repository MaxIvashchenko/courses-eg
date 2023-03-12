import { DefaultUser } from 'next-auth';

export interface IUserDetails extends DefaultUser {
  id: string;
  name: string;
  email: string;
  emailVerified: string;
  image: string;
  role: string;
}
