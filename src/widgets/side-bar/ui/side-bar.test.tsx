import { screen } from '@testing-library/react';

import { SideBar } from './side-bar';

import { Paths } from 'shared/config';
import { renderWithSetup } from 'shared/lib';

describe('SideBar', () => {
  test('show SideBar', () => {
    renderWithSetup(<SideBar />);
    expect(screen.getByTestId('side-bar')).toBeInTheDocument();
  });

  test('show nav btn main', () => {
    renderWithSetup(<SideBar />);
    expect(screen.getByTestId('main-nav-btn')).toBeInTheDocument();
  });

  test('check href url main btn', () => {
    renderWithSetup(<SideBar />);
    const navButton = screen.getByTestId('main-nav-btn');

    expect(navButton).toBeInTheDocument();
    expect(navButton).toHaveAttribute('href', Paths.MAIN);
  });

  test('show nav btn article', () => {
    renderWithSetup(<SideBar />);
    expect(screen.getByTestId('article-nav-btn')).toBeInTheDocument();
  });

  test('check href url article btn', () => {
    renderWithSetup(<SideBar />);
    const navButton = screen.getByTestId('article-nav-btn');

    expect(navButton).toBeInTheDocument();
    expect(navButton).toHaveAttribute('href', Paths.ARTICLE);
  });
});
