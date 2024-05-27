import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";

const WorkFlow = (props) => {
    const checklistItems = [
        {
          title: "Code merge made easy",
          description:
            "Track the performance of your VR apps and gain insights into user behavior.",
        },
        {
          title: "Review code without worry",
          description:
            "Track the performance of your VR apps and gain insights into user behavior.",
        },
        {
          title: "AI Assistance to reduce time",
          description:
            "Track the performance of your VR apps and gain insights into user behavior.",
        },
        {
          title: "Share work in minutes",
          description:
            "Track the performance of your VR apps and gain insights into user behavior.",
        },
      ];

  return(
    <div className="mt-20">
    <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 mb-20 tracking-wide">
      Accelerate your{" "}
      <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
        coding workflow.
      </span>
    </h2>
    <div className="flex flex-wrap justify-center">
      <div className="p-2 w-full lg:w-1/2">
        <img src={codeImg} alt="Coding" />
      </div>
      <div className="pt-12 w-full lg:w-1/2">
        {checklistItems.map((e, index) => (
          <div key={index} className="flex mt-20 mb-10">
            <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
              <CheckCircle2 />
            </div>
            <div>
              <h5 className="mt-1 mb-2 text-xl">{e.title}</h5>
              <p className="text-md text-neutral-500">{e.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default WorkFlow;
