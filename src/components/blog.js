import React from 'react'
import '../css/style.css'
import '../css/responsive.css'
import { makeStyle } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
   blogsContainer: {
      paddinTop: theme.spacing(3),
   },
}))

const blog = () => {
   return <div maxWidth="lg" className={classes.blogsContainer}>
      <Typography
   </div>
}
export default blog
