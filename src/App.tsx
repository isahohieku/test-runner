import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PlayCircle } from 'react-feather';
import Button from './components/atoms/button';
import Loader from './components/atoms/loader';
import type { IRefactoredTestCases } from './types';
import { Status } from './types';
import { promisifyCallback } from './utils/functions';
import { testCases } from './utils/text-cases';

const App = () => {
  const [tests, setTests] = useState<IRefactoredTestCases[]>(
    testCases.map(({ ...rest }) => {
      return { ...rest, status: Status.notStarted };
    }),
  );

  const runTest = (): void => {
    const clonedTests = [...tests];
    try {
      clonedTests.forEach(({ run }, position) => {
        const cloned = [...tests];
        cloned[position].status = Status.started;
        setTests(cloned);
        promisifyCallback(run).then((success) => {
          cloned[position].status = success ? Status.passed : Status.failed;
          setTests(cloned);
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <Container className="mt-5">
        <Row>
          <Col className="d-flex align-items-center border-bottom pb-2">
            <h2 className="text-white mb-0">Simple test runner</h2>
            {!tests.some(({ status }) => status === Status.started) ? (
              <Button
                type="button"
                className="ms-auto"
                innerText="Start Tests"
                onClick={() => runTest()}
              />
            ) : (
              <Loader className="ms-auto" />
            )}
          </Col>
        </Row>
        <Row>
          <Col className="pl-5 mt-5">
            {tests
              .sort((a, b) => {
                if (a.status < b.status) return 1;
                if (a.status > b.status) return -1;
                return 0;
              })
              .map(({ description, status }) => (
                <p key={description} className="text-capitalize text-white">
                  <PlayCircle className="text-success" /> {description} - {status}
                </p>
              ))}
          </Col>
        </Row>

        {(tests.some(({ status }) => status === Status.started) ||
          tests.every(({ status }) => [Status.passed, Status.failed].includes(status))) && (
          <Row className="mt-4">
            <Col>
              <p className="text-white font-weight-bold mb-1">Test Summary:</p>
              <p className="text-success mb-0 ms-4">
                Total Pass: {tests.filter(({ status }) => status === Status.passed).length}
              </p>
              <p className="text-danger ms-4">
                Total Failed: {tests.filter(({ status }) => status === Status.failed).length}
              </p>

              {tests.every(({ status }) => [Status.passed, Status.failed].includes(status)) && (
                <p className="text-uppercase text-white mt-3">Finished!</p>
              )}
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default App;
