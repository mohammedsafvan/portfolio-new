import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineGoogle
} from "react-icons/ai";

export const buttonData = [
  {
    id: 1,
    fromColor: "from-[#D16BA5]",
    viaColor: "via-[#86A8E7]",
    toColor: "to-[#5FFBF1]",
    icon: <AiOutlineMail size={25} />,
    text: "Email",
    url: "mailto:mohammedsafvan.me@gmail.com",
  },
  {
    id: 2,
    fromColor: "from-[#3f5efb]",
    viaColor: "via-[#9f52b2]",
    toColor: "to-[#fc466b]",
    text: "LinkedIn",
    icon: <AiOutlineLinkedin size={25} />,
    url: "https://www.linkedin.com/in/mohammed-safvan-7022b21a3/",
  },
  {
    id: 3,
    fromColor: "from-[#833ab4]",
    viaColor: "via-[#fd1d1d]",
    toColor: "to-[#fcb045]",
    icon: <AiOutlineGoogle size={25} />,
    url: "https://g.dev/mohammedsafvan",
    text: "Google Dev",
  },
  {
    id: 4,
    fromColor: "from-[#eeaeca]",
    viaColor: "via-[#54409d]",
    toColor: "to-[#94bbe9]",
    text: "Github",
    icon: <AiOutlineGithub size={25} />,
    url: "https://github.com/mohammedsafvan/",
  },
];
