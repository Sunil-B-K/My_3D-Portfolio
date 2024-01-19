import React from 'react'
import ProjectBox from './ProjectBox'
import Header from '../../HelperComp/Header';

const Projects = ({ProjectData}) => {

  

    return (
        <div className="h-full page-shadow bg-white p-10">
          {/* heading */}
          <Header
            title="Projects"
            subtitle="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet."
          />
    
          {/* Project section  */}
          <div>
            <ProjectBox  projectData3={ProjectData} />
          </div>
        </div>
      );
}

export default Projects
