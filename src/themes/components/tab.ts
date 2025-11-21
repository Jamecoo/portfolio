import type { Components, Theme } from '@mui/material/styles';
import { colors } from '../colors';

export const MuiTabs: Components<Omit<Theme, 'components'>>['MuiTabs'] = {
  styleOverrides: {
    indicator: {
      backgroundColor: colors.primary.main,
      height: '4px',
      borderRadius: '8px',
    },
  },
};

export const MuiTab: Components<Omit<Theme, 'components'>>['MuiTab'] = {
  styleOverrides: {
    root: {
      textTransform: 'none',
      fontWeight: 400,
      color: '#888888',
      '&.Mui-selected': {
        fontWeight: 700,
        color: '#000000',
      },
    },
  },
};
