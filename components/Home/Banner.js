import Image from "next/image";
// import Image from "next/legacy/image";
import BannerImage from "../../public/images/ahm-blue-horizons-banner.jpg";

function Banner() {
  return (
    <div id="home" className="relative h-screen overflow-hidden bg-black">
      {/* <div className="relative w-full h-full opacity-50">
        <Image
          src={BannerImage}
          alt="banner image"
          priority
          layout="fill"
          objectFit="cover"
        />
      </div> */}
      <div className="relative w-full h-full opacity-50">
        <Image
          src={BannerImage}
          alt="banner image"
          priority
          fill
          className="object-cover"
          // className="object-cover lg:object-fill object-left"
        />
      </div>
      <div className="absolute inset-0 container flex items-center text-white">
        <div className="lg:w-[615px] space-y-7">
          <h1 className="text-4xl font-semibold">AHM Blue Horizons Title</h1>
          <p className="text-xl font-light leading-normal tracking-wide text-slate-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            quaerat sapiente maxime magni pariatur corporis. Consequuntur
            sapiente ratione velit libero?
          </p>
          <div className="">
            <button
              type="button"
              className="mt-5 px-9 py-3 font-semibold text-white bg-purple-800 hover:bg-purple-900 transition duration-500"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
