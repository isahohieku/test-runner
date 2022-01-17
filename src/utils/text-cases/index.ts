import type { ITestCases } from '../../types';
import generateDummyTest from '../mock-spec';

export const tests: ITestCases[] = [
  { description: 'commas are rotated properly', run: generateDummyTest() },
  {
    description: 'exclamation points stand up straight',
    run: generateDummyTest(),
  },
  {
    description: "run-on sentences don't run forever",
    run: generateDummyTest(),
  },
  { description: 'question marks curl down, not up', run: generateDummyTest() },
  {
    description: 'semicolons are adequately waterproof',
    run: generateDummyTest(),
  },
  { description: 'capital letters can do yoga', run: generateDummyTest() },
];
