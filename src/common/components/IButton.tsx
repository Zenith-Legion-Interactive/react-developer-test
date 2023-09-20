import React from 'react'
import '../styles/Button.css';
import { isEmpty } from 'lodash';

type IButtonProps = {
  variant?:"contained" | "outlined" | "standard";
  color?:"primary" | "secondary" | "default" | 'danger' | string;
	label?:string;
}



const IButton: React.FunctionComponent<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & IButtonProps> = ({ variant = 'standard', color = 'primary',label, ...props }) => {
	// const clsxColor = color === 'primary' ? 'btn-primary' : color === 'secondary' ? 'btn-secondary' : color === 'danger' ? 'btn-danger' : 'btn-default';
	const sxColor = color === 'primary' ? '#2752e7' : color === 'secondary' ? '#198754' : color === 'danger' ? '#ff0e0e' : '#fff';
  const fontColor = variant === 'outlined'  ? sxColor : '#fff';

	const sxProps = {
		background: variant === 'contained' || variant === 'standard' ? sxColor : 'transparent',
		outline: variant === 'outlined' ? `1px solid ${sxColor}` : 'transparent',
		color: !isEmpty(color) ? fontColor : '#000',
	};
	
	return (
		<button role='getRoute' style={sxProps} className='btn' {...props}>
			{label}
		</button>
	);
};

export default IButton
