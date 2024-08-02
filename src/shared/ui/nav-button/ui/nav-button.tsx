import { FC } from 'react';

import { NavLink, NavLinkProps } from 'react-router-dom';

import s from './nav-button.module.scss';

import { classNames } from 'shared/lib';

interface NavButtonProps extends NavLinkProps {
  className?: string;
}

export const NavButton: FC<NavButtonProps> = (props) => {
  const { to, className, children, ...rest } = props;

  const classActive = ({ isActive }: { isActive: boolean }): string => {
    return classNames(s.navButton, { [s.navButtonActive]: isActive }, [className]);
  };

  return (
    <NavLink to={to} className={classActive} {...rest}>
      {children}
    </NavLink>
  );
};
