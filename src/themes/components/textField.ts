import { radius } from '../radius';
import { colors } from '../colors';
import type { Components, Theme } from '@mui/material/styles';

export const MuiTextField: Components<Omit<Theme, 'components'>>['MuiTextField'] = {
  defaultProps: {
    variant: 'filled',
    size: 'small',
  },
  styleOverrides: {
    root: {
      display: 'flex',
      alignItems: 'center',
      alignSelf: 'stretch',
      borderRadius: radius[2],
      '& .MuiFilledInput-root': {
        width: '100%',
        borderRadius: 'inherit',
        backgroundColor: '#F6F6F6',
        '&:hover:not(.Mui-disabled)': {
          backgroundColor: '#F0F0F0',
          overflow: 'hidden',
        },
        '&.Mui-disabled': {
          backgroundColor: colors.secondary.gray3 + 30,
        },
        '&:before, &:after': {
          display: 'none',
        },
      },
      '& .MuiOutlinedInput-root, & .MuiInput-root': {
        width: '100%',
      },
      '& .MuiFilledInput-input, & .MuiOutlinedInput-input, & .MuiInput-input': {
        height: '50px',
        lineHeight: '50px',
        padding: '0 16px',
        boxSizing: 'border-box',
        borderRadius: radius[2],
        '&::placeholder': {
          lineHeight: '50px',
          opacity: 1,
          color: colors.secondary.gray3,
        },
        '&.Mui-disabled': {
          WebkitTextFillColor: colors.secondary.gray3, // Override default disabled text color
        },
      },
      '& .MuiOutlinedInput-root': {
        borderRadius: radius[2],
        backgroundColor: '#fff',
        '&:hover:not(.Mui-disabled)': {
          backgroundColor: '#F9F9F9',
        },
        '&.Mui-disabled': {
          backgroundColor: colors.secondary.gray2 + 30,
          cursor: 'not-allowed',
        },
      },
      '& .MuiFormHelperText-root': {
        width: '100%',
      },
    },
  },
};

export const MuiInputLabel: Components<Omit<Theme, 'components'>>['MuiInputLabel'] = {
  styleOverrides: {
    root: ({ ownerState }) => {
      return {
        ...(ownerState.filled && {
          transform: 'translate(19px, 28px) scale(1)',
          lineHeight: 'normal',
        }),
        transition: 'all 0.2s ease',
        '&.MuiInputLabel-shrink': {
          transform: 'translate(9.5px, -8px) scale(0.75)',
        },
        '&.Mui-disabled': {
          color: colors.secondary.gray3,
          cursor: 'not-allowed',
        },
      };
    },
  },
};
