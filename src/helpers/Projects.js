import portfolioPhoto from '../Assets/img/portfolio.jpg'
import kalkuliPhoto from '../Assets/img/kalkuli.jpg'

const projects = {
    nuntium:{
      title: 'Nuntium',
      subtitle: 'Ruby on Rails',
      whats:'Rede social de blogers',
      technologies: ['Ruby on Rails', 'Bootstrap'],
      description: 'Um texto bem legal do projeto aqui ta',
      repository: 'https://github.com/EsioFreitas/Nuntium',
      photo: portfolioPhoto 
    },
    kalkuli:{
      title: 'Kalkuli',
      subtitle: 'React + Flask',
      whats:'Controle fiscal e financeiro',
      technologies: ['React', 'Flask', 'Sass', 'Redux'],
      description: 'Um texto bem legal do projeto aqui ta',
      repository: 'https://github.com/Kalkuli',
      photo: kalkuliPhoto 
    },
    portfolio:{
      title: 'Portfólio',
      subtitle: 'React',
      whats:'Meu portfólio',
      technologies: ['React', 'Sass'],
      description: 'Um texto bem legal do projeto aqui ta',
      repository: 'https://github.com/EsioFreitas/portfolio',
      photo: portfolioPhoto 
    }
  }

  export default projects;