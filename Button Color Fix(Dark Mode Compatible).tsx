// src/components/ThemeButton.tsx
import { Button } from '@mui/material';

const ThemeButton = ({ children }) => {
  return (
    <Button 
      color="primary" 
      variant="contained"
      sx={{
        // Optional: Theme-aware custom styles
        fontWeight: 600,
        px: 3, // Responsive padding
      }}
    >
      {children}
    </Button>
  );
};

export default ThemeButton;