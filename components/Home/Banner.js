import Image from "next/image";
// import Image from "next/legacy/image";
import BannerImage from "../../public/images/ahm-blue-horizons-banner.jpg";
import { Link } from "react-scroll";

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
        <div className="lg:w-[615px] space-y-5">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Journey in Comfort, Explore with Confidence
          </h1>
          <p className="lg:text-lg  leading-normal tracking-wide text-slate-100">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            quaerat sapiente maxime magni pariatur corporis. Consequuntur
            sapiente ratione velit libero? */}
            Welcome to AHM Blue Horizons. Explore seamless air travel with a
            touch of luxury. Discover exceptional services, curated packages,
            and a team dedicated to crafting your dream journey.
          </p>
          <div className="">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-105}
              duration={500}
              // activeClass="border-transparent"
            >
              <button
                type="button"
                className="mt-5 px-9 py-3 font-semibold rounded-md text-white bg-purple-800 hover:bg-purple-900 transition duration-500"
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
