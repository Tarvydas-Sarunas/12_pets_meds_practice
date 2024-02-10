export default function Btn({children, outline, type = 'button', className = '', onClick = () => {}}) {
  return (
    <div type={type} className={` ${outline ? ' bg-white  text-main' : ' bg-main text-white'} border-main text-sm border px-6 py-2 uppercase font-semibold rounded-md + ${className}`} onClick={onClick}>{children}</div>
  )
}
