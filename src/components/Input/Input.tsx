'use client';

import classNames from 'classnames';
import style from './Input.module.css';
import { ChangeEvent } from 'react';

interface InputProps {
  id: string,
  className: string,
  label?: string,
  error?: string,
  required?: boolean,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string,
}

const Input: React.FC<InputProps> = ({
   id,
   className,
   label,
   error,
   required,
   onChange,
   value
  }) => {
  const classes = classNames(
    style.input,
    className,
    { error }
  )

  return (
    <div className={ style.wrapper }>
      { label &&
        <label className={ style.label } htmlFor={ id }>{ label }</label>
      }
      <input
        name={ id }
        id={ id }
        className={ classes }
        required={ required ? required : false }
        value={ value }
        onChange={onChange}
      />

      { error &&
        <span className={ style.error }>{ error }</span>
      }
    </div>
  )
};

export default Input;