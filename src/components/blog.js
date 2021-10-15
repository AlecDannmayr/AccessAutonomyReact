import React from 'react'
import '../css/style.css'
import '../css/responsive.css'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/box'

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
      <div maxWidth="lg" className={classes.blogsContainer}>
         <Typography variant="h4" className={classes.blogTitle}>
            Articles
         </Typography>
         <Box className={classes.hero}>
            <Box>React Blog</Box>
         </Box>
      </div>
   )
}

export default blog
