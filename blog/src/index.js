import {getBlogPosts} from './data.js'
import './style.css'
import dogImage from './assets/images/img.jpg'

console.log(getBlogPosts())


const image = document.createElement('img')
image.src = dogImage

document.body.appendChild(image)