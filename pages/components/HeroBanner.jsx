import { scrollTo } from "@lib/helper";
import { useRef } from "react";
import { ImSearch } from "react-icons/im";
import SimpleImageSlider from "react-simple-image-slider";
import Wrapper from "./Wrapper";
import { useFollowPointer } from "./useFollowPointer";

const HeroBanner = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  function handleChange() {
    return;
  }
  const sliderImages = [
    {
      url: "/wallpaper/Slide1.jpg",
    },
    {
      url: "/wallpaper/Slide2.jpg",
    },
    {
      url: "/wallpaper/Slide3.jpg",
    },
    {
      url: "/wallpaper/Slide4.jpg",
    },
    {
      url: "/wallpaper/Slide5.jpg",
    },
  ];

  return (
    <>
      <main>
        <div
          id="hero"
          className="w-full h-[100vh] relative bg-[#111111] overflow-auto"
        >
          <Wrapper>
            {/* NAVBAR START */}
            <div className="hidden md:flex items-center justify-center mt-[40px] 2xl:mt-[63px] relative">
              <ul className="flex gap-20 text-sm 2xl:text-sm">
                <li
                  className="cursor-pointer px-5 py-2  hover:bg-slate-300 transistion active:scale-90 rounded-lg"
                  onClick={() => scrollTo("home")}
                >
                  Home
                </li>
                <li
                  className="cursor-pointer px-5 py-2  hover:bg-slate-300 transistion active:scale-90 rounded-lg"
                  onClick={() => scrollTo("about")}
                >
                  About Us
                </li>
                <li
                  className="cursor-pointer px-5 py-2  hover:bg-slate-300 transistion active:scale-90 rounded-lg"
                  onClick={() => scrollTo("patnership")}
                >
                  Patnership
                </li>
                <li
                  className="cursor-pointer px-5 py-2  hover:bg-slate-300 transistion active:scale-90 rounded-lg"
                  onClick={() => scrollTo("location")}
                >
                  Location
                </li>
                <li
                  className="cursor-pointer px-5 py-2  hover:bg-slate-300 transistion active:scale-90 rounded-lg"
                  onClick={() => scrollTo("contact")}
                >
                  Contact
                </li>
              </ul>
            </div>
            <div className="hidden md:flex items-center justify-evenly mt-[40px] 2xl:mt-[63px] relative">
              <div className="flex">Welcome user</div>

              <div className="flex relative wrapper">
                <ImSearch
                  style={{ margin: "12px", fontSize: "2rem", height: "25" }}
                />

                <input
                  type="text"
                  size="50"
                  className="input rounded-lg"
                  value={""}
                  placeholder="   Search"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="hidden md:flex justify-center mt-[40px] 2xl:mt-[63px] relative">
              <SimpleImageSlider
                style={{ marginLeft: "65px" }}
                width={1125}
                height={650}
                images={sliderImages}
                showBullets={true}
                showNavs={false}
                autoPlay={true}
                onStartSlide={(index, length) => {
                  return;
                }}
                autoPlayDelay={5}
              />
            </div>
          </Wrapper>
        </div>
      </main>
    </>
  );
};

export default HeroBanner;
