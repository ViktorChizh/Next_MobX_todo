import Button from '../Button/Button';
import style from './Form.module.css';

interface FormProps {
  children: React.ReactNode,
  nameBtn: string,
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
};

const Form: React.FC<FormProps> = ({ children, nameBtn, onSubmit }) => {

  return (
    <form className={ style.form } onSubmit={ (e) =>onSubmit(e) }>
      { children }
      <Button typeBtn='submit' classBtn={ style.btn }>{ nameBtn }</Button>
    </form>
  )
};

export default Form;