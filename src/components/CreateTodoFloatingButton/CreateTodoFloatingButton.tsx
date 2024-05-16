import React, { useEffect, useState } from 'react';

import { Fab, styled } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';

import { CustomTooltip } from '../CustomTooltip';

interface StyledFabCustomProps {
  shown: boolean,
}

const StyledFab = styled(Fab, {
  shouldForwardProp: (prop) => prop !== 'shown',
})<StyledFabCustomProps>(({ theme, shown }) => {
  const display = shown ? 'inline-flex' : 'none';

  return {
    display,
    position: 'fixed',
    bottom: '50px',
    right: '50px',

    [theme.breakpoints.down('sm')]: {
      right: '10px',
    },
  };
});

export const CreateTodoFloatingButton: React.FC = () => {
  const [buttonShown, setButtonShown] = useState(false);

  const navigate = useNavigate();

  const handleScroll = () => {
    const position = document.documentElement.scrollTop || document.body.scrollTop;
    
    if (position >= 209) {
      setButtonShown(true);
    } else {
      setButtonShown(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonAction = () => {
    navigate('./create');
  };

  return (
    <CustomTooltip
      tooltipTitle="Create todo"
      placement="top"
    >
      <StyledFab
        color="primary"
        shown={buttonShown}
        onClick={handleButtonAction}
      >
        <AddIcon />
      </StyledFab>
    </CustomTooltip>
  );
};
