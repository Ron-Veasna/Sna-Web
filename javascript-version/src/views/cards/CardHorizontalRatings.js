// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Grid from '@mui/material/Grid'

// Styled Grid component
const StyledGrid1 = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  [theme.breakpoints.down('md')]: {
    paddingTop: '0 !important'
  },
  '& .MuiCardContent-root': {
    padding: theme.spacing(3, 4.75),
    [theme.breakpoints.down('md')]: {
      paddingTop: 0
    }
  }
}))

// Styled Grid component
const StyledGrid2 = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    paddingLeft: '0 !important'
  },
  [theme.breakpoints.down('md')]: {
    order: -1
  }
}))

// Styled component for the image
const Img = styled('img')(({ theme }) => ({
  height: '11rem',
  borderRadius: theme.shape.borderRadius
}))

const CardHorizontalRatings = () => {
  return (
    <Card>
      <Grid container spacing={6}>
        <StyledGrid1 item xs={12} md={6} lg={7}>
          <CardContent>
            <Typography variant='h6' sx={{ marginBottom: 2 }}>
              Gamming Roasters
            </Typography>
            <Box sx={{ mb: 4.75, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
              <Rating readOnly value={5} name='read-only' sx={{ marginRight: 2 }} />
              <Typography variant='body2'>5 Star | 1m reviews</Typography>
            </Box>
            <Typography variant='body2' sx={{ marginBottom: 4 }}>
              Before there was a Phnom Penh of Cambodia, there were Gamming houses, because how are you supposed to
              build.
            </Typography>
          </CardContent>
          <CardActions className='card-action-dense' sx={{ width: '100%' }}>
            <Button>Location</Button>
            <Button>Reviews</Button>
          </CardActions>
        </StyledGrid1>
        <StyledGrid2 item xs={12} md={6} lg={5}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Img width={357} alt='Gamming Roasters' src='https://www.leetdesk.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fleetdesk%2F5faf0a70-6e31-4675-97a1-6aa8310b4309_led-gaming-zimmer-beleuchtung.jpg%3Fauto%3Dcompress%2Cformat&w=3840&q=75' />
          </CardContent>
        </StyledGrid2>
      </Grid>
    </Card>
  )
}

export default CardHorizontalRatings
