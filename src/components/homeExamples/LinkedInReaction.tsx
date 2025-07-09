import React, { useLayoutEffect, useState } from 'react';
import {
  animate,
  useValue,
  withDelay,
  withSpring,
  withTiming,
  withSequence,
  useMount,
} from 'react-ui-animate';

import { MdThumbUp } from 'react-icons/md';
import { FaHandsClapping } from 'react-icons/fa6';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { HiLightBulb } from 'react-icons/hi';
import { FaLaughBeam } from 'react-icons/fa';

import './LinkedInReaction.css';

function LinkedInReactionIcon({ index, icon, reaction, onSelectReaction }) {
  const [labelVisible, setLabelVisible] = useState(false);
  const [animation, setAnimation] = useValue(0);
  const [hovered, setHovered] = useValue(0);
  const mount = useMount(labelVisible, {
    exit: withTiming(0, { duration: 100 }),
  });

  useLayoutEffect(() => {
    setAnimation(
      withSequence([
        withDelay(100 * index),
        withSpring(1, { damping: 14, stiffness: 300 }),
      ])
    );
  }, [index]);

  return (
    <animate.div
      onMouseEnter={() => {
        setLabelVisible(true);
        setHovered(withSpring(1));
      }}
      onMouseLeave={() => {
        setLabelVisible(false);
        setHovered(withSpring(0));
      }}
      onClick={() => onSelectReaction(reaction)}
      style={{
        position: 'relative',
        opacity: animation,
        translateY: animation.to([0, 1], [20, 0]),
      }}
    >
      <animate.div
        style={{
          width: 30,
          height: 30,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          scale: hovered.to([0, 1], [1, 1.6]),
          translateY: hovered.to([0, 1], [0, -6]),
        }}
      >
        {icon}
      </animate.div>

      {mount(
        (animation, mounted) =>
          mounted && (
            <animate.div
              style={{
                position: 'absolute',
                fontSize: 12,
                left: '50%',
                top: -50,
                textAlign: 'center',
                transform: 'translateX(-50%)',
                fontWeight: 'normal',
                backgroundColor: 'black',
                color: 'white',
                padding: '4px 8px',
                borderRadius: 10,
                opacity: animation,
              }}
            >
              {reaction}
            </animate.div>
          )
      )}
    </animate.div>
  );
}

function LinkedInReaction({ children, reactions, onSelect }) {
  const [reactionVisible, setReactionVisible] = useState(false);

  const mount = useMount(reactionVisible, {
    exit: withTiming(0, { duration: 100 }),
  });

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        fontWeight: 'bold',
        cursor: 'pointer',
        width: 80,
        padding: '10px 0',
        position: 'relative',
      }}
      onMouseEnter={() => setReactionVisible(true)}
      onMouseLeave={() => setReactionVisible(false)}
    >
      {children}

      {mount(
        (animation, mount) =>
          mount && (
            <animate.div
              style={{
                position: 'absolute',
                left: '-20%',
                bottom: '100%',
                padding: 10,
                backgroundColor: '#fff',
                boxShadow: '0px 8px 16px rgba(0,0,0,0.12)',
                border: '1px solid #f1f1f1',
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                opacity: animation,
                zIndex: 10,
              }}
            >
              {Object.entries(reactions).map(([reaction, icon], index) => (
                <LinkedInReactionIcon
                  key={reaction}
                  index={index}
                  icon={icon}
                  reaction={reaction}
                  onSelectReaction={onSelect}
                />
              ))}
            </animate.div>
          )
      )}
    </div>
  );
}

export function LinkedInReact() {
  return (
    <div
      style={{
        margin: 100,
      }}
    >
      <LinkedInReaction
        reactions={{
          Like: <MdThumbUp size={24} color="#378fe9" />,
          Celebrate: <FaHandsClapping size={24} color="#6dae4f" />,
          Support: <FaHandHoldingHeart size={24} color="#bba9d1" />,
          Love: <FaHeart size={20} color="#df704c" />,
          Insightful: <HiLightBulb size={26} color="#f5bb5c" />,
          Funny: <FaLaughBeam size={24} color="#79deed" />,
        }}
        onSelect={(reaction) => alert(reaction)}
      >
        <div className="like-button">
          <MdThumbUp size={18} /> <span>Like</span>
        </div>
      </LinkedInReaction>
    </div>
  );
}
