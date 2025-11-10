import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useForm, ValidationError } from "@formspree/react";
import graduationphoto from "./../assets/img/graduationphoto.jpg";

const Contact = () => {
  const [state, handleSubmit] = useForm("myzlygjy");

  return (
    <section id="contact" className="mt-25 mb-15">
      <h1 className="text-3xl text-center">Contact</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col justify-center items-center gap-10 relative sm:p-10 h-130 py-10 px-5">
          <img
            className="w-[275px] bg-gray-500 shadow-[15px_10px_15px_rgba(107,114,128,0.5)] hover:translate-y-1 hover:transition-all"
            src={graduationphoto}
            alt="Graduation Photo"
          />
          <ul className="flex gap-4 text-center">
            <li>
              <MdEmail className="size-7 hover:translate-y-1 hover:transition-all cursor-pointer" />
            </li>
            <li>
              <FaWhatsappSquare className="size-7 hover:translate-y-1 hover:transition-all cursor-pointer" />
            </li>
            <li>
              <FaLinkedin className="size-7 hover:translate-y-1 hover:transition-all cursor-pointer" />
            </li>
            <li>
              <FaGithubSquare className="size-7 hover:translate-y-1 hover:transition-all cursor-pointer" />
            </li>
            <li>
              <FaInstagramSquare className="size-7 hover:translate-y-1 hover:transition-all cursor-pointer" />
            </li>
          </ul>
        </div>
        <div className="flex justify-center text-center h-130 hover:-translate-y-1 transition-all">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 bg-card p-10 rounded-2xl border"
          >
            <div className="flex flex-col items-start justify-center">
              <label htmlFor="">Full Name</label>
              <input
                className="border p-2 w-75 md:w-[500px] bg-background"
                name="from_name"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="">Email</label>
              <input
                className="border p-2 w-75 md:w-[500px] bg-background"
                name="from_email"
                type="email"
                placeholder="Email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="">Message</label>
              <textarea
                className="border p-2 w-75 h-50 md:w-[500px] bg-background resize-none"
                name="message"
                placeholder="Message..."
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              className="border w-75 md:w-[500px] h-10 rounded bg-background hover:cursor-pointer hover:bg-gray-800 hover:text-white transition-all"
              type="submit"
            >
              {state.succeeded
                ? "Sent ✅"
                : state.submitting
                ? "Sending..."
                : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
