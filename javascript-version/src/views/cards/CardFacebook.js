// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import Heart from 'mdi-material-ui/Heart'
import Facebook from 'mdi-material-ui/Facebook'
import ShareVariant from 'mdi-material-ui/ShareVariant'

const CardFacebook = () => {
  return (
    <Card sx={{ border: 0, boxShadow: 0, color: 'common.white', backgroundColor: 'primary.main' }}>
      <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
        <Typography
          variant='h6'
          sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'common.white' }}
        >
          <Facebook sx={{ marginRight: 2.5 }} />
          Facebook Sna
        </Typography>
        <Typography variant='body2' sx={{ marginBottom: 3, color: 'common.white' }}>
          You’ve read about the importance of being courageous, rebellious and imaginative. These are all vital
          ingredients in an effective.
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
            <Avatar alt='Eugene Clarke' src='https://z-p3-scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/337988116_1280319915890485_582086342740823201_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEVnHdzXaHsQQnfmaumK3199S3-rGqtPt71Lf6saq0-3tW6rz2xL1ruUU1ie2ohBjaC2maOHKX2BL9vrd18GHko&_nc_ohc=KWkiL-GQx70AX86OyEG&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh18-5.fna&oh=00_AfDAeCjwDAHEkoapA-LRYYgJDeHyiEqYerfO7pxpb5UrVQ&oe=65925A7F' sx={{ width: 34, height: 34, marginRight: 2.75 }} />
            <Typography variant='body2' sx={{ color: 'common.white' }}>
              Ron Veasna
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
              <Heart sx={{ marginRight: 1.25 }} />
              <Typography variant='body2' sx={{ color: 'common.white' }}>
                10.2k
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ShareVariant sx={{ marginRight: 1.25 }} />
              <Typography variant='body2' sx={{ color: 'common.white' }}>
                86
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardFacebook
