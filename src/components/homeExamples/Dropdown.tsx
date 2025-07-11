import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import {
  animate,
  Easing,
  Mount,
  useOutsideClick,
  withTiming,
} from 'react-ui-animate';
import { FaUser, FaInfoCircle } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { IoLogOut } from 'react-icons/io5';

const Wrapper = styled.div`
  margin: 40px;
`;

const MenuContainer = styled(animate.div)`
  position: relative;
  display: inline-block;
`;

const Menu = styled(animate.ul)`
  background-color: white;
  border: 1px solid #e1e1e1;
  display: inline-block;
  width: 180px;
  border-radius: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.12);
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 100;
  padding-left: 0px;
`;

const MenuItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 8px;

  &.item {
    padding: 8px 10px;
    cursor: pointer;
    user-select: none;
    color: #000;

    &.danger {
      color: red;
    }

    &:hover {
      background-color: #f1f1f1;
    }
  }

  &.separator {
    border-top: 1px solid #e1e1e1;
    margin-top: 4px;
    margin-bottom: 4px;
  }
`;

const IconContainer = styled.span`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
`;

const MenuChildren = styled.div`
  display: inline-block;
`;

type DropdownMenuItem = {
  title?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  danger?: boolean;
  isSeparator?: boolean;
};

interface DropdownMenuProps {
  items: DropdownMenuItem[];
  children: React.ReactNode;
}

const DropdownMenu = ({ items, children }: DropdownMenuProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => {
    if (open) {
      setOpen(false);
    }
  });

  return (
    <MenuContainer ref={ref}>
      <MenuChildren
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen((p) => !p);
        }}
      >
        {children}
      </MenuChildren>

      <Mount
        state={open}
        enter={withTiming(1, {
          duration: 250,
          easing: Easing.elastic(1),
        })}
        exit={withTiming(0, {
          duration: 250,
          easing: Easing.elastic(1),
        })}
      >
        {(a) => (
          <Menu
            style={{
              opacity: a,
              translateY: a.to([0, 1], [-10, 8]),
              scale: a.to([0, 1], [0.8, 1]),
            }}
          >
            {items.map(({ title, icon, onClick, danger, isSeparator }, index) =>
              isSeparator ? (
                <MenuItem className="separator" key={index} />
              ) : (
                <MenuItem
                  className={danger ? 'item danger' : 'item'}
                  key={index}
                  onClick={onClick}
                >
                  {icon && <IconContainer>{icon}</IconContainer>}
                  {title}
                </MenuItem>
              )
            )}
          </Menu>
        )}
      </Mount>
    </MenuContainer>
  );
};

export function Dropdown() {
  return (
    <Wrapper>
      <DropdownMenu
        items={[
          {
            title: 'About',
            icon: <FaInfoCircle />,
            onClick: () => alert('About clicked'),
          },
          { title: 'Profile', icon: <FaUser /> },
          { title: 'Settings', icon: <IoMdSettings /> },
          { isSeparator: true },
          { title: 'Logout', danger: true, icon: <IoLogOut /> },
        ]}
      >
        <button className="btn" type="button">
          Toggle
        </button>
      </DropdownMenu>
    </Wrapper>
  );
}
