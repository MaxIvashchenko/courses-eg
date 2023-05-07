import { DefaultUser } from 'next-auth';

export interface IUserDetails extends DefaultUser {
  id: string;
  name: string;
  email: string;
  emailVerified: string;
  image: string;
  role: string;
  available_courses: string[];
}

export type ISnackbarState = {
  message: string;
  isError?: boolean;
};
