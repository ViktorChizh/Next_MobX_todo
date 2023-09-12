import classNames from 'classnames';

type ButtonType = 'submit' | 'button' | 'reset';

interface ButtonProps {
  typeBtn: ButtonType,
  classBtn: string,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  children?: React.ReactNode
};

const Button: React.FC<ButtonProps> = ({ typeBtn='button', classBtn, onClick, children }) => {
  const classes = classNames(classBtn)
  return (
    <button
      type={ typeBtn }
      className={ classes }
      onClick={ onClick ? (e) => onClick(e) : undefined }
    >
      { children }
    </button>
  )
};

export default Button;