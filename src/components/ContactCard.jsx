// import React from "react";

// const ContactCard = (props) => {
//   export default function ContactCard({ icon, title, value, link }) {
//     return (
//       <a
//         href={link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="group p-6 rounded-2xl bg-[#f7f8ff]
//       shadow-[inset_6px_6px_12px_#e2e4ff,inset_-6px_-6px_12px_#ffffff]
//       hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(135,138,230,0.25)]
//       transition-all duration-300"
//       >
//         <div className="flex items-center gap-5">
//           <div className="p-4 rounded-xl bg-[#878ae6]/10 text-[#878ae6]">
//             {icon}
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
//             <p className="text-gray-500 text-sm group-hover:text-[#878ae6]">
//               {value}
//             </p>
//           </div>
//         </div>
//       </a>
//     );
//   }
// };

// export default ContactCard;

import React from 'react'

const ContactCard = ({ icon, title, value, link }) => {
  return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group p-6 rounded-2xl bg-[#f7f8ff]
      shadow-[inset_6px_6px_12px_#e2e4ff,inset_-6px_-6px_12px_#ffffff]
      hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(135,138,230,0.25)]
      transition-all duration-300"
      >
        <div className="flex items-center gap-5">
          <div className="p-4 rounded-xl bg-[#878ae6]/10 text-[#878ae6]">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-500 text-sm group-hover:text-[#878ae6]">
              {value}
            </p>
          </div>
        </div>
      </a>
    );
}

export default ContactCard
