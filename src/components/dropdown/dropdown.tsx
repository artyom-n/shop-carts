import React, { FC } from 'react';

type Props = {
  value: string;
  options: {
    value: string;
    name: string;
  }[];
  chnageHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Dropdown: FC<Props> = ({ value, chnageHandler, options }) => {
  return (
    <select value={value} onChange={(e) => chnageHandler(e)}>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};
