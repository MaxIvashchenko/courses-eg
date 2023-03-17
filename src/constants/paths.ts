interface IPaths {
  main: string;
  legal: string;
  profile: string;
  signIn: string;
  verifyRequest: string;
  authError: string;
  admin: string;
}

const paths: IPaths = {
  main: '/',
  legal: 'legal',
  profile: '/profile',
  signIn: '/signIn',
  verifyRequest: '/verify-request',
  authError: '/auth-error',
  admin: '/admin'
};

export default paths;
