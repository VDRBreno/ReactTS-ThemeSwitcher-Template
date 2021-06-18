import { useEffect, useState, Dispatch, SetStateAction } from 'react';

type ResponseProps<T> = [
  T,
  Dispatch<SetStateAction<T>>
];

function usePersistedState<T>(key: string, initialState: T): ResponseProps<T> {

  const [state, setState] = useState(() => {
    const storagedValue = localStorage.getItem(key);

    if(storagedValue)
      return JSON.parse(storagedValue);
    else
      return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;