import NextAuth, { DefaultSession, NextAuthOptions } from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { paths } from '@src/constants';
import { IUserDetails } from '@src/types';
import { cloneDeep } from 'lodash';

import prisma from '../../../lib/prismadb';
import CustomsendVerificationRequest from './signinemail';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user?: IUserDetails;
  }
}

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST as string,
        port: process.env.EMAIL_SERVER_PORT as number | undefined,
        auth: {
          user: process.env.EMAIL_SERVER_USER as string,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest({ identifier, url, provider }) {
        CustomsendVerificationRequest({ identifier, url, provider });
      }
    })
  ],
  pages: {
    signIn: paths.signIn,
    verifyRequest: paths.verifyRequest,
    error: paths.authError
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        const user = cloneDeep(token.user);
        // @ts-ignore
        session.user = user;
      }
      return Promise.resolve(session);
    }
  }
};

export default NextAuth(authOptions);
