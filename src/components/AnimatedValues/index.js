import { Button, Paper, ButtonGroup } from '@mui/material';
import { AnimatedBlock, useAnimatedValue, withTiming } from 'react-ui-animate';

export default function () {
  const opacity = useAnimatedValue(1);

  return (
    <Paper style={{ padding: 20 }} variant='outlined'>
      <AnimatedBlock
        style={{
          opacity: opacity.value,
          height: 100,
          width: 100,
          background: '#39F',
          borderRadius: 4,
        }}
      />

      <ButtonGroup variant='outlined' style={{ marginTop: 10 }}>
        <Button onClick={() => (opacity.value = 0)}>Fade Out</Button>
        <Button
          onClick={() => (opacity.value = withTiming(1, { duration: 0 }))}
        >
          Reset
        </Button>
      </ButtonGroup>
    </Paper>
  );
}
