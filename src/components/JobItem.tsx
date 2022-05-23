/* eslint-disable arrow-body-style */
import React from 'react';
import Job from '../types/Job';
import HighlightLabel from './HighlightLabel';
import JobLabel from './JobLabel';
import Item from './styles/JobItem.styled';

const JobItem: React.FC<{ job: Job }> = ({ job }) => {
  const isFeatured: boolean = job.featured;
  const isNew: boolean = job.new;

  return (
    <Item>
      <div className="job__info">
        <img src={job.logo} alt="" />
        <div className="job__info-description">
          <div className="job__title">
            <h2>{job.company}</h2>
            {(isFeatured || isNew) && (
              <ul>
                {isNew && <HighlightLabel isNew />}
                {isFeatured && <HighlightLabel isNew={false} />}
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
      <ul className="job__labels">
        {job.languages.map((language) => (
          <li>
            <JobLabel label={language} />
          </li>
        ))}
        {job.tools.map((tool) => (
          <li>
            <JobLabel label={tool} />
          </li>
        ))}
      </ul>
    </Item>
  );
};

export default JobItem;
