import React from 'react';

interface InputFieldProps {
  label: string;
  type?: string;
  htmlFor: string;
  maxlength: number;
  value: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, type = 'text', htmlFor, maxlength, value, onChange }) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    if (inputValue.length <= maxlength) {
      onChange(inputValue);
    }
  };

  return (
    <div className="grid space-y-2 col-span-3">
      <label htmlFor={htmlFor} className="text-base text-center font-medium text-cor2"
      >
        {label}
      </label>
      <input className='bg-cor2 p-2 rounded-md border-2 border-cor3'
        type={type}
        maxLength={maxlength}
        value={value}
        onChange={handleChange}
      ></input>
    </div>
  )
}

export default InputField;