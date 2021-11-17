/** @format */

import * as React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../css/style.css'
import '../css/responsive.css'
//import 'animate.css'
import { makeStyles } from '@material-ui/core/styles'
import LearningToCode from '../project-images/image-two.png'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import BlogImageBeKind from '../blog-images/Header-Images/BeKindHeader.jpeg'
import BeKind from '../blogs/beKind.js'

const useStyles = makeStyles((theme) => ({
    imageContainer: {
        height: '100vh',
        overflow: 'auto',
        marginLeft: '90px',
        marginTop: '0px',
    },
}))

const blogs = [
    {
        img: BlogImageBeKind,
        title: 'Be kind in a harsh enviroment',
        tag: 'politics',
        location: '/be-kind',
    },
    {
        img: BlogImageBeKind,
        title: 'Be kind in a harsh enviroment',
        tag: 'politics',
        location: '/be-kind',
    },
    {
        img: BlogImageBeKind,
        title: 'Be kind in a harsh enviroment',
        tag: 'politics',
        location: '/be-kind',
    },
]

export default function StandardImageList() {
    const classes = useStyles()
    const [tag, setTag] = useState('all')
    const [filteredImages, setFilteredImages] = useState([])
    useEffect(() => {
        tag === 'all' ? setFilteredImages(blogs) : setFilteredImages(blogs.filter((blogs) => blogs.tag === tag))
    }, [tag])

    return (
        <div>
            <ImageList cols={2} className={classes.imageContainer}>
                {filteredImages.map((item) => (
                    <Link to={item.location}>
                        <ImageListItem key={item.img}>
                            <a href={`/images/${item.img}`}></a>
                            <img id="imageContainer" src={`${item.img}?w=164&h=164&fit=crop&auto=format`} srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} alt={item.title} />
                            <p id="show">{item.title}</p>
                        </ImageListItem>
                    </Link>
                ))}
            </ImageList>
        </div>
    )
}
