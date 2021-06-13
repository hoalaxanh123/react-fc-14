import React from 'react';
import Button, { ButtonProps } from '@material-ui/core/Button';
import { myStyle } from '../../styles';

interface ButtonCustomProps extends ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const ButtonCustom: React.FC<ButtonCustomProps> = (props: ButtonCustomProps) => {
    const classes = myStyle();
    const { label, type, color, onClick, ...restProps } = props;
    return (
        <Button
            {...restProps}
            type={type || 'submit'}
            fullWidth
            variant="contained"
            color={color || 'primary'}
            className={classes.submit}
            onClick={onClick}
        >
            {label}
        </Button>
    );
};
export default ButtonCustom;
