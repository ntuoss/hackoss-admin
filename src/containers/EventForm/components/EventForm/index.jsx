import React from 'react';
import * as PropTypes from 'prop-types';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import { Formik } from 'formik';

import { Form } from 'containers/EventForm/utils/FormBase/style';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';
import Referencing from './components/Referencing';
import createEvent from './function';
import {
  Wrapper,
  Stepper,
  GridContainer,
  ButtonWrapper,
  Button,
} from './style';
import { initConfig } from './config';

// // export declare class FirebaseEvent {
// //   id: string;
// //   tgif: number;
// //   title: string;
// //   tagline: string;
// //   description: string;
// //   promotion: string;
// //   githubUrl: string;
// //   remarks: string;
// //   startTime: firebase.firestore.Timestamp;
// //   endTime: firebase.firestore.Timestamp;
// //   speakers: FirebaseEventSpeaker[];
// //   prerequisites: Prerequisite[];
// //   dependencies: Dependency[];
// //   banner: firebase.firestore.DocumentReference;
// //   venue: firebase.firestore.DocumentReference;

// //   eventbrite: Publication;
// //   facebook: Publication;
// //   status: EventStatus;
// //   isPublic: boolean;
// //   isExternal: boolean;
// //   hasFood: boolean;
// //   hasDrinks: boolean;
// // }

function chooseForm(values, activeStep, errors, touched) {
  switch (activeStep) {
    case 0:
      return <FirstStep {...{ activeStep, errors, touched }} />;
    case 1:
      return <SecondStep {...{ values, activeStep, errors, touched }} />;
    case 2:
      return <ThirdStep {...{ values, activeStep, errors, touched }} />;
    case 3:
      return <Referencing {...{ values, activeStep, errors, touched }} />;
    default:
      return 'Unknown step';
  }
}

function HorizontalLinearStepper({ setStatus }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ['Basic setting', 'Dependencies', 'Prerequisite', 'References'];

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <Wrapper>
      <Formik
        initialValues={initConfig}
        onSubmit={(values, { setSubmitting }) => {
          createEvent(values)
            .then(() => {
              setStatus('success');
            })
            .catch(e => setStatus(e))
            .finally(() => {
              setSubmitting(false);
            });
        }}
      >
        {({ values, isSubmitting, errors, touched }) => (
          <Form width='100%'>
            <Stepper activeStep={activeStep}>
              {steps.map(label => (
                <Step key={label} completed={false}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <GridContainer direction='column' alignItems='stretch'>
              {activeStep === steps.length ? (
                <GridContainer direction='column' alignItems='center'>
                  <Typography component='h3' variant='h3' gutterBottom>
                    All steps completed
                  </Typography>
                  <div>
                    <Button onClick={handleReset}>Reset</Button>
                    <Button type='submit' disabled={isSubmitting}>
                      Submit
                    </Button>
                  </div>
                </GridContainer>
              ) : (
                <>
                  <GridContainer direction='column' alignItems='center'>
                    {chooseForm(values, activeStep, errors, touched)}
                  </GridContainer>
                  <ButtonWrapper>
                    <Button
                      margin='normal'
                      disabled={activeStep === 0}
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={handleNext}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </ButtonWrapper>
                </>
              )}
            </GridContainer>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
}
HorizontalLinearStepper.propTypes = {
  setStatus: PropTypes.func.isRequired,
};
export default HorizontalLinearStepper;
