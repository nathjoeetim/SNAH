import Image from "next/image";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import watchimg from "@/assets/fitness-watch.jpg";

function PropertyComponent() {
  return (
    <Card className=" dark:bg-white p-3 rounded-lg rounded-tl-[80px] w-full max-w-[320px] mx-auto cursor-pointer shadow-lg hover:shadow-2xl mb-2 transition">
      <Image
        src={watchimg.src}
        height={100}
        width={300}
        alt="property_image  "
        className="mb-4 rounded-tl-[80px] "
      />
      <div className="flex gap-x-2 text-sm mb-2">
        <div className="text-white bg-green-500 rounded-full px-3">
          Smart Watch
        </div>
        <div className="text-white bg-indigo-500 px-3 rounded-full">Gold</div>
      </div>
      <div className="text-slate-800 text-xs font-semibold max-w-fit mb-1">
        Atlanta, USA
      </div>
      <div className="text-white bg-green-500 px-3 rounded-full mb-4">
        Available
      </div>

      <div className="flex flex-row justify-between items-center mb-2">
        <span className="font-semibold text-green-500">$300</span>
        <Button
          variant="outline"
          className="py-1 text-slate-800 dark:text-white "
        >
          Buy
        </Button>
      </div>
    </Card>
  );
}

export default PropertyComponent;
