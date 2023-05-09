import * as React from 'react'
const House = ({ fill = 'none', className = '', ...props }) => (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={14}
      fill={fill}
      viewBox="0 0 16 16"
      className={`${className} w-full h-auto`}
      {...props}
    >
      <path d="M8.174 3.165a.25.25 0 0 0-.346 0L2.075 8.661a.25.25 0 0 0-.077.18L1.997 14a1 1 0 0 0 1 1H6a.5.5 0 0 0 .5-.5v-4.25a.25.25 0 0 1 .25-.25h2.5a.25.25 0 0 1 .25.25v4.25a.5.5 0 0 0 .5.5h3.002a1 1 0 0 0 1-1V8.842a.25.25 0 0 0-.077-.181L8.174 3.165Z" />
      <path d="m15.34 7.63-2.337-2.237V2a.5.5 0 0 0-.5-.5h-1.5a.5.5 0 0 0-.5.5v1l-1.81-1.73A.973.973 0 0 0 8 1a.97.97 0 0 0-.692.27L.661 7.63a.51.51 0 0 0-.042.698.5.5 0 0 0 .725.033l6.484-6.196a.25.25 0 0 1 .346 0l6.485 6.196a.5.5 0 0 0 .706-.014.512.512 0 0 0-.024-.717Z" />
    </svg>
  </div>
)
export default House
