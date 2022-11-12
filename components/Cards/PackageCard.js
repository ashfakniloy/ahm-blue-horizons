import Image from "next/image";
import { FaRegClock } from "react-icons/fa";

function PackageCard({ packageList }) {
  const { name, duration, price, image } = packageList;

  return (
    <div className="h-[300px] max-w-[380px] lg:h-[400px] lg:max-w-[480px] rounded relative overflow-hidden shadow-md hover:shadow-lg group  transition-all duration-500">
      <div className="group-hover:scale-110 transition-all duration-500">
        <Image src={image} alt={name} priority />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white p-5">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg lg:text-xl tracking-widest text-custom-blue">
            {name}
          </h3>
          <div className="bg-cyan-500 text-white px-2 py-1 text-sm font-bold rounded">
            $ {price}
          </div>
        </div>

        <div className="mt-2 text-sm text-gray-500 flex gap-2 items-center">
          <FaRegClock /> <p>{duration} Days Trip</p>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;
