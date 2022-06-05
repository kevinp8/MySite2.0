import React from 'react'

import github from './imgs/links/github.png'
import linkedin from './imgs/links/linkedin.png'
import twitter from './imgs/links/twitter.png'

function Links(props) {
    let links = [github, linkedin, twitter]
    let linksStr = ['GitHub', 'LinkedIn', 'Twitter']
    let urls = [
        'https://github.com/kevinp8',
        'https://www.linkedin.com/in/kevinp821/',
        'https://twitter.com/kev1nfam'
    ]
    if (props.show === 4) {
        return (
            <ul className='skills'>
                {links.map((i, index) => (<li>
                    <a href={urls[index]} target='_blank' rel="noreferrer">
                        <img src={i} alt={linksStr[index]}/>
                        <span>{linksStr[index]}</span>
                    </a>
                </li>))}
            </ul>
          )
    }
}

export default Links