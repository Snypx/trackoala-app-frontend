import { useMediaQuery } from '@mui/material';

export default function isMobile() {
  return useMediaQuery('(max-width: 950px)');
  //   return isMobile;
}
