/* eslint-disable arrow-body-style */
import React from 'react';
import { Job } from '../types/job';
import HighlightLabel from './HighlightLabel';
import JobLabel from './JobLabel';
import Item from '../styles/JobItem.styled';

const JobItem: React.FC<{ job: Job }> = ({ job }) => {
  const isFeatured: boolean = job.featured;
  const isNew: boolean = job.new;

  return (
    <Item isFeatured={job.featured}>
      <div className="job__info">
        <img src={job.logo} alt="" />
        <div className="job__info-description">
          <div className="job__title">
            <h2>{job.company}</h2>
            {(isFeatured || isNew) && (
              <ul>
                {isNew && <HighlightLabel isNew />}
                {isFeatured && <HighlightLabel />}
              </ul>
            )}
          </div>
          <h3>{job.position}</h3>
          <ul className="job__tags">
            <li>{job.postedAt}</li>
            <li>{job.contract}</li>
            <li>{job.location}</li>
          </ul>
        </div>
      </div>
      <span className="divider" aria-hidden="true" />
      <ul className="job__labels">
        {job.languages.map((language) => (
          <li key={language}>
            <JobLabel label={language} />
          </li>
        ))}
        {job.tools.map((tool) => (
          <li key={tool}>
            <JobLabel label={tool} />
          </li>
        ))}
      </ul>
    </Item>
  );
};

export default JobItem;
