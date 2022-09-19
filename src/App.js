import React, { useState } from 'react';
import PreviousData from './PreviousData';
import Input from './Input';
import './style.css';

export default function App() {
  const [value, setValue] = useState('');
  const [addValue, addToList] = useState('');
  const [limitReached, setIsLimitReached] = useState(false);

  const handleAddValue = () => {
    addToList(value);
    setValue('');
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <b>
        <u>NOTE</u>: Initially when you add first value ref is an empty array.
      </b>
      <br />
      <br />
      <u>New Entry</u>:
      <br />
      <br />
      <Input
        type="text"
        value={value}
        placeholder="Enter value to store"
        style={{ marginRight: 10 }}
        onChange={handleChange}
      />
      <Input
        type="button"
        value={limitReached ? 'Limit Reached' : 'Add Value'}
        onClick={handleAddValue}
        disabled={!value || limitReached}
      />
      <br />
      <br />
      {addValue && `Recent Entry: ${addValue}`}
      <PreviousData value={addValue} setIsLimitReached={setIsLimitReached} />
    </div>
  );
}
