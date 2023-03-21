import React, { useEffect, useState } from 'react';
import { ContactForm, Modal } from '@src/components';
import { useLoaderContext } from '@src/hooks';

import {
  CourseTarget,
  IntroBlock,
  Loader,
  Programs,
  SpeakersSlider,
  YourGain
} from 'components';

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isLoading, setLoading } = useLoaderContext();

  const modalHandler = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    setLoading(false);

    return () => {
      setLoading(false);
    };
  }, [setLoading]);

  return (
    <>
      {isLoading && <Loader isFullPage fill='#fff' />}
      <IntroBlock modalHandler={modalHandler} />
      <CourseTarget />
      <YourGain />
      <SpeakersSlider />
      <Programs modalHandler={modalHandler} />

      <Modal isOpen={isOpen} closeModal={modalHandler}>
        <ContactForm modalHandler={modalHandler} />
      </Modal>
    </>
  );
};
export default Home;
