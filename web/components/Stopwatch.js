import React, { useState } from 'react';
import styled from 'styled-components';
import useInterval from '../hooks/useInterval';

const StopwatchStyles = styled.section`
  color: var(--blue);
  font-family: Arial;

  h1 {
    text-align: center;
    font-style: normal;
    color: black;
  }

  .stopwatch {
    border: 1px solid black;
    border-radius: 25px;
    overflow: hidden;
    font-weight: bold;
    font-size: 16px;
    width: 400px;
    margin: 0.5em 0;
    button {
      cursor: pointer;
      font-weight: inherit;
      font-size: inherit;
    }
    .jobline {
      display: flex;
      justify-content: space-between;
      height: 100%;
      position: relative;
    }
    .job {
      background: black;
      color: white;
      font-size: 16px;
      padding: 0.5em 1.5em;
      flex: 1;
    }
    .spinner {
      height: 100%;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: black;
    }
    .animation {
      margin: 0 1em 0 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 5px solid white;
      border-left: 5px solid transparent;
      animation: spin infinite linear 2s;
      will-change: transform;
      transition: 0.2s;
      opacity: 0;
    }
    .visible {
      opacity: 1;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .times-row {
      display: flex;
    }

    .times {
      padding: 0.5em 1.5em;
      color: black;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid black;
    }
    .buttons {
      display: flex;
    }
    .start {
      color: white;
      border: none;
      padding: 0.5em 1em;
      flex: 1;
      border-right: 1px solid black;
    }
    .reset {
      color: black;
      background: white;
      border: none;
      padding: 0.5em 1em;
    }
    .remove {
      background: red;
      color: white;
      padding: 0.5em 1.5em 0.5em 1em;
      border: none;
    }
  }
`;

export default function StopWatch({ job, remove }) {
  const [time, setTime] = useState(0);
  const [saved, setSaved] = useState(0);
  const [startTime, setStartTime] = useState('');
  const [isCounting, setIsCounting] = useState(false);

  const msToS = (ms) => Math.floor(ms / 1000);

  useInterval(
    () => {
      setTime(saved + (msToS(Date.now()) - msToS(startTime)));
    },
    isCounting ? 1000 : null
  );

  const startCount = () => {
    setStartTime(Date.now());
    setIsCounting(true);
  };

  const stopCount = () => {
    setIsCounting(false);
    setSaved(time);
  };

  const resetCount = () => {
    if (isCounting) stopCount();
    setTime(0);
    setSaved(0);
  };

  const handleStartClick = () => (isCounting ? stopCount() : startCount());

  const timeToHours = () => Math.floor(time / 60 / 60);
  const timeToMinutes = () => Math.floor(time / 60) % 60;
  const timeToSeconds = () => Math.floor(time % 60);

  return (
    <StopwatchStyles>
      <div className="stopwatch">
        <div className="jobline">
          <p className="job">{job.name}</p>
          <div className="spinner">
            <div className={['animation', isCounting ? 'visible' : null].join(' ')} />
            <button className="remove" type="button" onClick={remove}>
              X
            </button>
          </div>
        </div>
        <div className="times-row">
          <div className="times">
            <span>Hours: {timeToHours()}</span>
            <span>Minutes: {timeToMinutes()}</span>
            <span>Seconds: {timeToSeconds()}</span>
          </div>
        </div>
        <div className="buttons">
          <button
            style={{ background: isCounting ? '#EEAE2B' : '#29BA2A' }}
            className="start"
            type="button"
            onClick={handleStartClick}
          >
            {isCounting ? 'PAUSE' : 'START'}
          </button>
          <button className="reset" type="button" onClick={resetCount}>
            RESET
          </button>
        </div>
      </div>
    </StopwatchStyles>
  );
}
