import React from 'react'
import '../css/style.css'
import '../css/responsive.css'
import ProjectImgOne from '../images/image-one.png'
import ProjectImgTwo from '../images/image-two.png'
import ProjectImgThree from '../images/image-three.png'
import ProjectImgFour from '../images/image-four.png'
import ProjectImgFive from '../images/image-five.png'
import ProjectImgSix from '../images/image-six.png'
import ProjectImgSeven from '../images/image-seven.png'
import ImageList from '@mui/material/ImageList'
import itemData from '@mui/material/itemData'
import ImageListItem from '@mui/material/ImageListItem'

const projects = () => {
   return (
      <div>
         <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {itemData.map((item) => (
               <ImageListItem key={item.img}>
                  <img src={`${item.img}?w=164&h=164&fit=crop&auto=format`} srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} alt={item.title} loading="lazy" />
               </ImageListItem>
            ))}
         </ImageList>
      </div>
   )
}

export default projects
