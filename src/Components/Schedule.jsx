import { CiCalendar } from "react-icons/ci";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { CiCirclePlus, CiTrash } from "react-icons/ci";

const Schedule = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [addMore, setAddMore] = useState([{ id: Date.now() }]);
  const getHours = () => {
    const hours = [];
    for (let i = 1; i <= 12; i++) {
      const formattedHour = i < 10 ? `0${i}` : `${i}`;
      hours.push(
        <option key={i} value={i}>
          {formattedHour}
        </option>
      );
    }
    return hours;
  };
  const getMins = () => {
    const mins = [];
    for (let i = 0; i <= 59; i++) {
      const formattedMin = i < 10 ? `0${i}` : `${i}`;
      mins.push(
        <option key={i} value={i}>
          {formattedMin}
        </option>
      );
    }
    return mins;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleDuplicate = () => {
    setAddMore([...addMore, { id: Date.now() }]);
  }
  const handleRemove = (id) => {
    setAddMore(addMore.filter((div) => div.id !== id));
  }

  return (
    <div>
      <h3 className="text-white font-bold bg-green-400 px-4 py-2 max-w-32">
        Messages
      </h3>
      <div className="m-8 font-bold flex items-center gap-4 h-12 max-w-80 px-4 rounded-lg cursor-pointer">
        <button
          className="btn text-green-600 bg-base-100"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <CiCalendar className="text-4xl font-bold" />
          Schedule Session
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box md:h-[500px] md:max-w-7xl">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="flex flex-col md:flex-row justify-around">
              <div>
                <h3 className="font-bold text-lg">
                  Schedule Sessions ( 45 Minutes )
                </h3>
                <p className="mb-8">
                  Choose your availability to have sessions with{" "}
                  <strong>Charlie</strong>
                </p>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  inline
                />
              </div>
              <div>
                <p>Select the available hour</p>
                <h2 className="text-sm mt-6">{formatDate(startDate)}</h2>
                {addMore?.map((elem) => (
                  <div
                    key={elem.id}
                    className="willDuplicate flex flex-col md:flex-col lg:flex-row gap-3 lg:gap-5 items-center"
                  >
                    <div className="flex gap-3 mt-2 border-2 px-3 rounded-lg">
                      <div className="hours">
                        <select defaultValue={"DEFAULT"} name="" id="">
                          <option disabled value={"DEFAULT"}>
                            Hour
                          </option>
                          {getHours()}
                        </select>
                      </div>
                      <div className="mins">
                        <select defaultValue={"Mins"} name="" id="">
                          <option disabled value="Mins">
                            Mins
                          </option>
                          {getMins()}
                        </select>
                      </div>
                      <div className="AM/PM">
                        <select defaultValue={"AM/PM"}>
                          <option disabled value="AM/PM">
                            AM/PM
                          </option>
                          <option value="AM">AM</option>
                          <option value="PM">PM</option>
                        </select>
                      </div>
                    </div>
                    <h2> To </h2>
                    <div className="flex gap-3 mt-2 border-2 px-3 rounded-lg">
                      <div className="hours">
                        <select defaultValue={"DEFAULT"} name="" id="">
                          <option disabled value={"DEFAULT"}>
                            Hour
                          </option>
                          {getHours()}
                        </select>
                      </div>
                      <div className="mins">
                        <select defaultValue={"Mins"} name="" id="">
                          <option disabled value="Mins">
                            Mins
                          </option>
                          {getMins()}
                        </select>
                      </div>
                      <div className="AM/PM">
                        <select defaultValue={"AM/PM"}>
                          <option disabled value="AM/PM">
                            AM/PM
                          </option>
                          <option value="AM">AM</option>
                          <option value="PM">PM</option>
                        </select>
                      </div>
                    </div>
                    <CiTrash onClick={() => handleRemove(elem.id)} className="text-xl mt-2 text-red-500 flex justify-center items-center" />
                  </div>
                ))}
                <div
                  onClick={handleDuplicate}
                  className="w-full bg-emerald-800 text-white rounded-full flex justify-center items-center p-1 my-2"
                >
                  <CiCirclePlus className="text-3xl font-bold rounded-full mr-3" />
                  Add More
                </div>
              </div>
            </div>
            <div className="flex gap-6 px-10 mt-5">
              <button className="btn w-1/2 bg-red-500 text-white">
                Cancel
              </button>
              <button className="btn w-1/2 bg-emerald-800 text-white">
                Save
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Schedule;
