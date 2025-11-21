// theme/components/MuiOutlinedInput.ts
import type { Components, Theme } from '@mui/material/styles';
import { radius } from '../radius';

export const MuiSelect: Components<Omit<Theme, 'components'>>['MuiSelect'] = {
  styleOverrides: {
    root: {
      backgroundColor: '#F6F6F6',
      borderRadius: radius[2],
      boxShadow: 'none',
      '& .MuiOutlinedInput-notchedOutline': {
        border: '0',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        border: '0',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: '0',
      },
      '&.MuiOutlinedInput-root': {
        border: '0',
      },
    },
    select: {
      padding: '19px 16px',
    },
  },
};
