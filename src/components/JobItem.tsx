/* eslint-disable arrow-body-style */
import React from 'react';
import JobLabel from './JobLabel';
import Item from './styles/JobItem.styled';

const JobItem: React.FC = () => {
  return (
    <Item>
      <div className="job__info">
        <img src="./assets/photosnap.svg" alt="" />
        <div className="job__info-description">
          <h2>Photosnap</h2>
          <h3>Senior Frontend Developer</h3>
          <ul>
            <li>1d ago</li>
            <li>Full Time</li>
            <li>USA only</li>
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
