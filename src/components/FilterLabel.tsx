import React, { useContext } from 'react';
import { JobContext } from '../contexts/JobContext';
import LabelFilter from '../styles/FilterLabel.styled';

const FilterLabel: React.FC<{ label: string }> = ({ label }) => {
  const { removeFilter } = useContext(JobContext);

  return (
    <LabelFilter>
      <div>{label}</div>
      <button type="button" onClick={() => removeFilter(label)}>
        <img src="./assets/icon-remove.svg" alt="Remove Filter" />
      </button>
    </LabelFilter>
  );
};

export default FilterLabel;
