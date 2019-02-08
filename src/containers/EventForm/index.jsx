import React from 'react';
import AppBar from '@material-ui/core/AppBar';

import PersonForm from './components/PersonForm';
import { Page, Grid, GridContainer, Tabs, Tab } from './style';

function SimpleTabs() {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Page>
      <GridContainer spacing={24}>
        <Grid xs={12} sm={8}>
          <AppBar position='static'>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor='primary'
              textColor='primary'
            >
              <Tab label='Event Form' />
              {/* <Tab label='Speaker Form' />
              <Tab label='Org Form' />
              <Tab label='Artwork Form' /> */}
            </Tabs>
          </AppBar>
          {value === 0 && <PersonForm />}
          {/* {value === 1 && <PersonForm />}
          {value === 2 && <PersonForm />}
          {value === 3 && <PersonForm />} */}
        </Grid>
        <Grid xs={12} sm={4}>
          Sub-form panel
        </Grid>
      </GridContainer>
    </Page>
  );
}

export default SimpleTabs;
