 

function CalendarTable() {
  return (
    <div className="grid grid-cols-4 w-full bg-white border-[3px] border-stone-300 border-b-0 text-sm rounded-ss-md">
      <div className="col-span-1 divide-y-[2px]">
        <h4 className="p-4 text- border-b border-[#015591] font-semibold ">
          Drivers
        </h4>
        <div className="p-4">
          <div className="flex gap-2">
            <img
              src="/imgs/leo.jpg"
              alt="driver"
              className="w-28 h-20 object-cover object-center"
            />
            <div>
              <p className="font-semibold text-base">David james</p>
              <span>Senior driver</span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex gap-2">
            <img
              src="/imgs/leo.jpg"
              alt="driver"
              className="w-28 h-20 object-cover object-center"
            />
            <div>
              <p className="font-semibold text-base">Sunday Abu</p>
              <span>Standard driver</span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex gap-2">
            <img
              src="/imgs/leo.jpg"
              alt="driver"
              className="w-28 h-20 object-cover object-center"
            />
            <div>
              <p className="font-semibold text-base">Sunday Abu</p>
              <span>Standard driver</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 border-l border-gray-500">
        <div className="grid grid-cols-6 p-4 border-b border-[#015591] font-semibold text-center">
          <p>Sun 15</p>
          <p>Mon 17</p>
          <p>Tue 18</p>
          <p>Wed 19</p>
          <p>Thur 20</p>
          <p>Fri 21</p>
        </div>
        <div className="grid grid-cols-6 p-4 gap-2">
          <div className="bg-[#c6dafb] p-2 rounded-lg">
            <p className="font-semibold text-[.85rem]">Lexus GLS 500</p>
            <p className="text-[.7rem]">Clinton</p>
            <p className="text-[.7rem]">Standard driver</p>
          </div>
          <div className="bg-[#c6dafb] p-2 rounded-lg">
            <p className="font-semibold text-[.85rem]">Lexus GLS 500</p>
            <p className="text-[.7rem]">Charlse</p>
            <p className="text-[.7rem]">Dangote Limited</p>
          </div>
          <div className="bg-[#c6dafb] col-start-4 col-span-3 p-2 rounded-lg">
            <p className="font-semibold text-[.85rem]">Lexus GLS 500</p>
            <p className="text-[.7rem]">Charlse</p>
            <p className="text-[.7rem]">Dangote Limited</p>
          </div>
        </div>

        <div className="grid grid-cols-6 p-4 gap-2">
          <div className="bg-[#c6dafb] col-start-2 col-span-3 p-2 rounded-lg">
            <p className="font-semibold text-[.85rem]">Lexus GLS 500</p>
            <p className="text-[.7rem]">Charlse</p>
            <p className="text-[.7rem]">Dangote Limited</p>
          </div>
          <div className="bg-[#c6dafb] col-start-6  p-2 rounded-lg">
            <p className="font-semibold text-[.85rem]">Lexus GLS 500</p>
            <p className="text-[.7rem]">Charlse</p>
            <p className="text-[.7rem]">Dangote Limited</p>
          </div>
        </div>

        <div className="grid grid-cols-6 p-4 gap-2">
          <div className="bg-[#c6dafb] col-span-4 p-2 rounded-lg">
            <p className="font-semibold text-[.85rem]">Lexus GLS 500</p>
            <p className="text-[.7rem]">Charlse</p>
            <p className="text-[.7rem]">Dangote Limited</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarTable;
