import { useState } from 'react';

export const useFetching = (cb: any): [(...args: unknown[]) => Promise<void>, boolean, unknown] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>();

  const fetching = async (...args: unknown[]) => {
    try {
      setLoading(true);
      await cb(...args);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return [fetching, loading, error];
};
