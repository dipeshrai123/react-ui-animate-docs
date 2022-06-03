import React, { useState } from "react";
import "./css/hoverMenu.css";

import {
  TransitionBlock,
  interpolate,
  AnimatedBlock,
  AnimationConfigUtils,
} from "react-ui-animate";

export const HoverMenu = () => {
  const [open, setOpen] = useState(false);
  const [bounce, setBounce] = useState(true);

  return (
    <div className="hover-menu-container">
      <div
        className="hover-menu-area"
        onMouseEnter={() => {
          setOpen(true);
          setBounce(false);
        }}
        onMouseLeave={() => {
          setOpen(false);
          setBounce(true);
        }}
      >
        <div
          className={
            bounce ? "hover-menu-body hover-menu-bounce" : "hover-menu-body"
          }
        >
          <h4 className="hover-menu-name">Explore</h4>
          <div className="hover-menu-options">
            <TransitionBlock
              state={open}
              config={{
                ...AnimationConfigUtils.WOOBLE,
                friction: 15,
              }}
            >
              {(animation) => (
                <AnimatedBlock
                  className="hover-menu-1"
                  style={{
                    opacity: interpolate(animation.value, [0, 1], [0, 1]),
                    translateX: interpolate(
                      animation.value,
                      [0, 1],
                      ["0px", "-80px"]
                    ),
                  }}
                >
                  1<div className="hover-menu-bottom-border"></div>
                </AnimatedBlock>
              )}
            </TransitionBlock>
            <TransitionBlock
              state={open}
              className="hover-menu-options"
              config={{
                ...AnimationConfigUtils.WOOBLE,
                friction: 15,
              }}
            >
              {(animation) => (
                <AnimatedBlock
                  className="hover-menu-2"
                  style={{
                    opacity: interpolate(animation.value, [0, 1], [0, 1]),
                    translateY: interpolate(
                      animation.value,
                      [0, 1],
                      ["0px", "-79px"]
                    ),
                  }}
                >
                  2<div className="hover-menu-bottom-border"></div>
                </AnimatedBlock>
              )}
            </TransitionBlock>
            <TransitionBlock
              state={open}
              className="hover-menu-options"
              config={{
                ...AnimationConfigUtils.WOOBLE,
                friction: 15,
              }}
            >
              {(animation) => (
                <AnimatedBlock
                  className="hover-menu-3"
                  style={{
                    opacity: interpolate(animation.value, [0, 1], [0, 1]),
                    translateX: interpolate(
                      animation.value,
                      [0, 1],
                      ["0px", "80px"]
                    ),
                  }}
                >
                  3<div className="hover-menu-bottom-border"></div>
                </AnimatedBlock>
              )}
            </TransitionBlock>
            <TransitionBlock
              state={open}
              className="hover-menu-options"
              config={{
                ...AnimationConfigUtils.WOOBLE,
                friction: 15,
              }}
            >
              {(animation) => (
                <AnimatedBlock
                  className="hover-menu-4"
                  style={{
                    opacity: interpolate(animation.value, [0, 1], [0, 1]),
                    translateY: interpolate(
                      animation.value,
                      [0, 1],
                      ["0px", "79px"]
                    ),
                  }}
                >
                  4<div className="hover-menu-bottom-border"></div>
                </AnimatedBlock>
              )}
            </TransitionBlock>
          </div>
        </div>
      </div>
    </div>
  );
};
