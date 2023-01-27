import React from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    landing1: React.CSSProperties;
    landing2: React.CSSProperties;
    landing3: React.CSSProperties;
    body3: React.CSSProperties;
    'body1-sm': React.CSSProperties;
    'h1-sm': React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    landing1?: React.CSSProperties;
    landing2?: React.CSSProperties;
    landing3?: React.CSSProperties;
    body3?: React.CSSProperties;
    'body1-sm'?: React.CSSProperties;
    'h1-sm'?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    landing1: true;
    landing2: true;
    landing3: true;
    body3: true;
    'body1-sm': true;
    'h1-sm': true;
    contained: true;
    outlined: true;
    text: true;
  }
}
