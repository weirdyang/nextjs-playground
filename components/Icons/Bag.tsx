import * as React from 'react'
const Bag = ({ fill = 'none', className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill={fill}
    viewBox="0 0 16 16"
    className={`${className} w-full h-auto`}
    {...props}
  >
    <path d="M13.208 4.294A.995.995 0 0 0 12.5 4h-2v-.5a3.5 3.5 0 1 0-7 0V4h-2a1 1 0 0 0-1 1v6.75C.5 12.969 1.531 14 2.75 14h8.5c.59 0 1.156-.23 1.578-.642a2.171 2.171 0 0 0 .672-1.569V5a.992.992 0 0 0-.292-.706ZM4.5 3.5a2.5 2.5 0 1 1 5 0V4h-5v-.5Z" />
  </svg>
)
export default Bag
