/* eslint-disable arrow-body-style */
import { useState, useEffect, createContext, ReactNode, useMemo } from 'react';
import { Job } from '../types/job';

interface JobContextProps {
  children: ReactNode;
}

interface JobContextType {
  jobs: Job[];
  isLoading: boolean;
  isFiltered: boolean;
  filteredList: string[];
  // eslint-disable-next-line no-unused-vars
  addFilter: (filter: string) => void;
  // eslint-disable-next-line no-unused-vars
  removeFilter: (filter: string) => void;
  clearFilter: () => void;
}

const initialValue: JobContextType = {
  jobs: [],
  isLoading: true,
  isFiltered: false,
  filteredList: [],
  addFilter: () => {},
  removeFilter: () => {},
  clearFilter: () => {},
};

export const JobContext = createContext(initialValue);

export const JobContextProvider = ({ children }: JobContextProps) => {
  const [jobs, setJobs] = useState(initialValue.jobs);
  const [isLoading, setIsLoading] = useState(initialValue.isLoading);
  const [isFiltered, setIsFiltered] = useState(initialValue.isFiltered);
  const [filteredList, setFilteredList] = useState(initialValue.filteredList);

  const addFilter = (filter: string): void => {
    if (filteredList.includes(filter)) {
      return;
    }

    setFilteredList([...filteredList, filter]);
    setIsFiltered(true);

    /*   const newArray = jobs.filter((job) =>
      filteredList.every(
        (filterItem) =>
          job.tools.includes(filterItem) || job.languages.includes(filterItem)
      )
    ); */

    // eslint-disable-next-line array-callback-return
    const filterJob = jobs.filter((job) => {
      const labels = [...job.tools, ...job.languages];
      return filteredList.every((item) => labels.includes(item));
    });

    setJobs(filterJob);
  };

  const removeFilter = (filter: string): void => {
    const newList = filteredList.filter((item) => item !== filter);

    if (newList.length === 0) {
      setIsFiltered(false);
      return;
    }

    setFilteredList(newList);
  };

  const clearFilter = (): void => {
    setFilteredList([]);
    setIsFiltered(false);
  };

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error.message));
  }, []);

  const contextValue = useMemo(
    () => ({
      jobs,
      isLoading,
      isFiltered,
      filteredList,
      addFilter,
      removeFilter,
      clearFilter,
    }),
    [jobs, isLoading, isFiltered, filteredList]
  );

  return (
    <JobContext.Provider value={contextValue}>{children}</JobContext.Provider>
  );
};
