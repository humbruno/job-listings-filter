import React from 'react';
import JobLabel from './JobLabel';
import Filter from './styles/FilterTable.styled';

const FilterTable = () => (
  <Filter>
    <ul>
      <li>
        <JobLabel label="React" />
      </li>
      <li>
        <JobLabel label="JavaScript" />
      </li>
      <li>
        <JobLabel label="CSS" />
      </li>
    </ul>
    <button type="button" className="clear">
      Clear
    </button>
  </Filter>
);

export default FilterTable;
