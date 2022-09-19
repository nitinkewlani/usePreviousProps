import React, { useEffect } from 'react';
import usePreviousValues from './usePreviousValues';
import { LIMIT } from './constants';

const PreviousData = React.memo(
  ({ value = '', setIsLimitReached = () => {} }) => {
    const { previousValues = [], isLimitReached = false } = usePreviousValues(
      value,
      LIMIT
    );
    console.log({ value, previousValues });
    useEffect(() => {
      if (isLimitReached) {
        setIsLimitReached(isLimitReached);
      }
    }, [isLimitReached]);

    return (
      <>
        <br />
        <hr />
        <u>
          History List ({previousValues.length}/{LIMIT})
        </u>
        <br />
        <br />
        <div>{previousValues.join(', ')}</div>
      </>
    );
  }
);

export default PreviousData;
