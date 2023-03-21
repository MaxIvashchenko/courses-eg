import React, {
  memo,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState
} from 'react';
import { useRouter } from 'next/router';
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  Box,
  Button as MuiButton,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconComponent } from '@src/components/Common';
import { ILesson } from '@src/types/profile';

const Accordion = styled(MuiAccordion)(({ theme }) => ({
  background: 'none',
  width: '100%',
  marginBottom: 16,

  '&:before': {
    display: 'none'
  },

  '&.MuiAccordion-rounded': {
    borderRadius: 16
  },

  '& .MuiAccordionSummary-root:hover': {
    '& .title': {
      color: '#9ac9dc'
    },
    '& path': {
      fill: '#9ac9dc'
    }
  },

  [theme.breakpoints.down('md')]: {
    marginBottom: 8
  }
}));

const AccordionSummary = styled(MuiAccordionSummary, {
  shouldForwardProp: (prop) => prop !== 'isActive'
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  padding: '16px 32px',

  '& path, & h4': {
    fill: isActive ? '#bf8747' : '#000',
    color: isActive ? '#bf8747' : '#000'
  },
  [theme.breakpoints.down('md')]: {
    padding: '8px 16px'
  }
}));

const Button = styled(MuiButton)({
  padding: '8px 0',
  margin: 0,
  display: 'flex',
  justifyContent: 'flex-start',
  textAlign: 'left',
  '&:hover': {
    '& path, & h5': {
      fill: '#9ac9dc',
      color: '#9ac9dc'
    }
  }
});

interface BlockButtonProps {
  activeBlockId: string;
  title: string;
  id: string;
  lessons: {
    [key: string]: ILesson;
  };
}

const BlockButton = ({
  title,
  id,
  lessons,
  activeBlockId
}: BlockButtonProps) => {
  const router = useRouter();
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    setExpanded(activeBlockId);
  }, [activeBlockId]);

  const handleChange = useCallback(
    // @ts-ignore
    (id: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? id : null);
    },
    []
  );

  const lessonHandler = (lesson_id: string) => () =>
    router.push(`${router.asPath}/${id}/${lesson_id}`);

  const renderName = useCallback(
    (type: string, idx: number, name: string) =>
      type === 'lesson' ? `Урок ${idx + 1} - ${name}` : name,
    []
  );

  return (
    <Accordion
      disableGutters
      expanded={expanded === id}
      onChange={handleChange(id)}
    >
      <AccordionSummary
        expandIcon={<IconComponent name='downArrow' />}
        aria-controls={`${id}-content`}
        id={`${id}-header`}
        isActive={expanded === id}
      >
        <Typography variant='h4' className='title'>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ px: { xs: 3, md: 4 }, pb: { xs: 2, md: 2 } }}>
        {Object.values(lessons).map((lesson, idx) => (
          <Button
            onClick={lessonHandler(lesson.id)}
            key={lesson.id}
            fullWidth
            variant='text'
          >
            <Box>
              <IconComponent name={lesson.type} />
            </Box>
            <Typography ml={3} variant='h5'>
              {renderName(lesson.type, idx, lesson.name)}
            </Typography>
          </Button>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default memo(BlockButton);
