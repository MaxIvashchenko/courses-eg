import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const KinescopePlayer = dynamic(import('@kinescope/react-kinescope-player'), {
  ssr: false
});

const VideoWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 880,
  height: 500,
  margin: '0 auto',
  backgroundColor: 'grey',

  '& iframe': {
    width: 880,
    height: 500
  },

  [theme.breakpoints.down('md')]: {
    width: 300,
    height: 150,
    '& iframe': {
      width: 300,
      height: 150
    }
  }
}));

const VideoPlayer: NextPage<{ id: string }> = ({ id }) => (
  <VideoWrapper>
    <KinescopePlayer videoId={id} />
  </VideoWrapper>
);

export default VideoPlayer;
