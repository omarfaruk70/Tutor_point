import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiCalendar} from "react-icons/ci";
import profile from "/profile.png";

const Survey = () => {
  var settings = {
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
      <h2 className="text-2xl font-bold py-6 px-5">Post Survey</h2>
      <p className="font-bold mx-8">How was your session?</p>
      <div className="slider-container px-4">
        <Slider {...settings}>
            <div className="border-2 slick-slide rounded-lg">
            <div className="flex justify-between px-6 py-3">
              <div>
                <h2 className="text-2xl">Mathematic</h2>
                <p>Shapes</p>
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
                  <CiCalendar /> Yesterday
                </div>
              </div>
              <p className="bg-gray-400 text-white px-5 py-2 rounded-full">
                Fill Survey
              </p>
            </div>
          </div>
          <div className="border-2 slick-slide rounded-lg">
            <div className="flex justify-between px-6 py-3">
              <div>
                <h2 className="text-2xl">Mathematic</h2>
                <p>Theorema Pytagoras 2</p>
              </div>
              <div className="h-12 w-12 border-4 text-center rounded-full flex justify-center items-center bg-white ">
                    <h2 className="text-2xl font-bold text-slate-400">TR</h2>
                  </div>
            </div>
            <div className="flex justify-between items-center px-6 py-4">
              <div className="gap-3 px-3 py-2 rounded-lg ">
                <div className="flex items-center gap-3">
                  <CiCalendar /> 3 Days Ago
                </div>
              </div>
              <p className="bg-transparent text-green-500 px-5 py-2 rounded-full">
                Filled. Thanks
              </p>
            </div>
          </div>
          <div className="border-2 slick-slide rounded-lg">
            <div className="flex justify-between px-6 py-3">
              <div>
                <h2 className="text-2xl">Mathematic</h2>
                <p>Theorema Pytagoras 2</p>
              </div>
              <div className="h-12 w-12 border-4 text-center rounded-full flex justify-center items-center bg-white ">
                    <h2 className="text-2xl font-bold text-slate-400">TR</h2>
                  </div>
            </div>
            <div className="flex justify-between items-center px-6 py-4">
              <div className="gap-3 px-3 py-2 rounded-lg ">
                <div className="flex items-center gap-3">
                  <CiCalendar /> Last Week
                </div>
              </div>
              <p className="bg-transparent text-green-500 px-5 py-2 rounded-full">
                Filled. Thanks
              </p>
            </div>
          </div>
          <div className="border-2 slick-slide rounded-lg">
            <div className="flex justify-between px-6 py-3">
              <div>
                <h2 className="text-2xl">Mathematic</h2>
                <p>Theorema Pytagoras 2</p>
              </div>
              <div className="h-12 w-12 border-4 text-center rounded-full flex justify-center items-center bg-white ">
                    <h2 className="text-2xl font-bold text-slate-400">TR</h2>
                  </div>
            </div>
            <div className="flex justify-between items-center px-6 py-4">
              <div className="gap-3 px-3 py-2 rounded-lg ">
                <div className="flex items-center gap-3">
                  <CiCalendar /> Last Week
                </div>
              </div>
              <p className="bg-transparent text-green-500 px-5 py-2 rounded-full">
                Filled. Thanks
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Survey;
