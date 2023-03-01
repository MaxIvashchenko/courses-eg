import React, { useState } from 'react';
import { ContactForm, Modal } from '@src/components';

import {
  CourseTarget,
  IntroBlock,
  Programs,
  SpeakersSlider,
  YourGain
} from 'components';

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const modalHandler = () => setIsOpen((prev) => !prev);

  return (
    <>
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
