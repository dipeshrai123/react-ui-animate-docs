import React from 'react';
import { AnimatedBlock, useAnimatedValue } from 'react-ui-animate';
import { Button, Grid, Box, ButtonGroup } from '@mui/material';

const Example = () => {
  const left = useAnimatedValue(0);

  return (
    <Box
      style={{
        background: '#F6F8FA',
        borderRadius: 10,
      }}
      padding={2}
      marginBottom={2}
    >
      <Grid container spacing={2} marginBottom={2}>
        <Grid item xs={8}>
          <AnimatedBlock
            style={{
              width: 100,
              height: 100,
              background: '#39F',
              position: 'relative',
              left: left.value,
            }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item>
          <ButtonGroup variant='contained' aria-label='outlined button group'>
            <Button onClick={() => (left.value = 0)}>Animate Left</Button>
            <Button onClick={() => (left.value = 500)}>Animate Right</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Example;
