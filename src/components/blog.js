import React from 'react'
import '../css/style.css'
import '../css/responsive.css'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import SaveTheClimate from '../public/saveTheClimate.jpg'

const useStyles = makeStyles((theme) => ({
   blogsContainer: {
      paddinTop: theme.spacing(3),
   },
   blogTitle: {
      fontWeight: 800,
      paddingBottom: theme.spacing(3),
   },
   hero: {
      backGroundImage: `linear-gradient(rgba()0,0,0 0.5), rgba(0,0,0, 0.5)), url('../images/saveTheClimate.jpg')`,
      height: '500px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      fontSize: '4rem',
   },
}))

const blog = () => {
   const classes = useStyles()
   return (
      <div>
         <Container maxWidth="lg" className={classes.blogsContainer}>
            <Box className={classes.hero}>
               <Box>Blog</Box>
            </Box>
            <Typography variant="h4" className={classes.blogTitle}>
               Articles
            </Typography>
            <Grid container spacing={3}>
               <Grid item xs={12} sm={6} md={4} container spacing={3}>
                  <Card sx={{ maxWidth: 345 }}>
                     <CardMedia component="img" height="140" image={SaveTheClimate} alt="Sace the Climate" />
                     <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                        </Typography>
                     </CardContent>
                     <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                     </CardActions>
                  </Card>
               </Grid>
               <Grid item xs={12} sm={6} md={4} container spacing={3}></Grid>
               <Grid item xs={12} sm={6} md={4} container spacing={3}></Grid>
               <Grid item xs={12} sm={6} md={4} container spacing={3}></Grid>
            </Grid>
         </Container>
      </div>
   )
}

export default blog
