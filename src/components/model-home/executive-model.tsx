import executiveimg from "@/assets/executive/team4.jpg";
import executiveimg0 from "@/assets/executive/team1.jpg";
import executiveimg1 from "@/assets/executive/team2.jpg";
import executiveimg2 from "@/assets/executive/team3.jpg";

import altExecutive from "@/assets/executive/exe-1.jpeg";
import altExecutive0 from "@/assets/executive/exe-2.jpeg";
import altExecutive1 from "@/assets/executive/exe-3.jpeg";

type ExecutiveAlises = {
  user_name: String;
  title: String;
  uniqueID: String;
  user_image: string;
  About_user?: String;
};

export const ExecutiveDetails: ExecutiveAlises[] = [
  {
    title: "Board Chairman",
    uniqueID: "head",
    user_image: altExecutive.src,
    user_name: "Obi Sunday",
    About_user: "Not givent",
  },

  {
    title: "Executive Director",
    uniqueID: "bc",
    user_image: altExecutive0.src,
    user_name: "Peace winder",

    About_user: "No",
  },

  {
    title: "CEO / Co-Founder",
    uniqueID: "ED",
    user_image: altExecutive1.src,
    user_name: "Henry Vans",
    About_user: "Not givent",
  },
];
