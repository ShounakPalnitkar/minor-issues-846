//corrected code
// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'sans-serif'
    ].join(','),
  },
  palette: {
    mode: 'light', // Auto-switches based on user preference
  },
});

export default theme;
