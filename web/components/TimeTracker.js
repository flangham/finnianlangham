import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';

const TimeTrackerStyles = styled.section`
  color: var(--blue);
  font-family: Arial;

  h1 {
    text-align: center;
    font-style: normal;
    color: black;
  }

  button,
  input {
    font-family: inherit;
    padding: 0.5em 1em;
    font-size: 16px;
  }

  form {
    width: 400px;
    margin: 0.5em auto;
  }

  .add-job {
    margin-right: 0.5em;
  }
  a {
    color: var(--blue);
    display: block;
    text-align: end;
  }

  .grid {
    display: grid;
    justify-content: center;
  }

  @media (min-width: 840px) {
    .grid {
      grid-template-columns: 1fr 1fr;
      width: 840px;
      margin: auto;
    }

    .gridItem {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (min-width: 1280px) {
    .grid {
      grid-template-columns: 1fr 1fr 1fr;
      width: 1280px;
    }
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
      width: 60px;
      height: 100%;
      position: absolute;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .animation {
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

    .times {
      padding: 0.5em 1.5em;
      color: black;
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
    .remove {
      background: red;
      color: white;
      padding: 0.5em 1.5em 0.5em 1em;
      border: none;
    }
  }
  .notes {
    position: fixed;
    bottom: 0;
    right: 0;
    border: 1px solid red;
    background: white;
    width: 200px;
    font-size: 14px;
    color: black;
    padding: 1em;
  }
`;

function StopWatch({ job, remove }) {
  const [time, setTime] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const [timerID, setTimerID] = useState('');

  const runTimer = () => setTimerID(setInterval(() => setTime((prev) => prev + 1), 1000));
  const stopTimer = () => clearInterval(timerID);

  const handleStartClick = () => {
    if (!isCounting) {
      runTimer();
      setIsCounting(true);
    } else {
      stopTimer();
      setIsCounting(false);
    }
  };

  const timeToHours = () => Math.floor(time / 60 / 60);
  const timeToMinutes = () => Math.floor(time / 60) % 60;
  const timeToSeconds = () => Math.floor(time % 60);

  return (
    <TimeTrackerStyles>
      <div className="stopwatch">
        <div className="jobline">
          <p className="job">{job}</p>
          <div className="spinner">
            <div className={['animation', isCounting ? 'visible' : null].join(' ')} />
          </div>
        </div>
        <div className="times">
          <span>Hours: {timeToHours()}</span>
          <span>Minutes: {timeToMinutes()}</span>
          <span>Seconds: {timeToSeconds()}</span>
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
          <button className="remove" type="button" onClick={remove}>
            X
          </button>
        </div>
      </div>
    </TimeTrackerStyles>
  );
}

export default function TimeTracker() {
  const [jobs, setJobs] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedJobs = localStorage.getItem('timetracker-jobs');
      if (savedJobs) return JSON.parse(savedJobs);
    }
    return [];
  });
  const [input, setInput] = useState('');
  const addJob = () => {
    setJobs([...jobs, { jobName: input, uuid: uuid() }]);
    setInput('');
  };

  useEffect(() => {
    // localstorage only supports storing strings as keys and values.
    // Therefore we cannot store arrays and objects
    // without converting the object into a string first.
    // JSON.stringify will convert the object into a JSON string.
    localStorage.setItem('timetracker-jobs', JSON.stringify(jobs));
  }, [jobs]);

  const submitForm = (e) => {
    e.preventDefault();
    if (input.length === 0) return;
    addJob();
  };

  const removeItem = (id) => {
    setJobs((prev) => prev.filter((a) => a.uuid !== id));
  };

  return (
    <TimeTrackerStyles>
      <h1>TimeTracker</h1>
      <div className="timers">
        <form onSubmit={submitForm}>
          <input
            onChange={(e) => setInput(e.target.value)}
            className="add-job"
            value={input}
            type="text"
            placeholder="New Job"
            onSubmit={addJob}
          />
          <button disabled={input.length === 0} type="button" onClick={addJob}>
            Add
          </button>
        </form>
        <div className="grid">
          {jobs.map((job) => (
            <div className="gridItem">
              <StopWatch key={job.uuid} job={job.jobName} remove={() => removeItem(job.uuid)} />
            </div>
          ))}
        </div>
      </div>
    </TimeTrackerStyles>
  );
}
