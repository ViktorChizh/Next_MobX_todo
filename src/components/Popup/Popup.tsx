import classNames from 'classnames';
import style from './Popup.module.css';

interface PopupProps {
  children: React.ReactNode,
  title: string,
  open: boolean,
  setOpen: (open: boolean) => void | boolean,
};

const Popup: React.FC<PopupProps> = ({ children, title, open, setOpen }) => {
  return (
    <div className={ classNames(style.wrapper, open ? style.wrapper_open : '') }>
      <div className={ style.popup }>
        <button
          className={ classNames(style.btn, style.btn) }
          onClick={() => setOpen(false)}
        >
          x
        </button>

        <div className={ style.content }>
          <h3 className={ style.title }>{ title }</h3>
          { children }
        </div>
      </div>
    </div>
  );
};

export default Popup;