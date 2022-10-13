import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';

const ItemList = ({data}) => {
  return (
    <List
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
      }}>
      {Object.entries(data?.items).map(([className, item]) => (
        <>
        <ListItem key={className}>
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
