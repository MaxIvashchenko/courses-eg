interface IPaths {
  main: string;
  legal: string;
  profile: string;
  signIn: string;
  modules: string;
  module: string;
  block: string;
  verifyRequest: string;
  authError: string;
  admin: string;
}

const paths: IPaths = {
  main: '/',
  legal: 'legal',
  profile: '/profile',
  signIn: '/signIn',
  modules: '/modules',
  module: '/module',
  block: '/block',
  verifyRequest: '/verify-request',
  authError: '/auth-error',
  admin: '/admin'
};

export default paths;
