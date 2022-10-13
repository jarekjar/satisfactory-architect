import { useState } from 'react';

//css
import './item.css';

//components
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';

const ItemList = ({ data }) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleCard = index => {
    if (openItems.includes(index)) {
      setOpenItems([...openItems].filter(itemId => itemId !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <List
      style={{ paddingTop: '0' }}
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
      }}>
      {data?.map((item, i) => (
        <>
          <ListItem className="list-item-card" key={i} onClick={() => toggleCard(i)}>
            <ListItemAvatar>
              <div className="item-icon">
                <img src={process.env.PUBLIC_URL + `/images/${item?.slug}_64.png`} alt={item?.slug} />
              </div>
            </ListItemAvatar>
            <ListItemText primary={item?.name} secondary={item?.description} />
          </ListItem>
          <Divider component="li" />
          <Collapse in={openItems.includes(i)} timeout="auto" unmountOnExit onClick={() => toggleCard(i)}>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
              <div>
                <div>Max Stack Size: {item?.stackSize}</div>
                <div>Sink Points: {item?.sinkPoints}</div>
                </div>
              </ListItemButton>
            </List>
          </Collapse>
        </>
      ))}
    </List>
  );
};

export default ItemList;
