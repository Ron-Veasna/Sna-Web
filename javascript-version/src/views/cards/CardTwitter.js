// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import Heart from 'mdi-material-ui/Heart'
import Twitter from 'mdi-material-ui/Twitter'
import ShareVariant from 'mdi-material-ui/ShareVariant'

const CardTwitter = () => {
  return (
    <Card sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: 'info.main' }}>
      <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
        <Typography
          variant='h6'
          sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'common.white' }}
        >
          <Twitter sx={{ marginRight: 2.5 }} />
          Twitter Vicheka
        </Typography>
        <Typography variant='body2' sx={{ marginBottom: 3, color: 'common.white' }}>
          Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as
          well.
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
            <Avatar alt='Mary Vaughn' src='https://z-p3-scontent.fpnh18-1.fna.fbcdn.net/v/t39.30808-6/384512492_1647952178947770_6413205457618492503_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHhN6_sw0MxABS3k_rf_LW47QrHAf2KgYztCscB_YqBjFyILeBOQbvl80zsfjrfHPyBgy1ZuP9tlYm5xd80Z6SE&_nc_ohc=MK_DIiLu97sAX-O87iE&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh18-1.fna&oh=00_AfCVTeIt62UmssdW12ulQmKJ7orEu0WVlrs29xPlGMC8Lw&oe=65926D85' sx={{ width: 34, height: 34, marginRight: 2.75 }} />
            <Typography variant='body2' sx={{ color: 'common.white' }}>
              Rath Vicheka
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
              <Heart sx={{ marginRight: 1.25 }} />
              <Typography variant='body2' sx={{ color: 'common.white' }}>
                11.2k
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ShareVariant sx={{ marginRight: 1.25 }} />
              <Typography variant='body2' sx={{ color: 'common.white' }}>
                80
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardTwitter
