import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import ContactCard from "../components/ContactCard";

export default function Contact() {
  return (
    <div className="contact w-full h-auto flex items-start justify-center px-4 py-20">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.08)] p-10">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-semibold text-center text-[#878ae6]">
          Get in Touch
        </h1>
        <p className="text-center text-gray-500 mt-4 mb-14">
          Let’s connect — feedback, collaboration, or just say hi 👋
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 wrap-anywhere">
          {/* Email */}
          <ContactCard
            icon={<SiGmail />}
            title="Email"
            value="kumartushar15112003@gmail.com"
            link="mailto:kumartushar15112003@gmail.com"
          />

          {/* GitHub */}
          <ContactCard
            icon={<FaGithub />}
            title="GitHub"
            value="github.com/Tushar-rajjj"
            link="https://github.com/Tushar-rajjj"
          />

          {/* Instagram */}
          <ContactCard
            icon={<FaInstagram />}
            title="Instagram"
            value="@tushar.rajj"
            link="https://www.instagram.com/tushar.rajj?igsh=NGpqOXhjOTE5b25q"
          />

          {/* LinkedIn */}
          <ContactCard
            icon={<FaLinkedinIn />}
            title="LinkedIn"
            value="linkedin.com/in/tushar-kumar"
            link="https://www.linkedin.com/in/tushar-kumar-4355ba380/"
          />
        </div>
      </div>
    </div>
  );
}
