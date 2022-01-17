import type { DummyTest, ICallback } from '../../types';

const generateDummyTest = (): DummyTest => {
  const delay = 7000 + Math.random() * 7000;
  const testPassed = Math.random() > 0.5;

  return (callback: ICallback) => setTimeout(() => callback(testPassed), delay);
};

export default generateDummyTest;
