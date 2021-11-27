import React from "react";

import { 
  AlertTitle,
  Alert,
  Stack
} from '@mui/material';

const ErrorMessage = ({title, body}) => {
  return (
    <Stack sx={{ width: '100%', marginTop:'50px' }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>{title}</AlertTitle>
        {body}
      </Alert>
    </Stack>
  );
}

export default ErrorMessage;