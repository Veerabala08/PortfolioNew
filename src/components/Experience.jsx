import { experience } from "../../public/profileData";

function Experience() {
  const reversedExperience = [...experience].reverse();
  return (
    <>
      {/* <section className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden"> */}
        <div id="expreience" className=" w-full max-w-6xl mx-auto px-4 md:px-6 pt-24">
        <h2 className="[margin-top:-50px] text-2xl text-center font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Experience</h2>
          <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
            <div className="w-full max-w-3xl mx-auto">
              <div className="-my-6">
                {reversedExperience.map((item) => (
                  <div key={item.role} className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold  w-20 h-8 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 ">
                        {item.from} to {item.to}
                      </time>
                      
                      <div className="text-xl font-bold text-slate-900">
                        <p>
                          {item.role}
                          {console.log(item.role)}
                        </p> 
                      </div>
                    </div>
                    <div className="text-slate-500 text-justify">
                    {item.description.trim().split('\n').map((line, index) => (
                        line.trim() ? <li key={index}>{line.trim()}</li> : null
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      {/* </section> */}
    </>
  );
}

export default Experience;
