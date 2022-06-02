import React from 'react'

function Projects(props) {
    let projects = {
        'My Website V2': {
            alink: '',
            tech: 'React'
        },
        'Tic-Tac-Toe': {
            alink: '',
            tech: 'React'
        }, 
        'CV Maker': {
            alink: '',
            tech: 'React'
        }, 
        'Task App': {
            alink: '',
            tech: 'React'
        }, 
        'Etch-A-Sketch': {
            alink: '',
            tech: 'HTML, CSS, JavaScript'
        }, 
        'Calculator': {
            alink: 'https://aesthetic-centaur-6d588b.netlify.app/',
            tech: 'HTML, CSS, JavaScript'
        }, 
        'Rock, Paper, Scissors': {
            alink: 'https://extraordinary-valkyrie-afacc0.netlify.app/',
            tech: 'HTML, CSS, JavaScript'
        }, 
        'Temperature Converter': {
            alink: 'https://gallant-mahavira-d9b757.netlify.app/',
            tech: 'HTML, CSS, JavaScript'
        }, 
        'My Website V1': {
            alink: '',
            tech: 'HTML, CSS'
        }, 
        'Salon Site': {
            alink: 'https://hairsalonproject.netlify.app/',
            tech: 'HTML, CSS'
        }, 
        'BBC Clone': {
            alink: 'https://bbcclonefloats.netlify.app/',
            tech: 'HTML, CSS'
        }, 
        'TechCrunch Clone': {
            alink: 'https://maketechcrunch.netlify.app/',
            tech: 'HTML, CSS'
        }, 
        'Restaurant Site': {
            alink: 'https://relaxed-pasteur-f78bb6.netlify.app/',
            tech: 'HTML, CSS'
        }
    }
    if (props.show === 3) {
        return (
            <ul className='projects'>
                {Object.keys(projects).map(i => (
                    <li>
                        <a href={projects[i].alink} target='_blank'>{i}</a>
                        <span>{projects[i].tech}</span>
                    </li>
                ))}
            </ul>
          )
    }
}

export default Projects