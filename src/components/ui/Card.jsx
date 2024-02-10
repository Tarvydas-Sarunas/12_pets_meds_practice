

export default function Card({children, li = '', className = '' }) {
const Element = li ? 'li' : 'div'
  return (
    <Element className={'border rounded-md px-4 py-3 inline-block text-center ' + className}>
      {children}
    </Element>
  )
}
