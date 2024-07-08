import { Button, ButtonGroup, Paper } from '@mui/material';
import {
  AnimatedBlock,
  useAnimatedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-ui-animate';

export const WithSpringModifier = () => {
  const translateX = useAnimatedValue(0);

  return (
    <Paper style={{ padding: 20 }} variant="outlined">
      <AnimatedBlock
        style={{
          height: 100,
          width: 100,
          background: '#f5533d',
          borderRadius: 4,
          translateX: translateX.value,
        }}
      />

      <ButtonGroup style={{ marginTop: 10 }}>
        <Button
          variant="outlined"
          onClick={() => (translateX.value = withSpring(100))}
        >
          Animate Right
        </Button>
        <Button
          variant="outlined"
          onClick={() =>
            (translateX.value = { toValue: 0, config: { immediate: true } })
          }
        >
          Reset
        </Button>
      </ButtonGroup>
    </Paper>
  );
};

export const WithSpringModifierConfig = () => {
  const translateX = useAnimatedValue(0);

  return (
    <Paper style={{ padding: 20 }} variant="outlined">
      <AnimatedBlock
        style={{
          height: 100,
          width: 100,
          background: '#f5533d',
          borderRadius: 4,
          translateX: translateX.value,
        }}
      />

      <ButtonGroup style={{ marginTop: 10 }}>
        <Button
          variant="outlined"
          onClick={() => (translateX.value = withSpring(100, { friction: 5 }))}
        >
          Animate Right
        </Button>
        <Button
          variant="outlined"
          onClick={() =>
            (translateX.value = { toValue: 0, config: { immediate: true } })
          }
        >
          Reset
        </Button>
      </ButtonGroup>
    </Paper>
  );
};

export const WithTimingModifier = () => {
  const translateX = useAnimatedValue(0);

  return (
    <Paper style={{ padding: 20 }} variant="outlined">
      <AnimatedBlock
        style={{
          height: 100,
          width: 100,
          background: '#3399ff',
          borderRadius: 4,
          translateX: translateX.value,
        }}
      />

      <ButtonGroup style={{ marginTop: 10 }}>
        <Button
          variant="outlined"
          onClick={() => (translateX.value = withTiming(100))}
        >
          Animate Right
        </Button>
        <Button
          variant="outlined"
          onClick={() =>
            (translateX.value = { toValue: 0, config: { immediate: true } })
          }
        >
          Reset
        </Button>
      </ButtonGroup>
    </Paper>
  );
};

export const WithTimingModifierConfig = () => {
  const translateX = useAnimatedValue(0);

  return (
    <Paper style={{ padding: 20 }} variant="outlined">
      <AnimatedBlock
        style={{
          height: 100,
          width: 100,
          background: '#3399ff',
          borderRadius: 4,
          translateX: translateX.value,
        }}
      />

      <ButtonGroup style={{ marginTop: 10 }}>
        <Button
          variant="outlined"
          onClick={() =>
            (translateX.value = withTiming(100, { duration: 5000 }))
          }
        >
          Animate Right
        </Button>
        <Button
          variant="outlined"
          onClick={() =>
            (translateX.value = { toValue: 0, config: { immediate: true } })
          }
        >
          Reset
        </Button>
      </ButtonGroup>
    </Paper>
  );
};

export const WithEaseModifier = () => {
  const translateX = useAnimatedValue(0);

  return (
    <Paper style={{ padding: 20 }} variant="outlined">
      <AnimatedBlock
        style={{
          height: 100,
          width: 100,
          background: '#32a852',
          borderRadius: 4,
          translateX: translateX.value,
        }}
      />

      <ButtonGroup style={{ marginTop: 10 }}>
        <Button variant="outlined" onClick={() => (translateX.value = 100)}>
          Animate Right
        </Button>
        <Button
          variant="outlined"
          onClick={() =>
            (translateX.value = { toValue: 0, config: { immediate: true } })
          }
        >
          Reset
        </Button>
      </ButtonGroup>
    </Paper>
  );
};

export const WithSequenceModifier = () => {
  const translateX = useAnimatedValue(0);

  return (
    <Paper style={{ padding: 20 }} variant="outlined">
      <AnimatedBlock
        style={{
          height: 100,
          width: 100,
          background: '#f0ca6c',
          borderRadius: 4,
          translateX: translateX.value,
        }}
      />

      <ButtonGroup style={{ marginTop: 10 }}>
        <Button
          variant="outlined"
          onClick={() => {
            translateX.value = withSequence([withSpring(50), withTiming(100)]);
          }}
        >
          Animate Right
        </Button>
        <Button
          variant="outlined"
          onClick={() =>
            (translateX.value = { toValue: 0, config: { immediate: true } })
          }
        >
          Reset
        </Button>
      </ButtonGroup>
    </Paper>
  );
};
