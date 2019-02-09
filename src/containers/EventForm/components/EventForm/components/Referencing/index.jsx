import React from 'react';
import { Field } from 'formik';

import FormField from 'components/FormField';
import { GridContainer, FieldWrapper } from '../style';
import { dependencyConfig, prerequisiteConfig } from '../../config';

// export declare class Dependency {
//   label: string;
//   specification: string;
//   referenceUrl: string;
// }
// export declare class Prerequisite {
//   label: string;
//   proficiency: Proficiency;
//   referenceUrl: string;
// }

/* eslint-disable */
const SecondStep = ({ activeStep, errors, touched }) => (
  <GridContainer container direction='row' justify='space-evenly'>
    <FieldWrapper sm={6}>
      {dependencyConfig.map(item => (
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
    </FieldWrapper>
    <FieldWrapper sm={6}>
      {prerequisiteConfig.map(item => (
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
    </FieldWrapper>
  </GridContainer>
);

export default SecondStep;
