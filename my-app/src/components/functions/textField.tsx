import React from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';

const TextFieldCustom: React.FC<TextFieldProps> = (props: TextFieldProps) => {
    const { label, value, type, required, onChange, ...restProps } = props;
    console.log('restProps :>> ', restProps);
    return (
        <TextField
            {...restProps}
            variant="outlined"
            margin="normal"
            label={label}
            value={value}
            required={required || true}
            onChange={onChange}
            type={type}
            fullWidth
        />
    );
};
export default TextFieldCustom;
