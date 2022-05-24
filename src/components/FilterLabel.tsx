import React from 'react';
import LabelFilter from '../styles/FilterLabel.styled';

const FilterLabel: React.FC<{ label: string }> = ({ label }) => (
  <LabelFilter>
    <div>{label}</div>
    <button type="button">
      <img src="./assets/icon-remove.svg" alt="Remove Filter" />
    </button>
  </LabelFilter>
);

export default FilterLabel;
