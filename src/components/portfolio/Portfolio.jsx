import React from 'react'
import './portfolio.css';
import img1 from '../../assets/PFE project.png';
import img2 from '../../assets/Base des données .png';
import img3 from '../../assets/Citrus fibris.png';
const data =[{
  id:1,
  image:img1,
  title:'Investigation of the role of alternative Splicing in the contexte of speciation ',
  github:'https://github.com/Fadis04/Flycatcher-Project-M2-',
  demo:'https://media.licdn.com/dms/document/media/v2/D4D2DAQEgTjdOtUrH8A/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1707056478593?e=1732752000&v=beta&t=lXrm9KlJoDV0bp5KxBXVYgeS06UeMO_sBX5vTZ4Qg6w'
},
{
  id:2,
  image:img2,
  title:'Database Development on Genetic Diseases in Tunisia',
},
{
  id:3,
  image:img3,
  title:' Valorization of Citrus Peel Waste into Textile Fibers'
}
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {data.map(({id,image,title,github,demo}) => {
          return(
            <article className='portfolio_item'>
            <div className='portfolio_item-image'>
            <img src={image} alt={id}/>
              </div>
            <h3>{title}</h3>
            {id <= 1 ?
            <div className='portfolio_item-cta'>
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary'  target='_blank'>Article</a>
            </div>
        :
        <div className='portfolio_item-cta'></div>
        
        }
          </article>
          )
        })
        }
       
      
      </div>
    </section>
  )
}

export default Portfolio