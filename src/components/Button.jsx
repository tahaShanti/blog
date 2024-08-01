import React from 'react'

function Button({
    children,
    type = "button",
    className='',
    ...props
}) {
  return (
    <button className={`inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 ${className}`} {...props}>{children}</button>
  )
}

export default Button