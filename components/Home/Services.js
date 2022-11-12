import { servicesData } from "../../data/servicesData";
import ServiceCard from "../Cards/ServiceCard";

function Services() {
  return (
    <div
      id="services"
      className="py-10  lg:py-[100px] bg-white lg:min-h-[840px]"
    >
      <div className="flex flex-col items-center container">
        <div className="text-center">
          <h1 className="text-3xl lg:text-[40px] font-bold  text-custom-blue4">
            Our Services
          </h1>
          <p className="mt-2 lg:mt-5 lg:w-[620px] text-custom-gray text-base lg:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quasi
            corrupti iste sunt. Officia magnam nemo nobis illum exercitationem
            temporibus.
          </p>
        </div>

        <div className="mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7">
          {servicesData.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
