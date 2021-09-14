import React from 'react'
import ProjectBannerOne from './projectBannerOne'
import ProjectBannerTwo from './projectBannerTwo'
import ProjectBannerThree from './projectBannerThree'
import ProjectBannerFour from './projectBannerFour'

const Projects = () => {
   const [offsetY, setOffsetY] = useState(0)
   const handleScroll = () => setOffsetY(window.pageYOffset)
   useEffect(() => {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [])
   return (
      <div>
         <section style={{ transform: `translateY(${offsetY * 0.1}px)` }}>
            <ProjectBannerOne />
         </section>
         <section style={{ transform: `translateY(${offsetY * 0}px)` }}>
            <ProjectBannerFour />
         </section>
         <section style={{ transform: `translateY(${offsetY * -0.1}px)` }}>
            <ProjectBannerTwo />
         </section>
         <section style={{ transform: `translateY(${offsetY * -0.2}px)` }}>
            <ProjectBannerThree />
         </section>
      </div>
   )
}

export default Projects
