import React from 'react'

function About(props) {
    if (props.show === 1) {
        return (
            <div>
                <p>I’ve always had a passion for technology and knew that I wanted to pursue a career in tech. However, I didn’t know what I wanted specifically, until I started to learn programming two years ago. As new technologies and software emerged, I realized that code is what powers it all and I want to contribute to the future of technology with my knowledge and skills in programming. Of course, the learning journey doesn’t end since technology will continue to evolve, but I welcome the challenge and am eager to learn more to bring the next big thing to the masses that will improve their lives.</p>
            </div>
          )
    }
}

export default About