import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // perform you login logic
        // find out user from db
        if (email !== 'prosto_max@mail.ru' || password !== '123456') {
          throw new Error('invalid credentials');
        }

        // if everything is fine
        return {
          id: '1234',
          name: 'Max Iv',
          email: 'prosto_max@mail.ru',
          role: 'admin'
        };
      }
    })
  ],
  pages: {
    signIn: '/signIn'
    // error: '/auth/error',
    // signOut: '/auth/signout'
  },
  callbacks: {
    jwt(params) {
      // update token
      // return final_token
      return params.token;
    }
  }
};

export default NextAuth(authOptions);
