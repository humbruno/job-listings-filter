/* eslint-disable arrow-body-style */
import { useState, useEffect, createContext, ReactNode, useMemo } from 'react';
import { Job } from '../types/job';

interface JobContextProps {
  children: ReactNode;
}

interface JobContextType {
  jobs: Job[];
  // eslint-disable-next-line no-unused-vars
  setJobs: (newState: Job[]) => void;
  isLoading: boolean;
}

const initialValue: JobContextType = {
  jobs: [],
  setJobs: () => {},
  isLoading: true,
};

export const JobContext = createContext(initialValue);

export const JobContextProvider = ({ children }: JobContextProps) => {
  const [jobs, setJobs] = useState(initialValue.jobs);
  const [isLoading, setIsLoading] = useState(initialValue.isLoading);

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
    () => ({ jobs, setJobs, isLoading }),
    [jobs, isLoading]
  );

  return (
    <JobContext.Provider value={contextValue}>{children}</JobContext.Provider>
  );
};
