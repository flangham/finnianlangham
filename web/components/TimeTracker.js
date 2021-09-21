import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import uuid from 'react-uuid';
import StopWatch from './Stopwatch';

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
`;

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
    setJobs([...jobs, { name: input, uuid: uuid() }]);
    setInput('');
  };

  useEffect(() => {
    // Localstorage only supports storing strings as keys and values.
    // Must convert the object into a string first.
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
            <div key={job.uuid} className="gridItem">
              <StopWatch job={job} remove={() => removeItem(job.uuid)} />
            </div>
          ))}
        </div>
      </div>
    </TimeTrackerStyles>
  );
}
