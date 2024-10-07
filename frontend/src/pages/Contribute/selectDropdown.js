import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const SelectDropdown = ({
  id,
  name,
  value,
  options,
  handleChange,
  placeholder,
  maxMenuHeight = 200,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    setSelectedOption(options.find(option => option.value === value));
  }, [value, options]);

  const handleSelectChange = selectedOption => {
    setSelectedOption(selectedOption);
    handleChange({
      target: {
        name,
        value: selectedOption ? selectedOption.value : null,
      },
    });
  };

  return (
    <Select
      id={id}
      name={name}
      value={selectedOption || ''}
      onChange={handleSelectChange}
      options={options}
      maxMenuHeight={maxMenuHeight}
      placeholder={placeholder}
      isClearable
    />
  );
};

export default SelectDropdown;
