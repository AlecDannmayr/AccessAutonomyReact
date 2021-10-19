import * as React from 'react'
import '../css/style.css'
import '../css/responsive.css'
import 'animate.css'
import { makeStyles } from '@material-ui/core/styles'
import ProjectImgOne from '../images/image-one.png'
import ProjectImgTwo from '../images/image-two.png'
import ProjectImgThree from '../images/image-three.png'
import ProjectImgFour from '../images/image-four.png'
import ProjectImgFive from '../images/image-five.png'
import ProjectImgSix from '../images/image-six.png'
import ProjectImgSeven from '../images/image-seven.png'
import ProjectImgEight from '../images/image-eight.png'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

const useStyles = makeStyles((theme) => ({
   imageContainer: {
      overflow: 'scroll',
      marginLeft: '90px',
      marginTop: '0px',
   },
}))

export default function StandardImageList() {
   const classes = useStyles()
   return (
      <ImageList cols={3} className={classes.imageContainer}>
         {itemData.map((item) => (
            <ImageListItem key={item.img}>
               <img id="imageContainer" src={`${item.img}?w=164&h=164&fit=crop&auto=format`} srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading="lazy" />
               <p id="show">{item.title}</p>
            </ImageListItem>
         ))}
      </ImageList>
   )
}

const itemData = [
   {
      img: ProjectImgSix,
      title: 'UX/UI',
   },
   {
      img: ProjectImgTwo,
      title: 'Build',
   },
   {
      img: ProjectImgThree,
      title: 'Build',
   },
   {
      img: ProjectImgEight,
      title: 'Ux/Ui',
   },
   {
      img: ProjectImgFive,
      title: 'Build',
   },
   {
      img: ProjectImgSix,
      title: 'Develop',
   },
   {
      img: ProjectImgSeven,
      title: 'Ux/Ui',
   },
]
