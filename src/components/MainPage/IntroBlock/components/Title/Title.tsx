import { memo } from 'react';
import AnimatedText from 'react-animated-text-content';
import { styled } from '@mui/material/styles';

const SubTitle = styled('div')(({ theme }) => ({
  textTransform: 'uppercase',
  fontWeight: 400,
  fontSize: 72,
  lineHeight: 1,
  marginBottom: 32,

  [theme.breakpoints.down('sm')]: {
    fontSize: 32,
    marginBottom: 8
  }
}));

const BigTitle = styled('div')(({ theme }) => ({
  '& .animated': {
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: 72,
    lineHeight: 0,

    [theme.breakpoints.down('sm')]: {
      fontSize: 32
    }
  }
}));

const title: string[] = ['ГАСТРОБИЗНЕС', 'ПОД КЛЮЧ', 'В ПОЛЬШЕ'];

const Title = () => (
  <>
    {title.map((text) => (
      <BigTitle key={text}>
        <AnimatedText
          type='words' // animate words or chars
          tag='p'
          animation={{
            x: '200px',
            y: '-20px',
            scale: 1.1,
            ease: 'ease-in-out'
          }}
          animationType='float'
          interval={0.1}
          duration={1.8}
          className='animated'
          includeWhiteSpaces
          threshold={0.1}
          rootMargin='20%'
        >
          {text}
        </AnimatedText>
      </BigTitle>
    ))}

    <SubTitle>
      <AnimatedText
        type='words' // animate words or chars
        animation={{
          x: '200px',
          y: '-20px',
          scale: 1.1,
          ease: 'ease-in-out'
        }}
        animationType='float'
        interval={0.06}
        duration={0.8}
        tag='span'
        className='animated'
        includeWhiteSpaces
        threshold={0.1}
        rootMargin='20%'
      >
        Онлайн-курс
      </AnimatedText>
    </SubTitle>
  </>
);

export default memo(Title);
