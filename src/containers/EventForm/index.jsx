import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';

import SnackBar from 'components/SnackBar';
import PersonForm from './components/PersonForm';
import ArtworkForm from './components/ArtworkForm';
import EventForm from './components/EventForm';
import OrgForm from './components/OrgForm';
import LocationForm from './components/LocationForm';

import { HeaderWrapper, Page, Grid, GridContainer, Tabs, Tab } from './style';

function SimpleTabs() {
  const [value, setValue] = React.useState(0);
  const [status, setStatusBase] = useState('');

  const setStatus = msg => {
    setStatusBase({ msg, date: new Date() });
  };

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Page>
      <GridContainer spacing={24}>
        <HeaderWrapper>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            variant='scrollable'
            scrollButtons='auto'
          >
            <Tab label='Event Form' />
            <Tab label='Person Form' />
            <Tab label='Org Form' />
            <Tab label='Artwork Form' />
            <Tab label='Location Form' />
          </Tabs>
        </HeaderWrapper>
        <Divider />
        <Grid sm={12}>
          {value === 0 && <EventForm setStatus={setStatus} />}
          {value === 1 && <PersonForm setStatus={setStatus} />}
          {value === 2 && <OrgForm setStatus={setStatus} />}
          {value === 3 && <ArtworkForm setStatus={setStatus} />}
          {value === 4 && <LocationForm setStatus={setStatus} />}
        </Grid>
      </GridContainer>
      {status ? <SnackBar key={status.date} status={status.msg} /> : null}
    </Page>
  );
}

export default SimpleTabs;
