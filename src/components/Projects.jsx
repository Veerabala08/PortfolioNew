const Projects = ({ project }) => {
  return (
    <>
      <div href="#" className="group relative bg-black rounded-md ">
        <img
          alt=""
          src="https://raw.githubusercontent.com/Veerabala08/nexcen/main/public/nexcen.png"
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

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="isolate aspect-video w-full h-16 p-1 rounded-md bg-white/60 backdrop-blur-sm shadow-lg ring-1 ring-black/5 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm  text-slate-700 font-medium line-clamp-3 ">
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
