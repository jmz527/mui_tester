// This file is shared across the demos.

import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Starred" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Send mail" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Drafts" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="All mail" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Trash" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Spam" />
    </ListItem>
  </div>
);



const tileData = [
  {
    img: 'https://material-ui-next.com/static/images/grid-list/breakfast.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 2,
    featured: true,
  },
  {
    img: 'https://material-ui-next.com/static/images/grid-list/burgers.jpg',
    title: 'Tasty burger',
    author: 'director90',
  },
  {
    img: 'https://material-ui-next.com/static/images/grid-list/camera.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://material-ui-next.com/static/images/grid-list/morning.jpg',
    title: 'Morning',
    author: 'fancycrave1',
    featured: true,
  },
  {
    img: 'https://material-ui-next.com/static/images/grid-list/hats.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'https://material-ui-next.com/static/images/grid-list/honey.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'https://material-ui-next.com/static/images/grid-list/vegetables.jpg',
    title: 'Vegetables',
    author: 'jill111',
    cols: 2,
  },
  {
    img: 'https://material-ui-next.com/static/images/grid-list/plant.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
  {
    img: 'https://material-ui-next.com/static/images/grid-list/mushroom.jpg',
    title: 'Mushrooms',
    author: 'PublicDomainPictures',
  },
  {
    img: 'https://material-ui-next.com/static/images/grid-list/olive.jpg',
    title: 'Olive oil',
    author: 'congerdesign',
  },
  {
    img: 'https://material-ui-next.com/static/images/grid-list/star.jpg',
    title: 'Sea star',
    cols: 2,
    author: '821292',
  },
  {
    img: 'https://material-ui-next.com/static/images/grid-list/bike.jpg',
    title: 'Bike',
    author: 'danfador',
  },
];

export default tileData;