/* eslint-disable arrow-body-style */
import React from 'react';
import Job from '../types/Job';
import HighlightLabel from './HighlightLabel';
import JobLabel from './JobLabel';
import Item from './styles/JobItem.styled';

const JobItem: React.FC<{ job: Job }> = ({ job }) => {
  return (
    <Item>
      <div className="job__info">
        <img src={job.logo} alt="" />
        <div className="job__info-description">
          <div className="job__title">
            <h2>{job.company}</h2>
            <ul>
              <HighlightLabel />
              <HighlightLabel />
            </ul>
          </div>
          <h3>{job.position}</h3>
          <ul className="job__tags">
            <li>{job.postedAt}</li>
            <li>{job.contract}</li>
            <li>{job.location}</li>
          </ul>
        </div>
      </div>
      <ul className="job__labels">
        <li>
          <JobLabel />
        </li>
        <li>
          <JobLabel />
        </li>
        <li>
          <JobLabel />
        </li>
      </ul>
    </Item>
  );
};

export default JobItem;
