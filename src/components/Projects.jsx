const Projects = ({ project }) => {
  return (
    <>
      <div href="#" className="group relative bg-black ">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-8  ">
          <div className="isolate aspect-video w-full h-16 p-1 rounded-sm bg-white/20 shadow-lg ring-1 ring-black/5">

          <p className="text-xl font-bold text-white sm:text-2xl">
            {project.name}
          </p>
          {project.stack && (
            <>
              <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                {" "}
                {project.stack.join(", ")}
              </p>
            </>
          )}
          </div>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm  text-white line-clamp-3 ">
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
