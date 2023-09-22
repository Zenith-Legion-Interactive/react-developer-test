import React, {  ReactNode } from 'react'

interface CustomButton {
    func: () => void
    mode: 'primary' | 'secondary' | 'danger'
    children: ReactNode
}

const Button: React.FC<CustomButton> = ({func, mode, children}) => {
  return (
    <button className={`buttonComponent ${mode}`} onClick={func}>{children}
    </button>
  )
}

export default Button