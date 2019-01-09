import portfolioPhoto from '../Assets/img/portfolio.jpg'
import pc1 from '../Assets/img/carousel/portfolio/pc1.png'
import pc2 from '../Assets/img/carousel/portfolio/pc2.png'
import pc3 from '../Assets/img/carousel/portfolio/pc3.png'
import pc4 from '../Assets/img/carousel/portfolio/pc4.png'

import kalkuliPhoto from '../Assets/img/kalkuli.jpg'
import kc1 from '../Assets/img/carousel/kalkuli/kc1.png'
import kc2 from '../Assets/img/carousel/kalkuli/kc2.png'
import kc3 from '../Assets/img/carousel/kalkuli/kc3.png'
import kc4 from '../Assets/img/carousel/kalkuli/kc4.png'
import kc5 from '../Assets/img/carousel/kalkuli/kc5.png'
import kc6 from '../Assets/img/carousel/kalkuli/kc6.png'

import nuntiumPhoto from '../Assets/img/nuntium.jpg'
import nc1 from '../Assets/img/carousel/nuntium/nc1.png'
import nc2 from '../Assets/img/carousel/nuntium/nc2.png'
import nc3 from '../Assets/img/carousel/nuntium/nc3.png'
import nc4 from '../Assets/img/carousel/nuntium/nc4.png'
import nc5 from '../Assets/img/carousel/nuntium/nc5.png'

const projects = {
    nuntium:{
      title: 'Nuntium',
      subtitle: 'Ruby on Rails',
      whats:'Rede social de blogers',
      technologies: ['Ruby on Rails', 'Bootstrap'],
      description: 'Nuntium é uma rede social de bloggers. No site o usuário pode ver diversos artigos por tags ou produzir seus próprios artigos.',
      repository: 'https://github.com/EsioFreitas/Nuntium',
      photo: nuntiumPhoto, 
      carousel:[nc1, nc2, nc3, nc4, nc5]
    },
    kalkuli:{
      title: 'Kalkuli',
      subtitle: 'React + Flask',
      whats:'Controle fiscal e financeiro',
      technologies: ['React', 'Flask', 'Sass', 'Redux'],
      description: 'O Kalkuli é um sistema que busca ajudar micro e pequenas empresas que precisem fazer controle de suas notas fiscais periodicamente de maneira rápida e prática.',
      repository: 'https://github.com/Kalkuli',
      photo: kalkuliPhoto,
      carousel: [kc1, kc2, kc3, kc4, kc5, kc6]
    },
    portfolio:{
      title: 'Portfólio',
      subtitle: 'React',
      whats:'Meu portfólio',
      technologies: ['React', 'Sass'],
      description: 'É uma aplicação web para poder fornecer meus dados profissionais e portfólio de projetos que eu fiz/participei',
      repository: 'https://github.com/EsioFreitas/resume',
      photo: portfolioPhoto,
      carousel: [pc1, pc2, pc3, pc4]
    }
  }

  export default projects;