import { ReactNode, Suspense } from 'react';

import { render, RenderResult } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';

import { startI18nForTest } from 'shared/config';

type RenderWithSetup = (Component: ReactNode) => RenderResult;

export const renderWithSetup: RenderWithSetup = Component => {
  return render(
    <Suspense fallback="...loading">
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <I18nextProvider i18n={startI18nForTest()} />
        {Component}
      </BrowserRouter>
    </Suspense>,
  );
};
