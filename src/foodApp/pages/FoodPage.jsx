import { IconButton } from '@mui/material';
import AddOutlined from '@mui/icons-material/AddOutlined';
import {Menu} from '../components/Menu';
import { NothingSelected } from '../views/NothingSelected';
import { MenuSelected } from '../views/MenuSelected';

export const FoodPage = () => {
  return (
    <>
      <Menu>
          {/*<NothingSelected/>*/}
          <MenuSelected/>
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
          >
            <AddOutlined sx={{fontSize:30}} />
          </IconButton>
      </Menu>
    </>
  )
}
