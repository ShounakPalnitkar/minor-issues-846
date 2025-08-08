// src/api/fetchData.ts
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';

export const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    if (response.status !== 200) throw new Error('Request failed');
    return response.data;
  } catch (error) {
    enqueueSnackbar(error.message || 'API Error', { 
      variant: 'error',
      anchorOrigin: { vertical: 'top', horizontal: 'right' }
    });
    throw error; // Re-throw for component-level handling
  }
};

// Usage in components:
// const data = await fetchData('/api/endpoint').catch(() => fallbackData);