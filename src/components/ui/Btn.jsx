export default function Btn({children, outline}) {
  return (
    <div className={` ${outline ? ' bg-white  text-main' : ' bg-main text-white'} border-main  border px-6 py-2 uppercase font-semibold rounded-md`}>{children}</div>
  )
}
