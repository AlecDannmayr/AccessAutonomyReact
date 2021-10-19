import * as React from 'react'
import { useState, useEffect } from 'react'
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

const images = [
   {
      img: ProjectImgSix,
      title: 'Breakfast',
      tag: 'Build',
   },
   {
      img: ProjectImgTwo,
      title: 'Burger',
      tag: 'Build',
   },
   {
      img: ProjectImgThree,
      title: 'Camera',
      tag: 'UX/UI',
   },
   {
      img: ProjectImgEight,
      title: 'Coffee',
      tag: 'UX/UI',
   },
   {
      img: ProjectImgFive,
      title: 'Hats',
      tag: 'Build',
   },
   {
      img: ProjectImgSix,
      title: 'Honey',
      tag: 'UX/UI',
   },
   {
      img: ProjectImgSeven,
      title: 'Basketball',
      tag: 'UX/UI',
   },
]

export default function StandardImageList() {
   const classes = useStyles()
   const [tag, setTag] = useState('all')
   const [filteredImages, setFilteredImages] = useState([])

   useEffect(() => {
      tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter((images) => images.tag === tag))
   }, [tag])
   const TagButton = ({ name }) => {
      return <button>{name.toUpperCase()}</button>
   }
   return (
      <div>
         <div>
            <TagButton name="projects" />
            <TagButton name="build" />
            <TagButton name="Ux/Ui" />
         </div>
         <ImageList cols={3} className={classes.imageContainer}>
            {filteredImages.map((item) => (
               <ImageListItem key={item.img}>
                  <img id="imageContainer" src={`${item.img}?w=164&h=164&fit=crop&auto=format`} srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading="lazy" />
                  <p id="show">{item.title}</p>
               </ImageListItem>
            ))}
         </ImageList>
      </div>
   )
}
