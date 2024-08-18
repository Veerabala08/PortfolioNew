import { MdPreview,} from "react-icons/md";
import { RiGithubFill } from "react-icons/ri";

const Projects = ({ project }) => {
  return (
    <>
      <div href="#" className="group relative bg-black rounded-md ">
        <img
          alt=""
          src={`https://raw.githubusercontent.com/Veerabala08/${project.img}/main/public/${project.img}.png`}
          className="absolute inset-0 h-full w-30% object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-md"
        />

        <div className="relative p-4 sm:p-6 lg:p-8  ">
          <div className="isolate aspect-video w-full h-16 p-1 rounded-md bg-white/60 backdrop-blur-sm shadow-lg ring-1 ring-black/5">
            <p className="text-xl font-bold text-slate-700 sm:text-2xl">
              {project.name}
            </p>
            {project.stack && (
              <>
                <p className="text-sm font-medium uppercase tracking-widest text-orange-500">
                  {" "}
                  {project.stack.join(", ")}
                </p>
              </>
            )}
          </div>

          <div className=" flex justify-center gap-1 mt-4 isolate aspect-video  h-10 p-1 rounded-md bg-white/60 backdrop-blur-sm shadow-lg ring-1 ring-black/5">
            <a
              href={project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub repository" 
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200" 
              >
              <RiGithubFill size={32} />
            </a>
            { project.livePreview &&

              <a
              href={project.livePreview}
              target="_blank"
              rel="noopener noreferrer"
              title="LivePage"
              aria-label="Live page" 
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200" 
              >
              <MdPreview size={32} />
            </a>
              }
              </div>

          <div className="mt-4 sm:mt-4 lg:mt-4">
            <div className="isolate aspect-video w-full h-40 p-2 rounded-md bg-white/60 backdrop-blur-sm shadow-lg ring-1 ring-black/5 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm  text-slate-700 font-medium line-clamp-[7]">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
