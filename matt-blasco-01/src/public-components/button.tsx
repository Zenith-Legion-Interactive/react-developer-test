import { ReactNode } from 'react'

declare interface PublicButtonInterface{
    children?: ReactNode
    description?: string
    inhibitDefaultClass?: boolean
    firstClassName?: string
    disabled?: boolean
    name?: string
    type?: "button" | "submit" | "reset" 
    color?: "primary" | "secondary" | "success" | "warning" | "info" | "none"
    onClick?: () => any;
}


export default function PublicButton(props: PublicButtonInterface) {
    const colorKey = (key:string): string => {
    let color = '';
    switch (key){
        case "primary": color = "#007bff"
        break
        case "secondary": color = "#6c757d"
        break
        case "success": color = "#28a745"
        break
        case "warning": color = "#ffc107"
        break
        case "info": color = "#17a2b8"
        break
        case "none": color = ""
        break
        default: color = ""
    } 
    return color;
  }
  return (
    <button 
        type={props?.type}
        name={props?.name}
        className={`${props?.inhibitDefaultClass ? '' : 'btn'} ${props.firstClassName}`} 
        onClick={props?.onClick} 
        style={{color: `${colorKey(props?.color ? props?.color : '')}`}}
        disabled={props?.disabled}

    >
        {props?.children ?? props.description}
    </button>
  );
}

