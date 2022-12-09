import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    const timeout = setTimeout(()=>{
        setDebouncedValue(value)
    });
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
}

useDebounce.propType = {
  value: PropTypes.string,
  delay: PropTypes.number
};