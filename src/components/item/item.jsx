import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';

const ItemList = ({data}) => {
  return (
    <List
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
      }}>
      {data?.map((item, i) => (
        <>
        <ListItem key={i}>
          <ListItemAvatar>
            <div className="item-icon">
              <img src={process.env.PUBLIC_URL + `/images/${item?.slug}_64.png`} alt={item?.slug} />
            </div>
          </ListItemAvatar>
          <ListItemText primary={item?.name} secondary={item?.description} />
        </ListItem>
        <Divider variant="inset" component="li" />
        </>
      ))}
    </List>
  );
};

export default ItemList;
