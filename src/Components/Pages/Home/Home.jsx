import { useState } from 'react';
import { Cost } from '../../Atoms/Button/Cost';
import { Grid2 } from '@mui/material';
import { Tracker } from '../../Atoms/Button/Tracker';
import PersistentDrawerLeft from '../../Organisms/Headers/PersistentDrawerLeft/PersistentDrawerLeft';
import Send from '../../Atoms/Button/Send';
import Luz from '../../../assets/Images/Luz.jpg';
import ClientSearch from '../../Molecules/SearchBar/ClientSearch';
import './home.css';

export const Home = () => {
  const [showClientSearch, setShowClientSearch] = useState(false);

  const handleTrackerClick = () => {
    setShowClientSearch(true);
  };

  return (
    <>
      <PersistentDrawerLeft />
      <Grid2
        className="Grid2"
        sx={{
          display: 'flex',
          height: '100vh',  
          width: '100%',    
          backgroundImage: `url(${Luz})`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          flexDirection: 'column',
        }}
      >
        <Grid2
          className="Grid2-Icon"
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            gap: 5,
          }}
          padding={25}
        >
          <Cost className="Icon" />
          <Tracker className="Icon" onClick={handleTrackerClick} />
          <Send className="Icon" />

          {showClientSearch && (
            <Grid2
              sx={{
                position: 'absolute',
                bottom: '10%',
                backgroundColor: 'transparent',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                width: '100%',
                textAlign: 'center',
              }}
            >
              <ClientSearch />
            </Grid2>
          )}
        </Grid2>
      </Grid2>
    </>
  );
};
