import React from 'react'

import python from './imgs/skills/python.png'
import html from './imgs/skills/html.png'
import css from './imgs/skills/css.png'
import javascript from './imgs/skills/javascript.png'
import react from './imgs/skills/react.png'
import node from './imgs/skills/node.png'
import mongo from './imgs/skills/mongodb.png'

function Skills(props) {
    let skills = [python, html, css, javascript, react, node, mongo]
    let skillStr = ['Python', 'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB']
    if (props.show === 2) {
        return (
            <ul className='skills'>
                {skills.map((i, index) => (<li>
                    <img src={i}/>
                    <span>{skillStr[index]}</span>
                </li>))}
            </ul>
          )
    }
}

export default Skills