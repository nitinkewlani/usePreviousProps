import { useRef, useEffect, useState } from 'react';

const usePreviousValues = (value = '', LIMIT = 1) => {
  const previousRef = useRef([]);
  const [isLimitReached, setIsLimitReached] = useState(false);
  useEffect(() => {
    if (previousRef.current.length === LIMIT) {
      setIsLimitReached(true);
      return;
    }
    if (value) {
      previousRef.current.push(value);
    }
  }, [value]);

  return { previousValues: previousRef.current, isLimitReached };
};

export default usePreviousValues;
