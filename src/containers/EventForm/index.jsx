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
  const [status, setStatus] = useState('');

  function handleChange(event, newValue) {
    setValue(newValue);
    setStatus('');
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
      {status ? <SnackBar status={status} /> : null}
      {/* This step is error prone. TODO: better design for SnackBar */}
    </Page>
  );
}

export default SimpleTabs;
