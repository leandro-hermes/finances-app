import { InputAdornment } from "@mui/material";
import { InputBaseComponentProps } from "@mui/material/InputBase";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import React from "react";
import { IMaskInput } from "react-imask";

const CurrencyRootInput: React.ElementType<InputBaseComponentProps> = React.forwardRef(
  function CurrencyRootInput(props, ref) {
    React.useImperativeHandle(ref, () => ({
      focus: () => {
        // logic to focus the rendered input element from 3rd party belongs here
      },
    }));

    return (
      <IMaskInput
        {...props}
        inputRef={ref as unknown as React.RefObject<HTMLInputElement>}
        mask={Number}
        scale={2}
        thousandsSeparator=","
        radix="."
        mapToRadix={[ "," ]}
        min={0}
        overwrite
      />
    );
  },
);

export const CurrencyInput = (props: TextFieldProps) => {
  return (
    <TextField
      InputProps={{
        startAdornment: <InputAdornment position="start">R$</InputAdornment>,
        inputComponent: CurrencyRootInput,
      }}
      {...props}
    />
  );
};
