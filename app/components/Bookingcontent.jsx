import { FaCalendarAlt, FaHome } from "react-icons/fa";

const bookingcontent = () => {
  return (
    <>
    <div className="!space-y-2">
      <div className="inline-flex items-center my-3 gap-2 bg-orange-100 px-4 py-2 rounded-full">
        <span className="text-orange-600 text-sm">✨</span>
        <span className="text-orange-600 font-medium text-sm">
          Free Quote Available
        </span>
      </div>
      <div className="text-gray-800 text-2xl lg:text-3xl font-bold mb-4">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 my-4">
        Request a Free
        <span className="text-orange-600"> Cleaning Quote</span> today!
      </h2>
      </div>
      <div className="text-gray-600 text-lg mb-6">
      <p className="text-gray-600 text-lg my-12">
        Simply provide us with your contact information along with your
        requirements, and we will get back to you within 24 hours.
      </p>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
            <FaCalendarAlt className="text-orange-600" />
          </div>
          <div>
            <div className="font-semibold text-gray-800">Same Day</div>
            <div className="text-sm text-gray-600">Booking Available</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
            <FaHome className="text-orange-600" />
          </div>
          <div>
            <div className="font-semibold text-gray-800">All Sizes</div>
            <div className="text-sm text-gray-600">We Clean Everything</div>
          </div>
        </div>
        <div>
          <div className="mt-2 w-full">
            <div className="flex items-center gap-2">
              {/* <span className="font-semibold">Note:</span> */}
            </div>
            <div className="text-gray-700">
              You will receive a verification call from the cleaner upon arrival
              and a confirmation upon booking.
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default bookingcontent;
