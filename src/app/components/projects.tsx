import { projects } from '../../../lib/projects'
import Project from "./project"

export default function Projects() {
  return(
    <section id="Projects" className="bg-white px-10 py-4 my-5 box-pop">
      <h1 className="text-2xl font-bold mb-5">Projects</h1>
      <div className="flex justify-center flex-wrap gap-5">
        {projects.map((project) => <Project title={project.title} pageLink={project.pageLink} gitHubLink={project.gitHubLink} imgPath={project.imgPath} tech={project.tech} description={project.description} key={project.id} />)}
      </div>
    </section>
  )
}