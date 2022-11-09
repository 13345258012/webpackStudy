import {getBlogPosts} from './data.js'
import './test/date/printData.js'
import './style.css'
import dogImage from './assets/images/img.jpg'

console.log(getBlogPosts())
const blogs = getBlogPosts()

const ul = document.createElement('ul')
blogs.forEach(ele => {
  const li = document.createElement('li')
  li.innerText = ele
  ul.appendChild(li)
})
document.body.appendChild(ul)


const image = document.createElement('img')
image.src = dogImage
image.style.width="30%"

document.body.appendChild(image)