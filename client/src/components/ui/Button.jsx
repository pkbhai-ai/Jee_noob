import React from 'react'

export default function Button({children, className = '', ...props}){
  return (
    <button {...props} className={"px-4 py-2 rounded bg-sky-600 text-white hover:bg-sky-700 " + className}>{children}</button>
  )
}
