import type { TypographyVariantsOptions } from '@mui/material/styles';
import { colors } from '../colors';

export const typography: TypographyVariantsOptions = {
  fontFamily: `'Inter', 'Noto Sans Lao', sans-serif`,

  h1: {
    fontSize: '36px',
    fontWeight: 700,
    lineHeight: 'normal',
    color: colors.dominant.white1, // bright
  },
  h2: {
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: 'normal',
    color: colors.dominant.white1,
  },
  h3: {
    fontSize: '26px',
    fontWeight: 700,
    lineHeight: 'normal',
    color: colors.secondary.text, // cool white
  },
  h4: {
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: 'normal',
    color: colors.secondary.text,
  },
  h5: {
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: 'normal',
    color: colors.secondary.text,
  },
  h6: {
    fontSize: '16px',
    fontWeight: 700,
    lineHeight: 'normal',
    color: colors.secondary.text,
  },

  body1: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: 'normal',
    color: colors.secondary.text, // normal body color
  },
  body2: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 'normal',
    color: colors.secondary.gray3, // slightly muted
  },

  subtitle1: {
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: 'normal',
    color: colors.secondary.gray2, // softer highlight text
  },
  subtitle2: {
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: 'normal',
    color: colors.dominant.white50, // subtle secondary label
  },
} as const;

export type Typography = typeof typography;
