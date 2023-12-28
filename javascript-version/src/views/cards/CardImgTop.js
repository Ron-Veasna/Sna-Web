// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardImgTop = () => {
  return (
    <Card>
      <CardMedia sx={{ height: '14.5625rem' }} image='https://www.desmoinesregister.com/gcdn/presto/2023/03/06/PDEM/442d7d79-7525-4f5d-8c0b-e56f3b810e3b-6102_NE_Briarwood_Dr_Ankeny_IA_twilight_028.jpg?crop=1023,576,x0,y94&width=660&height=372&format=pjpg&auto=webp' />
      <CardContent>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Home Veasna The Influencer
        </Typography>
        <Typography variant='body2'>
          Veasna is back, better than ever! Over a hundred Khmer resorts have reopened and the state tourism minister
          predicts Veasna will draw as many visitors in 2023 as he did two years ago.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardImgTop
