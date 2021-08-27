import React, {FC} from 'react';
import './Button.css'


type ButtonProps = {
    primary: boolean;
    backgroundColor: string;
    size: 'small' | 'medium' | 'large' 
    label: string
    onClick: () => void
};




const Button: FC<ButtonProps> = ({primary = true, backgroundColor='black', size='large', label, ...props}: ButtonProps) => {
    return (
        <button type='button' className='button' >
            {label}
        </button>
    )
}

export default Button
