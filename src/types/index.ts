export type ICallback = (passed: boolean) => boolean;

export type DummyTest = (callback: ICallback) => NodeJS.Timeout;

export interface ITestCases {
  description: string;
  run: DummyTest;
}
