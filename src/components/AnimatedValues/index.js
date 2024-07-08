import { Button, Paper } from '@mui/material';
import { AnimatedBlock, useAnimatedValue } from 'react-ui-animate';

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

      <Button
        style={{ marginTop: 10 }}
        variant='outlined'
        onClick={() => (opacity.value = 0)}
      >
        Fade Out
      </Button>
    </Paper>
  );
}
