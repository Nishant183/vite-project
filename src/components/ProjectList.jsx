function ProjectList() {
    const projects=[
        {
          title: 'Project One',
          description: 'A web application build using React and Node',
          link: '#'
        },
        {
          title: 'Project Two',
          description: 'A ecommerce platform build using Django',
          link: '#'
        }
    ]
    return (
        <section id='projects' className='projects-section'>
        <h2>Projects</h2>
        <div className='projects-list'>
          {projects.map((project, index)=>(
            <div key={index} className='project-item'>
              <h3>{project.title}</h3>
              <h3>{project.description}</h3>
              <a href={project.link} target='_blank' rel='noopener no referrer'>View Project</a>
            </div>
          ))}
        </div>
        </section>
    );
}
export default ProjectList