import LocomotiveScroll from 'locomotive-scroll'
import gsap from 'gsap'
import Smooth from 'smooth-scrolling'
import Custom from './custom'

const open = document.querySelector('.menu-open')
const close = document.querySelector('.menu-close')

const scroll = new Custom({
  preload: true,
  noscrollbar: true,
  native: true,
  ease: 0.1,
  section: document.querySelector('.vs-section'),
  divs: document.querySelectorAll('.vs-div')
})

scroll.init()

const project = document.querySelector('.project_1');
console.log(project)

const tl = gsap.timeline({force3D: false})

function homeStart(){
	tl
	.set('.projects span', {y:'100%'})
	.set('.links span', {y:'100%'})
	.set('.logo span', {y:'100%'})
	.from('.project_1 img', {duration: 4, ease:'power3.out', scale:1.15})
	.from('.project_1 img', {duration: 4, ease:'power1.out', autoAlpha:0}, "-=4")
	.from(project, {duration:3, ease:'expo.inOut', width:'102vw', height:'102vh', top:'-10px', left:'0'}, 2)
	.to('.logo span', {y:'0%', duration:1.1, ease:'power3.out'}, "-=1.6")
	.to('.links span', {y:'0%', duration:1.1, ease:'power3.out'}, "-=1.5")
	.to('.projects span', {y:'0%', duration:1.1, ease:'power3.out', stagger:0.08}, "-=1.6")
}

// homeStart()

function openMenu() {

  gsap.set('.menu-overlay a', {y:'100%'})

  open.addEventListener('click', function(){
    close.style = 'display: block'
    open.style = 'display: none'
    tl
    .to('.menu-wrapper', {duration:1.1, height:'100vh', ease:'power3.out'})
    .to('.menu-overlay a', {duration:1.1, y:'0%', ease:'power3.out', stagger:0.08}, "-=0.7")
  })

  close.addEventListener('click', function(){
    close.style = 'display: none'
    open.style = 'display: block'
    tl
    .to('.menu-wrapper', {duration:1.1, height:'0vh', ease:'power3.out'})
    .set('.menu-overlay a', {y:'100%'})
  })
}

openMenu()

function Cursor() {
  const cursor = document.querySelector('.cursor')
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
    cursor.textContent = "Mission 3"
  })
  project1.addEventListener('mouseleave', function(){
    console.log('Enter')
    cursor.textContent = ""
  })

  project2.addEventListener('mouseenter', function(){
    console.log('Enter')
    cursor.textContent = "Irishman"
  })
  project2.addEventListener('mouseleave', function(){
    console.log('Enter')
    cursor.textContent = ""
  })

  project3.addEventListener('mouseenter', function(){
    console.log('Enter')
    cursor.textContent = "Regular"
  })
  project3.addEventListener('mouseleave', function(){
    console.log('Enter')
    cursor.textContent = ""
  })

  project4.addEventListener('mouseenter', function(){
    console.log('Enter')
    cursor.textContent = "Âme Tapissier"
  })
  project4.addEventListener('mouseleave', function(){
    console.log('Enter')
    cursor.textContent = ""
  })

  project5.addEventListener('mouseenter', function(){
    console.log('Enter')
    cursor.textContent = "Dataviz"
  })
  project5.addEventListener('mouseleave', function(){
    console.log('Enter')
    cursor.textContent = ""
  })
}

Cursor()
// Cursor()