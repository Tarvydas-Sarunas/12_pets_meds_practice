

export default function Card({children, li = ''}) {
const Element = li ? 'li' : 'div'
  return (
    <Element className='border rounded-md px-4 py-3 inline-block text-center'>
      {children}
    </Element>
  )
}
