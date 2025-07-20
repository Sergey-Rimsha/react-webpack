import { ComponentPropsWithoutRef, ElementType, ReactElement, ReactNode } from 'react';

import s from './button.module.scss';

import { classNames } from 'shared/lib';

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T;
  children: ReactNode;
  variant?: 'primary' | 'secondaryGreen' | 'secondaryReed' | 'secondaryDark' | 'secondaryLight';
  fullWidth?: boolean;
  className?: string;
} & ComponentPropsWithoutRef<T>;

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>): ReactElement<T> => {
  const { variant = 'primary', fullWidth, as: Component = 'button', children, onlyIcon, className, ...rest } = props;

  // const styleIcon = classNames(onlyIcon && s.onlyIcon);
  //
  // const styleButton = classNames(s.button, s[variant], fullWidth && s.fullWidth);

  // useEffect(() => {
  //   console.log(variant);
  // }, [variant]);

  return (
    <Component className={classNames(s.button, {}, [s[variant], className])} {...rest}>
      {children}
    </Component>
  );
};
