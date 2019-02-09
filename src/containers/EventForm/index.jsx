import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import PersonForm from './components/PersonForm';
import ArtworkForm from './components/ArtworkForm';
import EventForm from './components/EventForm';
import OrgForm from './components/OrgForm';
import LocationForm from './components/LocationForm';

import { Page, Grid, GridContainer, Tabs, Tab } from './style';

function SimpleTabs() {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Page>
      <GridContainer spacing={24}>
        <AppBar position='static'>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
            textColor='primary'
            variant='scrollable'
            scrollButtons='auto'
          >
            <Tab label='Event Form' />
            <Tab label='Speaker Form' />
            <Tab label='Org Form' />
            <Tab label='Artwork Form' />
            <Tab label='Location Form' />
          </Tabs>
        </AppBar>
        <Grid sm={12}>
          {value === 0 && <EventForm />}
          {value === 1 && <PersonForm />}
          {value === 2 && <OrgForm />}
          {value === 3 && <ArtworkForm />}
          {value === 4 && <LocationForm />}
        </Grid>
      </GridContainer>
    </Page>
  );
}

export default SimpleTabs;
