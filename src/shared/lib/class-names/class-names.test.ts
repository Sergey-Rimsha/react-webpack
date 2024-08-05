import { classNames } from './class-names';

describe('className', () => {
  test('class', () => {
    expect(classNames('class', {}, [])).toBe('class');
  });
  test('class not', () => {
    expect(classNames('class', {}, [])).not.toBe('name');
  });

  test('with additional', () => {
    const expected = 'class title header';

    expect(classNames('class', {}, ['title', 'header'])).toBe(expected);
  });

  test('not additional', () => {
    const expected = 'class title header';

    expect(classNames('class', {}, ['page', 'header'])).not.toBe(expected);
  });

  test('with mods', () => {
    const expected = 'class title header settings';

    expect(classNames('class', { settings: true }, ['title', 'header'])).toBe(expected);
  });

  test('undefined mods', () => {
    const expected = 'class title header';

    expect(classNames('class', { settings: undefined }, ['title', 'header'])).toBe(expected);
  });

  test('not mods', () => {
    const expected = 'class settings title header';

    expect(classNames('class', { settings: true }, ['title', 'header'])).not.toBe(expected);
  });
});
