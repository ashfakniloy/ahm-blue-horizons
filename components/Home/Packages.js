import { packagesData } from "../../data/packagesData";
import PackageCard from "../Cards/PackageCard";

function Packages() {
  return (
    <div id="packages" className="py-10 lg:py-[100px] bg-gray-100">
      <div className="flex flex-col items-center container">
        <div className="text-center">
          <h1 className="text-3xl lg:text-[40px] font-bold  text-custom-blue4">
            Popular Packages
          </h1>
          <p className="mt-2 lg:mt-5 lg:w-[620px] text-custom-gray text-base lg:text-lg">
            Unveil a world of unique travel packages. Each package is a gateway
            to unforgettable experiences, blending stunning destinations,
            handpicked stays, and captivating activities.
          </p>
        </div>

        <div className="mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
          {packagesData.map((packageList, i) => (
            <PackageCard key={i} packageList={packageList} />
          ))}
          {/* {servicesData.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))} */}
          {/* <div className="bg-slate-300 h-[340px] w-[340px] rounded"></div>
          <div className="bg-slate-300 h-[340px] w-[340px] rounded"></div>
          <div className="bg-slate-300 h-[340px] w-[340px] rounded"></div>
          <div className="bg-slate-300 h-[340px] w-[340px] rounded"></div>
          <div className="bg-slate-300 h-[340px] w-[340px] rounded"></div>
          <div className="bg-slate-300 h-[340px] w-[340px] rounded"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Packages;
