import { TextFieldProps, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

type Props = {
  name: string;
} & TextFieldProps;

export function InputField({ name, ...restProps }: Props) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...restProps}
          {...field}
          error={!!errors[name]?.message}
          helperText={errors[name] ? errors[name]?.message?.toString() : null}
        />
      )}
    />
  );
}
