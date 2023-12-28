// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import AvatarGroup from '@mui/material/AvatarGroup'

const CardUser = () => {
  return (
    <Card sx={{ position: 'relative' }}>
      <CardMedia sx={{ height: '12.625rem' }} image='https://z-p3-scontent.fpnh18-1.fna.fbcdn.net/v/t39.30808-6/273695968_1268910490185276_654696527896866353_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeEKAIsFNmCc4PrzmIFYU6D65BqLXf552g3kGotd_nnaDVb5OwchQoGUuVxUnlh91wdnD1mpe5RQEn6i8OzsvPRJ&_nc_ohc=hQ2iU0cJwx8AX_VDeBN&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh18-1.fna&oh=00_AfAgvp6KjHycxv_myJeAZgLixCd4xAFBq2quOb7oQx1aEQ&oe=65916608' />
      <Avatar
        alt='Ron Veasna'
        src='https://z-p3-scontent.fpnh18-5.fna.fbcdn.net/v/t39.30808-6/337988116_1280319915890485_582086342740823201_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEVnHdzXaHsQQnfmaumK3199S3-rGqtPt71Lf6saq0-3tW6rz2xL1ruUU1ie2ohBjaC2maOHKX2BL9vrd18GHko&_nc_ohc=KWkiL-GQx70AX86OyEG&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh18-5.fna&oh=00_AfDAeCjwDAHEkoapA-LRYYgJDeHyiEqYerfO7pxpb5UrVQ&oe=65925A7F'
        sx={{
          width: 75,
          height: 75,
          left: '1.313rem',
          top: '10.28125rem',
          position: 'absolute',
          border: theme => `0.25rem solid ${theme.palette.common.white}`
        }}
      />
      <CardContent>
        <Box
          sx={{
            mt: 5.75,
            mb: 8.75,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h6'>Ron Veasna</Typography>
            <Typography variant='caption'>Cambodia, Kh</Typography>
          </Box>
          <Button variant='contained'>Send Request</Button>
        </Box>
        <Box sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant='subtitle2' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
            18 mutual friends
          </Typography>
          <AvatarGroup max={4}>
            <Avatar src='https://z-p3-scontent.fpnh18-1.fna.fbcdn.net/v/t39.30808-6/384512492_1647952178947770_6413205457618492503_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHhN6_sw0MxABS3k_rf_LW47QrHAf2KgYztCscB_YqBjFyILeBOQbvl80zsfjrfHPyBgy1ZuP9tlYm5xd80Z6SE&_nc_ohc=MK_DIiLu97sAX-O87iE&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh18-1.fna&oh=00_AfCVTeIt62UmssdW12ulQmKJ7orEu0WVlrs29xPlGMC8Lw&oe=65926D85' alt='Alice Cobb' />
            <Avatar src='https://z-p3-scontent.fpnh18-4.fna.fbcdn.net/v/t39.30808-6/341603408_989705085735792_2288210253457042530_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGSTbY2ktxdmNarq-igW7yIUJxzC_vY9-tQnHML-9j36-I-RSuVx5nANfDMRSnte_FV5agaTwddeiCQO2ZLaDAV&_nc_ohc=B4i6iLCaSGMAX8ZkHGV&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh18-4.fna&oh=00_AfAP_oUeKYZ3oXwQL8XV26DFVlIwnlkJbvCAQDo4BRcJhw&oe=6591A8DF' alt='Jeffery Warner' />
            <Avatar src='https://z-p3-scontent.fpnh18-4.fna.fbcdn.net/v/t39.30808-6/366210152_244409438422738_1389642593649555713_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHQuiosEtCkFmsinvVzGTn3KGeR6FPI4xcoZ5HoU8jjF_m-WQo4bhwLoeBZvykxqWAlc8NDukcgGBYE0JZY7qQ1&_nc_ohc=67e1KlYrKoMAX8nEvZw&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh18-4.fna&oh=00_AfDnC_33WdOA3bl7hxTp1whBAipRusHc2A8DgBV9Y4Mmrw&oe=6591DCA7' alt='Howard Lloyd' />
            <Avatar src='/images/avatars/2.png' alt='Bettie Dunn' />
            <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />
            <Avatar src='/images/avatars/5.png' alt='Jimmy Hanson' />
            <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />
          </AvatarGroup>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardUser
