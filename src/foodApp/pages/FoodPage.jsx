import { IconButton } from '@mui/material';
import AddOutlined from '@mui/icons-material/AddOutlined';
import {Menu} from '../components/Menu';
import { NothingSelected } from '../views/NothingSelected';
import { MenuSelected } from '../views/MenuSelected';
import { useDispatch, useSelector } from 'react-redux';
import { startNewFood } from '../../store/foods/thunk';
import { useMemo } from 'react';

export const FoodPage = () => {
  const dispatch = useDispatch();
  const {isSaving, active} = useSelector(state=>state.foods);
  const onClick = ()=>{
    dispatch(startNewFood());
  }
  return (
    <>
      <Menu>
        {
          active 
          ?
            <MenuSelected/>
          :
            <NothingSelected/>
        }
          
          <IconButton
            size="large"
            sx={{
              color:'#000',
              backgroundColor: 'primary.main',
              ':hover':{backgroundColor: 'primary.main', opacity: 0.9},
              position: 'fixed',
              right: 50,
              bottom: 50
            }}
            disabled={isSaving}
            onClick={onClick}
          >
            <AddOutlined sx={{fontSize:30}} />
          </IconButton>
      </Menu>
    </>
  )
}
