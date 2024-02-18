<<<<<<< HEAD
import {
  Dispatch,
  SetStateAction,
  useEffect, 
  useState,
} from 'react';

type SetValue<T> = Dispatch<SetStateAction<T>>;

const useLocalStorage = <T>(
  key: string,
  defaultValue: T,
): [T, SetValue<T>] => {
  const [value, setValue] = useState<T>(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
=======
import { useEffect, useState } from 'react';

const useLocalStorage = <T>(
  key: string, initialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialValue;
>>>>>>> f42ad71e3d60ee5b627b6862c58b87fc0389b3a9
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
<<<<<<< HEAD
  }, [value, key]);
=======
  }, [key, value]);
>>>>>>> f42ad71e3d60ee5b627b6862c58b87fc0389b3a9

  return [value, setValue];
};

export default useLocalStorage;
