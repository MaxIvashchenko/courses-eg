interface IPaths {
  main: string;
  legal: string;
  profile: string;
  signIn: string;
  verifyRequest: string;
  authError: string;
  admin: string;
  program: string;
  lesson: string;
}

const paths: IPaths = {
  main: '/',
  legal: 'legal',
  profile: '/profile',
  signIn: '/signIn',
  verifyRequest: '/verify-request',
  authError: '/auth-error',
  admin: '/admin',
  program: '/program',
  lesson: '/lesson'
};

export default paths;
