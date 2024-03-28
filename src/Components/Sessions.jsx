import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SiGooglemeet } from "react-icons/si";
import { CiCalendar, CiClock1 } from "react-icons/ci";
import profile from "/profile.png";

const Sessions = () => {
  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        //   dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-white">
      <h2 className="text-2xl font-bold py-6 px-5">Upcomming Sessions</h2>
      <div className="slider-container px-4">
        <Slider {...settings}>
          <div
            className="bg-[#235940] text-white rounded-lg slick-slide"
          >
            <div className="flex justify-between px-6 py-3">
              <div>
                <h2 className="text-2xl">Mathematic</h2>
                <p>Theorema Pytagoras</p>
              </div>
              <div className="border-2 rounded-full p-2">
                <div className="border-2 rounded-full p-1">
                  <div className="h-12 w-12 border-4 text-center rounded-full flex justify-center items-center bg-white ">
                    <h2 className="text-2xl font-bold text-slate-400">TR</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center px-6 py-4">
              <div className="flex gap-3 items-center bg-gray-400 text-white px-3 py-2 rounded-lg ">
                <SiGooglemeet />
                <h2> Join Sessions</h2>
              </div>
              <p className="bg-gray-400 text-white px-5 py-2 rounded-full">
                Now
              </p>
            </div>
          </div>
          <div className="border-2 slick-slide rounded-lg">
            <div className="flex justify-between px-6 py-3">
              <div>
                <h2 className="text-2xl">Mathematic</h2>
                <p>Theorema Pytagoras 2</p>
              </div>
              <div className=" text-center flex justify-center items-center bg-white ">
                <img
                  className="h-12 w-12 border-4 text-center rounded-full"
                  src={profile}
                  alt="Profile"
                />
              </div>
            </div>
            <div className="flex justify-between items-center px-6 py-4">
              <div className="gap-3 px-3 py-2 rounded-lg ">
                <div className="flex items-center gap-3">
                  <CiCalendar /> Sunday. Oct 2{" "}
                </div>
                <div className="flex items-center gap-3">
                  <CiClock1 /> 3: 30 PM
                </div>
              </div>
              <p className="bg-gray-400 text-white px-5 py-2 rounded-full">
                In 2 Days
              </p>
            </div>
          </div>
          <div className="border-2 slick-slide rounded-lg">
            <div className="flex justify-between px-6 py-3">
              <div>
                <h2 className="text-2xl">Mathematic</h2>
                <p>Theorema Pytagoras 2</p>
              </div>
              <div className=" text-center flex justify-center items-center bg-white ">
                <img
                  className="h-12 w-12 border-4 text-center rounded-full"
                  src={profile}
                  alt="Profile"
                />
              </div>
            </div>
            <div className="flex justify-between items-center px-6 py-4">
              <div className="gap-3 px-3 py-2 rounded-lg ">
                <div className="flex items-center gap-3">
                  <CiCalendar /> Sunday. Oct 2{" "}
                </div>
                <div className="flex items-center gap-3">
                  <CiClock1 /> 3: 30 PM
                </div>
              </div>
              <p className="bg-gray-400 text-white px-5 py-2 rounded-full">
                In 2 Weeks
              </p>
            </div>
          </div>
          <div className="border-2 slick-slide rounded-lg">
            <div className="flex justify-between px-6 py-3">
              <div>
                <h2 className="text-2xl">Mathematic</h2>
                <p>Theorema Pytagoras 2</p>
              </div>
              <div className=" text-center flex justify-center items-center bg-white ">
                <img
                  className="h-12 w-12 border-4 text-center rounded-full"
                  src={profile}
                  alt="Profile"
                />
              </div>
            </div>
            <div className="flex justify-between items-center px-6 py-4">
              <div className="gap-3 px-3 py-2 rounded-lg ">
                <div className="flex items-center gap-3">
                  <CiCalendar /> Sunday. Oct 2{" "}
                </div>
                <div className="flex items-center gap-3">
                  <CiClock1 /> 3: 30 PM
                </div>
              </div>
              <p className="bg-gray-400 text-white px-5 py-2 rounded-full">
                In 2 Weeks
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Sessions;
