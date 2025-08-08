// src/components/OptimizedList.tsx
import React, { useCallback } from 'react';
import { List, ListItem, Typography } from '@mui/material';

const MemoizedListItem = React.memo(({ item, onClick }) => (
  <ListItem button onClick={() => onClick(item)}>
    <Typography variant="body1">{item.name}</Typography>
  </ListItem>
));

const OptimizedList = ({ items }) => {
  const handleClick = useCallback((item) => {
    console.log('Selected:', item);
  }, []);

  return (
    <List>
      {items.map((item) => (
        <MemoizedListItem 
          key={item.id} 
          item={item} 
          onClick={handleClick} 
        />
      ))}
    </List>
  );
};

export default OptimizedList;