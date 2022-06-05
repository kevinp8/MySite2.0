import React from 'react'

import bbc from './imgs/projects/bbc.png'
import calc from './imgs/projects/calc.png'
import food from './imgs/projects/food.jpeg'
import hair from './imgs/projects/hairsalon.jpeg'
import site1 from './imgs/projects/mysite.jpeg'
import rps from './imgs/projects/rps.png'
import tech from './imgs/projects/techcrunch.jpeg'
import tempr from './imgs/projects/temp.jpeg'
import etch from './imgs/projects/etch.png'
import tasks from './imgs/projects/tasks.png'
import cv from './imgs/projects/cv.png'
import ttt from './imgs/projects/ttt.png'
import site2 from './imgs/projects/site2.png'

function Projects(props) {
    let projects = {
        'My Website V2': {
            alink: '',
            thumbnail: site2,
            tech: 'React'
        },
        'Tic-Tac-Toe': {
            alink: 'https://statuesque-melba-255386.netlify.app/',
            thumbnail: ttt,
            tech: 'React'
        }, 
        'CV Maker': {
            alink: 'https://loquacious-biscuit-8372c4.netlify.app/',
            thumbnail: cv,
            tech: 'React'
        }, 
        'Task App': {
            alink: 'https://calm-gelato-60175d.netlify.app/',
            thumbnail: tasks,
            tech: 'React'
        }, 
        'Etch-A-Sketch': {
            alink: 'https://gleaming-dieffenbachia-4dbf09.netlify.app/',
            thumbnail: etch,
            tech: 'HTML, CSS, JavaScript'
        }, 
        'Calculator': {
            alink: 'https://aesthetic-centaur-6d588b.netlify.app/',
            thumbnail: calc,
            tech: 'HTML, CSS, JavaScript'
        }, 
        'Rock, Paper, Scissors': {
            alink: 'https://extraordinary-valkyrie-afacc0.netlify.app/',
            thumbnail: rps,
            tech: 'HTML, CSS, JavaScript'
        }, 
        'Temperature Converter': {
            alink: 'https://gallant-mahavira-d9b757.netlify.app/',
            thumbnail: tempr,
            tech: 'HTML, CSS, JavaScript'
        }, 
        'My Website V1': {
            alink: 'https://kevinpportfolio.netlify.app/',
            thumbnail: site1,
            tech: 'HTML, CSS'
        }, 
        'Salon Site': {
            alink: 'https://hairsalonproject.netlify.app/',
            thumbnail: hair,
            tech: 'HTML, CSS'
        }, 
        'BBC Clone': {
            alink: 'https://bbcclonefloats.netlify.app/',
            thumbnail: bbc,
            tech: 'HTML, CSS'
        }, 
        'TechCrunch Clone': {
            alink: 'https://maketechcrunch.netlify.app/',
            thumbnail: tech,
            tech: 'HTML, CSS'
        }, 
        'Restaurant Site': {
            alink: 'https://relaxed-pasteur-f78bb6.netlify.app/',
            thumbnail: food,
            tech: 'HTML, CSS'
        }
    }
    if (props.show === 3) {
        return (
            <ul className='projects'>
                {Object.keys(projects).map(i => (
                    <li>
                        <a href={projects[i].alink} target='_blank' rel="noreferrer">{i}</a>
                        <img src={projects[i].thumbnail} alt={i}/>
                        <span>{projects[i].tech}</span>
                    </li>
                ))}
            </ul>
          )
    }
}

export default Projects