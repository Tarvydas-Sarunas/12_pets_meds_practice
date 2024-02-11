
import Btn from '../ui/Btn'

export default function PageHeader({pName, children}) {
  return (
    <div className=" my-5 flex items-center justify-between">
      <h1 className="text-main text-4xl ">{pName}</h1>
      <div className='flex gap-2'>
{children}
      </div>
      {/* <Btn to={link}>{bName}</Btn> */}
      </div>
  )
}
