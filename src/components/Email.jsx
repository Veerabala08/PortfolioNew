import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const EmailForm = () => {
  const {register, handleSubmit, formState:{errors, isSubmitting}, reset} = useForm();

  const onSubmit = async(data)=>{
    try{

        const response = await emailjs.send(
          // credentials
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            data,
            import.meta.env.VITE_EMAILJS_USER_ID
          );
        console.log("success", response.text)
        Swal.fire({
          title: "success",
          text: "Email sent successfully.",
          icon: "success",
          confrimButtonText:'Ok',
          timer: 1500
        });
        reset();
     }
     catch(error){
        console.log("error", error.text)
        Swal.fire({
          title: "Oops...",
          text: "Failed to send email. Please try again.",
          icon: "error",
          confrimButtonText:'Ok'
        });
     }
  }
  return (
    <div className="mt-4 flex flex-col bg-black rounded-lg p-4 lg:w-1/2 md:w-1/2 [margin-inline:auto]">

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-4">
          <input
            {...register("name",{
                required:"name is required"
            })}
            placeholder="Enter name"
            className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
            type="text"
            id="title"
          />
        </div>
          {errors.name && <div className="text-red-600 text-left">{errors.name.message}</div>}

        <div className="mt-4">
          <input
            {...register("subject",{
                required:"subject is required"
            })}
            placeholder="Subject"
            className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
            id="description"
            type="text"
          />
        </div>
        {errors.subject && <div className="text-red-600 text-left">{errors.subject.message}</div>}
        <div className="mt-4 flex flex-row space-x-2">
          <div className="flex-1">
            <input
             {...register("email", {
                required: "email is required",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Invalid email address"
                },
                validate: (value) => value.includes("@") || "Email must include @"
              })}
              placeholder="Enter the email id"
              className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
              id="emotions"
            />
          </div>
        </div>
          {errors.email && <div className="text-red-600 text-left">{errors.email.message}</div>}

        <div className="mt-4">
          <textarea
             {...register("message", {
                required: "message is required",
                minLength: {
                  value: 50,
                  message: "message must be less than 50 characters"
                }
              })}
            placeholder="Your Message"
            className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1 h-36"
            id="story-output"
          />
        </div>
        {errors.message && <div className="text-red-600 text-left">{errors.message.message}</div>}
        <div>
          <button
            disabled={isSubmitting}
            className="inline-block  rounded border border-current px-8 py-2 text-sm font-medium text-indigo-600 transition hover:-rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500"
            href="#"
          >
            {isSubmitting ? "Sending": "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
