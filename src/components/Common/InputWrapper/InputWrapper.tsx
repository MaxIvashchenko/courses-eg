import { Box, Typography } from '@mui/material';

interface InputWrapperProps {
  children: JSX.Element;
  errorMsg?: string;
  isTouched?: boolean;
}

const InputWrapper = ({ children, errorMsg, isTouched }: InputWrapperProps) => (
  <Box sx={{ position: 'relative' }}>
    {children}
    <Box sx={{ position: 'absolute', left: 0, bottom: 2 }}>
      {isTouched && (
        <Typography variant='body2' color='error.main'>
          {errorMsg}
        </Typography>
      )}
    </Box>
  </Box>
);

export default InputWrapper;
