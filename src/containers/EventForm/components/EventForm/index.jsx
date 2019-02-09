import React from 'react';
import { Formik, Field } from 'formik';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormField from 'components/FormField';
import { Form } from 'containers/EventForm/utils/FormBase/style';
import { GridContainer, Grid, ChipsContainer } from './style';

// export declare class FirebaseEvent {
//   id: string;
//   tgif: number;
//   title: string;
//   tagline: string;
//   description: string;
//   promotion: string;
//   githubUrl: string;
//   remarks: string;
//   startTime: firebase.firestore.Timestamp;
//   endTime: firebase.firestore.Timestamp;
//   speakers: FirebaseEventSpeaker[]; *
//   prerequisites: Prerequisite[]; *
//   dependencies: Dependency[]; *
//   banner: firebase.firestore.DocumentReference; *
//   venue: firebase.firestore.DocumentReference; *

//   eventbrite: Publication;
//   facebook: Publication;
//   status: EventStatus;
//   isPublic: boolean;
//   isExternal: boolean;
//   hasFood: boolean;
//   hasDrinks: boolean;
// }
// export declare class FirebaseEventSpeaker { *
//   person: firebase.firestore.DocumentReference;
//   organisation: firebase.firestore.DocumentReference;
//   position: string;
// }

const mainConfig = [
  { key: 'tgif' },
  { key: 'title' },
  { key: 'tagline' },
  { key: 'githubUrl' },
  { key: 'description', multiline: true },
  { key: 'promotion', multiline: true },
  { key: 'remarks' },
  { key: 'startTime', isTime: true, value: '2019-01-01T18:30' },
  { key: 'endTime', isTime: true, value: '2019-01-01T18:30' },
];

const testConfig = [{ key: 'dependencies' }, { key: 'prerequisites' }];

const booleanConfig = [
  { key: 'isPublic' },
  { key: 'isExternal' },
  { key: 'hasFood' },
  { key: 'hasDrinks' },
];

const EventForm = () => (
  <Formik
    initialValues={[...mainConfig, ...testConfig, ...booleanConfig].reduce(
      (agg, value) => ({
        [value.key]: value.value,
        ...agg,
      }),
      {},
    )}
    onSubmit={(values, { setSubmitting }) => {
      setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
    }}
  >
    {({ isSubmitting, errors, touched }) => (
      <Form width='100%'>
        <GridContainer>
          <Grid sm={4}>
            {booleanConfig.map(item => (
              <Field
                key={item.key}
                type={item.type || 'text'}
                name={item.key}
                render={({ field }) => (
                  <FormControlLabel
                    keyword={item.key}
                    control={<Checkbox color='primary' />}
                    label={item.key}
                    {...{ errors, touched, ...field }}
                  />
                )}
              />
            ))}
          </Grid>
          <Grid sm={4}>
            <ChipsContainer>{/* <Chips /> */}</ChipsContainer>
            {mainConfig.map(item => (
              <Field
                key={item.key}
                type={item.type || 'text'}
                name={item.key}
                render={({ field }) => (
                  <FormField
                    keyword={item.key}
                    multiline={item.multiline}
                    isTime={item.isTime}
                    {...{ errors, touched, ...field }}
                  />
                )}
              />
            ))}
          </Grid>
          <Grid sm={4}>
            {testConfig.map(item => (
              <Field
                key={item.key}
                type={item.type || 'text'}
                name={item.key}
                render={({ field }) => (
                  <FormField
                    keyword={item.key}
                    multiline={item.multiline}
                    isTime={item.isTime}
                    {...{ errors, touched, ...field }}
                  />
                )}
              />
            ))}
          </Grid>
          <Grid align='center' sm={12}>
            <Button type='submit' disabled={isSubmitting}>
              Submit
            </Button>
          </Grid>
        </GridContainer>
      </Form>
    )}
  </Formik>
);

export default EventForm;
