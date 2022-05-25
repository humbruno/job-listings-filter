import React, { useContext } from 'react';
import FilterLabel from './FilterLabel';
import Filter from '../styles/FilterTable.styled';
import { JobContext } from '../contexts/JobContext';

const FilterTable: React.FC<{ list: string[] }> = ({ list }) => {
  const { clearFilter } = useContext(JobContext);

  return (
    <Filter>
      <ul>
        {list.map((filter) => (
          <FilterLabel key={filter} label={filter} />
        ))}
      </ul>
      <button type="button" className="clear" onClick={clearFilter}>
        Clear
      </button>
    </Filter>
  );
};

export default FilterTable;
