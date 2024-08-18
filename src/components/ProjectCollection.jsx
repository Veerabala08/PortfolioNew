import Projects from "./Projects";
import {projects} from "../../public/profileData"

function ProjectsCollections() {
  const reversedProjects = [...projects].reverse();

  if (!reversedProjects.length) return null;
  return (
    <>
      <section id="project"> 
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className=" text-center text-2xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Projects
            </h2>
            {/* <p className="mt-4 max-w-md text-gray-500">

            </p> */}
          </header>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
            {reversedProjects.map((project)=>(
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
