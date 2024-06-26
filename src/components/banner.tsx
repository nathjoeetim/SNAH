import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { FaLandmark } from "react-icons/fa";

function AgentBanner() {
  return (
    <div className="flex flex-col w-full ">
      <div
        className="flex flex-col-reverse lg:flex-row gap-2 justify-between items-center p-5 w-[96%] lg:w-[90%] h-fit lg:h-[500px] mx-auto mb-10 rounded-xl bg-[#F1FAFF] shadow-2xl"
        style={{
          backgroundImage:
            "url('https://www.familycarbuyers.com/wp-content/uploads/2023/01/24572776_sl_031520_28970_10-1-scaled.jpg')",
        }}
      >
        <div className=" flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-3 text-slate-700">
          <h1 className="text-4xl lg:text-[50px] font-semibold leading-none mb-3">
            Bacome a <span className="text-violet-700">Fitness Agent </span>{" "}
            today
          </h1>
          <p className="max-w-[600px] mb-8 items-center ">
            A great opportunity for you to paticipate in the grate wave of
            <span className="text-violet-700"> Health Tracking </span> with us.
            <span className="text-violet-700 ml-1">
              Sale Globally from the comform of your home.
            </span>
          </p>
          <span className="font-semibold text-2xl">
            Earn with Up to <span className="text-[gold]"> 15% - 20% </span>
            on sales profit
          </span>
          <Button
            variant={"outline"}
            className="bg-btn-color mt-12 text-white flex flex-row gap-1 rounded-xl hover:gap-4 text-xs font-semibold uppercase font-custom w-fit transition-all"
          >
            Get Started
          </Button>
        </div>
        <FaLandmark color="green" size={35} className="flex lg:hidden mb-11" />
      </div>
    </div>
  );
}

export default AgentBanner;
