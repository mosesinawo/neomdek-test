 

function VehiclesCalendarTable() {
  return (
    <div className="grid grid-cols-4 w-full bg-white h-full text-sm rounded-ss-md">
      <div className="col-span-1 divide-y-[2px]">
        <h4 className="p-4 text- border-b border-[#015591] font-semibold ">
          Vehicles
        </h4>
        <div className="p-4">
          <div className="flex gap-2">
            <img
              src="/imgs/car.jpeg"
              alt="driver"
              className="w-28 h-20 object-cover object-center"
            />
            <div>
              <p className="font-semibold text-base">Lexus GLS 500</p>
              <span>Mid size sedan</span>
            </div>
          </div>
        </div>
        <div className="p-4">
        <div className="flex gap-2">
            <img
              src="/imgs/car.jpeg"
              alt="driver"
              className="w-28 h-20 object-cover object-center"
            />
            <div>
              <p className="font-semibold text-base">Lexus GLS 500</p>
              <span>Mid size sedan</span>
            </div>
          </div>
        </div>
        <div className="p-4">
        <div className="flex gap-2">
            <img
              src="/imgs/car.jpeg"
              alt="driver"
              className="w-28 h-20 object-cover object-center"
            />
            <div>
              <p className="font-semibold text-base">Lexus GLS 500</p>
              <span>Mid size sedan</span>
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
            <p className="font-semibold text-[.85rem]">Wisdom Ademola</p>
            <p className="text-[.7rem]">Clinton</p>
            <p className="text-[.7rem]">British petroleum</p>
          </div>
          <div className="bg-[#c6dafb] p-2 rounded-lg">
            <p className="font-semibold text-[.85rem]">David Jamse</p>
            <p className="text-[.7rem]">Charlse</p>
            <p className="text-[.7rem]">Dangote Limited</p>
          </div>
          <div className="bg-[#c6dafb] col-start-4 col-span-3 p-2 rounded-lg">
            <p className="font-semibold text-[.85rem]">Charlse Erikson</p>
            <p className="text-[.7rem]">Charlse</p>
            <p className="text-[.7rem]">Dangote Limited</p>
          </div>
        </div>

        <div className="grid grid-cols-6 p-4 gap-2">
          <div className="bg-[#c6dafb] col-start-2 col-span-3 p-2 rounded-lg">
            <p className="font-semibold text-[.85rem]">Charlse Erikson</p>
            <p className="text-[.7rem]">Dempay</p>
            <p className="text-[.7rem]">Individual</p>
          </div>
          <div className="bg-[#c6dafb] col-start-6  p-2 rounded-lg">
            <p className="font-semibold text-[.85rem]">Charlse Erikson</p>
            <p className="text-[.7rem]">Charlse</p>
            <p className="text-[.7rem]">Dangote Limited</p>
          </div>
        </div>

        <div className="grid grid-cols-6 p-4 gap-2">
          <div className="bg-[#c6dafb] col-span-4 p-2 rounded-lg">
            <p className="font-semibold text-[.85rem]">Frank Emeka</p>
            <p className="text-[.7rem]">Charlse</p>
            <p className="text-[.7rem]">Dangote Limited</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehiclesCalendarTable;
