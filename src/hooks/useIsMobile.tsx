import { useMediaQuery } from '@mui/material'

export default function useIsMobile() {
  return useMediaQuery('(max-width: 950px)')
  //   return isMobile;
}
