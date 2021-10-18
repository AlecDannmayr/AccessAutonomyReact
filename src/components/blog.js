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
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import SaveTheClimate from '../images/saveTheClimate.jpg'

const useStyles = makeStyles((theme) => ({
   blogsContainer: {
      paddinTop: theme.spacing(3),
   },
   blogTitle: {
      fontWeight: 800,
      paddingBottom: theme.spacing(3),
   },
   hero: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      fontSize: '4rem',
   },
   card: {
      maxWidth: '100%',
   },
   media: {
      height: '240px',
   },
   cardActions: {
      display: 'flex',
      margin: '0 10px',
      justifyContent: 'space-between',
   },
   author: {
      display: 'flex',
   },
   authorInfo: {
      marginRight: '50px',
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
                  <Card sx={{ maxWidth: 445 }}>
                     <CardMedia component="img" height="140" image={SaveTheClimate} alt="Sace the Climate" />
                     <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           React useContext
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                        </Typography>
                     </CardContent>
                     <CardActions className={classes.cardActions}>
                        <Box className={classes.author}>
                           <Avatar src="https://avatars.githubusercontent.com/u/19597027?v=4" />
                        </Box>
                        <Box ml={1} className={classes.authorInfo}>
                           <Typography variant="subtitle2" component="p">
                              Alec Dannmayr
                           </Typography>
                           <Typography variant="subtitle2" color="textSecondary" component="p">
                              May 14, 2020
                           </Typography>
                        </Box>
                        <Box>
                           <BookmarkBorderIcon></BookmarkBorderIcon>
                        </Box>
                     </CardActions>
                  </Card>
               </Grid>
            </Grid>
         </Container>
      </div>
   )
}

export default blog
