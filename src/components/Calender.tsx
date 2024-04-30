"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import CalendarTable from "./CalendarTable";
import VehiclesCalendarTable from "./CalendarTableVehicles";


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const ScheduleCalendar = () => {
  

  const [value, onChange] = useState<Value>(new Date());

  const [schedule, setSchedule] = useState("driver")
  const [duration, setDuration] = useState("week")
  console.log(schedule)

  return (
    <>
    <div className="border-[3px] border-stone-300 h-screen rounded-lg pt-5 pl-4">

      <div className="flex gap-20 items-center">
        <div className="flex gap-4">
          <h3 className="font-semibold">Schedule for:</h3>
          <select className="w-40 h-8 rounded-md border-[3px] border-stone-300"
          onChange={(e) => setSchedule(e.target.value)}>
            <option value="driver">Drivers</option>
            <option value="vehicles">Vehicles</option>
          </select>
        </div>

        <div className="flex items-center">
          <h3 className="font-semibold">View:</h3>
          <div className="flex cursor-pointer bg-white ml-5">
            <p className={`py-2 w-20 text-center font-bold transition-all cursor-pointer ${duration === "day" && "bg-[#015591] text-white"}`} onClick={() => setDuration("day")}>Day</p>
            <p className={`py-2 w-20 text-center font-bold transition-all cursor-pointer ${duration === "week" && "bg-[#015591] text-white"}`} onClick={() => setDuration("week")}>Week</p>
            <p className={`py-2 w-20 text-center font-bold transition-all cursor-pointer ${duration === "month" && "bg-[#015591] text-white"}`} onClick={() => setDuration("month")}>Month</p>
          </div>
        </div>
      </div>

      <div className="flex w-full gap-4 mt-5">
      <Calendar onChange={onChange} value={value} />

      <div className="w-full ">
        <p className="font-bold text-center">Feb 15 to 21, 2021</p>
        {schedule === "driver" && <CalendarTable/>}
        {schedule === "vehicles" && <VehiclesCalendarTable/>}
      </div>
    </div>
    </div>
    </>
  );
};

export default ScheduleCalendar;
