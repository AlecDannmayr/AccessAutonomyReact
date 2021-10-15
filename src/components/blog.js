import React from 'react'
import '../css/style.css'
import '../css/responsive.css'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
   blogsContainer: {
      paddinTop: theme.spacing(3),
   },
   blogTitle: {
      fontWeight: 800,
      paddingNottom: theme.spacing(3),
   },
   hero: {
      backGroundImage: `linear-gradient(rgba()0,0,0 0.5), rgba(0,0,0, 0.5)), url(../images/saveTheClimate.jpg)`,
   },
}))

const blog = () => {
   const classes = useStyles()
   return (
      <div maxWidth="lg" className={classes.blogsContainer}>
         <Typography variant="h4" className={classes.blogTitle}>
            Articles
         </Typography>
      </div>
   )
}

export default blog
