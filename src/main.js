import LocomotiveScroll from 'locomotive-scroll'
import gsap from 'gsap'
import Smooth from 'smooth-scrolling'
import Custom from './custom'
import barba from '@barba/core'
import SplitText from './SplitText'

const open = document.querySelector('.menu-open')
const close = document.querySelector('.menu-close')
const projects = document.querySelectorAll('.project_1, .project_2, .project_3, .project_4, .project_5')
const body = document.querySelector('body')
const tl = gsap.timeline({force3D: false})
let scrollHeight
let project
let projectData

const scroll = new Custom({
  preload: true,
  noscrollbar: true,
  native: true,
  ease: 0.1,
  section: document.querySelector('.vs-section'),
  divs: document.querySelectorAll('.vs-div')
})

scroll.init()

for (project of projects) {
  project.addEventListener('click', function(e){
    const rect = this.getBoundingClientRect()
    const width = rect.width * 1.5
    const height = rect.height * 1.5
    const left = (window.innerWidth - width) / 2
    const top = (window.innerHeight - height) / 2
    gsap.to(this, {left, top, width, height, duration:2.6, ease:'power4.inOut'})
  })
}


function staticLaunch(){
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   body.classList.add('is-mobile')
  }
}
staticLaunch()

function homeStart(){

  const done = function(){Cursor()}
	tl
	.set('.projects span', {y:'100%'})
	.set('.links span', {y:'100%'})
	.set('.logo a', {y:'100%'})
	.from('.project_1 img', {duration: 4, ease:'power3.out', scale:1.15})
	.from('.project_1 img', {duration: 4, ease:'power1.out', autoAlpha:0}, "-=4")
	.from(project, {duration:3, ease:'expo.inOut', width:'102vw', height:'102vh', top:'-10px', left:'0'}, 2)
	.to('.logo a', {y:'0%', duration:1.1, ease:'power3.out'}, "-=1.6")
	.to('.links span', {y:'0%', duration:1.1, ease:'power3.out'}, "-=1.5")
	.to('.projects span', {y:'0%', duration:1.1, ease:'power3.out', stagger:0.08, onComplete:done}, "-=1.6")
}

// homeStart()

// barba.init({
//   transitions: [{
//     name: 'project',
//     sync: true,
//     leave(data) {
//       const projectImg = data.next.container.querySelector('.project_header_img')
//       const projectBg = data.next.container.querySelector('.project')
//       projectImg.style.display = 'none'
//       projectBg.style.backgroundColor = 'transparent'
//       body.style = 'cursor: wait'
//       scroll.off()
//       const done = function(){
//         projectImg.style.display = 'flex'
//         projectBg.style.backgroundColor = 'black'
//       }
//       return tl
//       .to('.projects span', {y:'-100%', duration:1.1, ease:'power3.out', stagger:0.02})
//       .to(project, {top:y, left:x, duration:2.6, width:'465px', height:'620px', ease:'power4.inOut', onComplete:done}, "-=1.5")
//       .to('.transition-wrapper', {scaleY:1, duration:1.4, ease:'power3.inOut'}, "-=1.2")
//     },
//     enter(data) {
//       const resetCursor = function(){
//         body.style = 'cursor: default'
//       }
//       return tl
//       .fromTo('.project_header_title span', {y:'100%'}, {y:'0%', duration:1.1, ease:'power3.out', onComplete:resetCursor}, "-=0.6")
//       // .fromTo('.project_infos span', {y:'100%'}, {y:'0%', duration:1.1, ease:'power3.out', stagger:0.08}, "-=0.8")
//     }
//   }]
// })

function openMenu() {

  gsap.set('.menu-overlay a', {y:'100%'})

  open.addEventListener('click', function(){
    close.style = 'display: block'
    open.style = 'display: none'
    tl
    .to('.menu-wrapper', {duration:1, autoAlpha:1, ease:'power3.out'})
    .to('.menu-overlay a', {duration:1.1, y:'0%', ease:'power3.out', stagger:0.08}, "-=0.7")
  })

  close.addEventListener('click', function(){
    close.style = 'display: none'
    open.style = 'display: block'
    tl
    .to('.menu-wrapper', {duration:0.6, autoAlpha:0, ease:'power3.out'})
    .set('.menu-overlay a', {y:'100%'})
  })
}

openMenu()

function Cursor() {
  const title = document.querySelector('.cursor-title')
  const infos = document.querySelector('.cursor-infos')
  const img = document.createElement("img")
  const projects = document.querySelector('.project_1, .project_2, .project_3, .project_4, .project_5')
  
  document.addEventListener('mousemove', function(){
    gsap.to('.cursor', {duration:0.6, x:event.clientX, y:event.clientY, ease:'power3.out'})
  })

  const project1 = document.querySelector('.project_1 img')
  const project2 = document.querySelector('.project_2 img')
  const project3 = document.querySelector('.project_3 img')
  const project4 = document.querySelector('.project_4 img')
  const project5 = document.querySelector('.project_5 img')

  project1.addEventListener('mouseenter', function(){
    console.log('Enter')
    title.textContent = "Mission 3"
    infos.textContent = "Music Composition"
  })
  project1.addEventListener('mouseleave', function(){
    console.log('Enter')
    title.textContent = ""
    infos.textContent = ""
  })

  project2.addEventListener('mouseenter', function(){
    console.log('Enter')
    title.textContent = "The Irishman"
    infos.textContent = "Interactive Experience"
  })
  project2.addEventListener('mouseleave', function(){
    console.log('Enter')
    title.textContent = ""
    infos.textContent = ""
  })

  project3.addEventListener('mouseenter', function(){
    console.log('Enter')
    title.textContent = "Regular"
    infos.textContent = "Website"
  })
  project3.addEventListener('mouseleave', function(){
    console.log('Enter')
    title.textContent = ""
    infos.textContent = ""
  })

  project4.addEventListener('mouseenter', function(){
    console.log('Enter')
    title.textContent = "Âme Tapissier"
    infos.textContent = "Website"
  })
  project4.addEventListener('mouseleave', function(){
    console.log('Enter')
    title.textContent = ""
    infos.textContent = ""
  })

  project5.addEventListener('mouseenter', function(){
    console.log('Enter')
    title.textContent = "Dataviz"
    infos.textContent = "3D & Motion"
  })
  project5.addEventListener('mouseleave', function(){
    console.log('Enter')
    title.textContent = ""
    infos.textContent = ""
  })
}
// Cursor()