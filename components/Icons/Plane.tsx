import * as React from 'react'
const Plane = ({ fill = 'none', className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={14}
    fill={fill}
    viewBox="0 0 16 16"
    className={`${className} w-full h-auto`}
    {...props}
  >
    <path d="M12.741 5.5c-.085 0-.451.003-.583.01l-1.806.047L6.19.5H4.227l2.33 5.144-3.04.045L2.133 4H.504l.644 2.943a.545.545 0 0 0 .017.054.48.48 0 0 0-.017.05L.496 10h1.618l1.42-1.719 3.024.068L4.226 13.5h1.969l4.156-5.055 1.805.048c.135.008.5.01.584.01.76 0 1.383-.104 1.85-.31.792-.35.91-.897.91-1.193 0-.94-1.031-1.5-2.759-1.5Z" />
  </svg>
)
export default Plane
