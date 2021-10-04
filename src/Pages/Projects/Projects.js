import "./Projects.css"

import ProjectList from "../../ProjectList/ProjectList";

import Card from "../../Components/NavBar/Widgets/Cards/Card";

const Projects = (props) => {

    const Projects = ProjectList.map( (project)=>{
        return (
            <Card key={project.id} title={project.title} 
            description={project.description}
            projectLink={project.projectLink}
            sourceCodeLink={project.sourceCodeLink} />
        )
    } )

    return (
        <div className="projects-page" >
            <div style={{flex: 1}} ></div>

            <div className="page-content" >
                {Projects}

            </div>

            <div style={{flex: 1}} ></div>
        </div>
    )
}

export default Projects;