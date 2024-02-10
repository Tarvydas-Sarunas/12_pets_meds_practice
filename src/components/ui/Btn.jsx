import { Link } from 'react-router-dom';

export default function Button({ onClick = () => {}, children, outline, type = 'button', to }) {
  const Element = to ? Link : 'button';
  return (
    <Element
      onClick={onClick}
      className={`${
        outline ? 'bg-white text-main' : 'bg-main text-white'
      }  px-6 py-2 text-sm uppercase border font-semibold border-main rounded-md`}
      type={type}
      to={to}>
      {children}
    </Element>
  );
}
