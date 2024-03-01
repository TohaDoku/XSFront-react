import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import QuizIcon from '@mui/icons-material/Quiz';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import QueueIcon from '@mui/icons-material/Queue';
import SmsIcon from '@mui/icons-material/Sms';

import './LabelBottomNavigation.css'

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Заказы"
        value="Заказы"
        icon={<FilterFramesIcon />}
      />
      <BottomNavigationAction
        label="Вопросы"
        value="Вопросы"
        icon={<QuizIcon />}
      />
      <BottomNavigationAction 
        label="Заказать" 
        value="Заказать" 
        icon={<QueueIcon />} />

      <BottomNavigationAction
        label="Профиль"
        value="Профиль"
        icon={<SwitchAccountIcon />}
      />
      <BottomNavigationAction 
        label="Чат" 
        value="Чат" 
        icon={<SmsIcon />} />
    </BottomNavigation>
  );
}