import Projects from "./Projects";
import {projects} from "../../public/profileData"

function ProjectsCollections() {
    if(!projects.length) return null
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className=" text-center text-2xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Projects
            </h2>

            {/* <p className="mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p> */}
          </header>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project)=>(
                <li key={project.id}>
                <Projects project={project} />
               </li>
            ))}
            
          </ul>
        </div>
      </section>
    </>
  );
}

export default ProjectsCollections;
