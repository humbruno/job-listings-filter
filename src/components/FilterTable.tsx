import React from 'react';
import FilterLabel from './FilterLabel';
import Filter from '../styles/FilterTable.styled';

const FilterTable: React.FC<{ list: string[] }> = ({ list }) => (
  <Filter>
    <ul>
      {list.map((filter) => (
        <FilterLabel key={filter} label={filter} />
      ))}
    </ul>
    <button type="button" className="clear">
      Clear
    </button>
  </Filter>
);

export default FilterTable;
