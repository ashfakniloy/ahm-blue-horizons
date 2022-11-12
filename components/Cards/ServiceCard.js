import Image from "next/image";

function ServiceCard({ service }) {
  const { name, description, image } = service;

  return (
    <div className="h-[340px] w-[340px] rounded relative overflow-hidden shadow-md hover:shadow-lg group  transition-all duration-500">
      <div className="group-hover:scale-110 transition-all duration-500">
        <Image src={image} alt={name} priority />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white p-5 text-center">
        <h3 className="font-bold text-xl tracking-widest text-custom-blue4">
          {name}
        </h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
