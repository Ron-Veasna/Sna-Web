// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CardAppleWatch = () => {
  return (
    <Card>
      <CardMedia sx={{ height: '9.375rem' }} image='https://www.apple.com/newsroom/images/live-action/wwdc-2023/standard/watchos-10/Apple-WWDC23-watchOS-10-5up-230605.jpg.og.jpg?202310101605' />
      <CardContent sx={{ padding: theme => `${theme.spacing(3, 5.25, 4)} !important` }}>
        <Typography variant='h6' sx={{ marginBottom: 2 }}>
          Apple Watch
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>$249.40</Typography>
        <Typography variant='body2'>
          3.1GHz 6-core 10th-generation Intel Core i5 processor, Turbo Boost up to 4.5GHz
        </Typography>
      </CardContent>
      <Button variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
        Buy Now
      </Button>
    </Card>
  )
}

export default CardAppleWatch
