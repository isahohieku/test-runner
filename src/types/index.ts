export type ICallback = (passed: boolean) => void;

export type DummyTest = (callback: ICallback) => NodeJS.Timeout;

export interface ITestCases {
  description: string;
  run: DummyTest;
}

export interface IRefactoredTestCases extends ITestCases {
  status: Status;
}

export enum Status {
  notStarted = 'Not Started Yet',
  started = 'Running',
  passed = 'Passed',
  failed = 'Failed',
}
