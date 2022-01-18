import type { DummyTest } from '../../types';

export const promisifyCallback = (method: DummyTest): Promise<boolean> => {
  return new Promise((resolve) => {
    method(resolve);
  });
};
