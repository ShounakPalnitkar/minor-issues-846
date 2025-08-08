// src/App.tsx
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import ThemeButton from './components/ThemeButton';
import OptimizedList from './components/OptimizedList';

function App() {
  const demoItems = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Enables Roboto font globally */}
      <div style={{ padding: 24 }}>
        <ThemeButton>Submit</ThemeButton>
        <OptimizedList items={demoItems} />
      </div>
    </ThemeProvider>
  );
}

export default App;