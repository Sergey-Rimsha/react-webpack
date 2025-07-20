import { render, screen } from '@testing-library/react';

import { Button } from './button';

describe('button', () => {
  test('show text', () => {
    const testText = 'test text';

    render(<Button>{testText}</Button>);
    expect(screen.getByText(testText)).toBeInTheDocument();
  });
});
