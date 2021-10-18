import * as React from 'react'
import '../css/style.css'
import '../css/responsive.css'
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
      marginTop: '-60px',
   },
}))

export default function StandardImageList() {
   const classes = useStyles()
   return (
      <ImageList className={classes.imageContainer}>
         {itemData.map((item) => (
            <ImageListItem key={item.img}>
               <img src={`${item.img}?w=164&h=164&fit=crop&auto=format`} srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading="lazy" />
            </ImageListItem>
         ))}
      </ImageList>
   )
}

const itemData = [
   {
      img: ProjectImgSix,
      title: 'Breakfast',
   },
   {
      img: ProjectImgTwo,
      title: 'Burger',
   },
   {
      img: ProjectImgThree,
      title: 'Camera',
   },
   {
      img: ProjectImgEight,
      title: 'Coffee',
   },
   {
      img: ProjectImgFive,
      title: 'Hats',
   },
   {
      img: ProjectImgSix,
      title: 'Honey',
   },
   {
      img: ProjectImgSeven,
      title: 'Basketball',
   },
]
