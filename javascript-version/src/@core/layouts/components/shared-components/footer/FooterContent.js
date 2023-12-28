// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery(theme => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2 }}>
        {`© ${new Date().getFullYear()}, Made with `}
        <Box component='span' sx={{ color: 'error.main' }}>
          ❤️
        </Box>
        {` by `}
        <Link target='_blank' href='https://web.facebook.com/Sna.Mr.XD'>
          Ron Veasna
        </Link>
      </Typography>
      {hidden ? null : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', '& :not(:last-child)': { mr: 4 } }}>
          <Link
            target='_blank'
            href='https://web.facebook.com/Sna.Mr.XD'
          >
            Sna License
          </Link>
          <Link target='_blank' href='https://web.facebook.com/Sna.Mr.XD'>
            For Sna More
          </Link>
          <Link
            target='_blank'
            href='https://web.facebook.com/Sna.Mr.XD'
          >
            Documentation
          </Link>
          <Link
            target='_blank'
            href='https://web.facebook.com/Sna.Mr.XD'
          >
            Supporter
          </Link>
        </Box>
      )}
    </Box>
  )
}

export default FooterContent
