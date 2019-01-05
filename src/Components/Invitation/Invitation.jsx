import React from 'react'
import Particles from 'react-particles-js'
import Scrollchor from 'react-scrollchor'

import Button from '../UI/Button/Button'

import './Invitation.scss'

const invitation = props => (
    <header className='invitation'>
        <Particles params={particlesObj} className='invitation__particles'/> 
        <div className='invitation__content'>
            <h1>Olá, me chamo <span>Ésio Freitas</span> e eu sou</h1>
            <h1> graduando em <span>Engenharia de Software</span></h1>
			<Scrollchor to="#about-page" className='scrollhor'>
				<div>
					<Button classbutton='invitation'>
						<p>Conheça mais sobre mim!</p>
						<i className="material-icons">arrow_forward</i>
					</Button>
				</div>
			</Scrollchor>
        </div>
    </header>
);

const particlesObj = {
	particles: {
		number: {
			value: 200,
			density: {
				enable: true,
				"value_area": 1700
			}
		},
		line_linked: {
			enable: true,
			opacity: 0.3
		},
		move: {
			speed: 2
		},
		size: {
			value: 1
		},
		opacity: {
			anim: {
				enable: true,
				speed: 1,
				opacity_min: 0.05
			}
		}
	},
	interactivity: {
		events: {
			onclick: {
				enable: true,
				mode: "push"
			}	
		},
		modes: {
			push: {
				particles_nb: 1
			}
		}
	},
	retina_detect: true
}

export default invitation;