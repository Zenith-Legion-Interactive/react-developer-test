import Image from "next/image";

export default function UserDetails () {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="border rounded border-gray-600 p-4">

          {/* ID */}
          <div className="text-1xl font-bold text-center my-2">60d0fe4f5311236168a109e8</div>

          {/* User Details - TOP */}
          <div className="flex mt-10 mb-5">
            {/* Image */}
            <div>
              <Image 
                src="https://randomuser.me/api/portraits/med/women/56.jpg"
                alt="User Image"
                width={100}
                height={100}
                quality={100}
                />
            </div>

            {/* User Details - TOP */}
            <div className="flex flex-col justify-center m-2">
              <div className="font-bold flex">
                mrs2 Cecilie Mortensen <span className="text-xs p-1 mx-2 rounded bg-pink-400">female</span>
              </div>
              <div className="text-sm">cecilie.mortensen@example.com</div>
              <div className="text-sm">09123456789</div>
              <div className="text-sm">Date of Birth: <span className="font-bold">1/11/1990</span></div>
            </div>
          </div>

          <div className="my-2 flex border rounded border-gray-600">
            <div className="flex items-center border-r-2 border-gray-600 px-2 py-1">
              <span>Location</span>
            </div>
            <div className="p-2">
              <div>2563</div>
              <div>TranebÃ¦rvej123, Sundby2</div>
              <div>Syddanmark123, Denmark</div>
            </div>
          </div>

          <div className="my-2 flex border rounded border-gray-600">
            <div className="flex items-center border-r-2 border-gray-600 px-2 py-1">
              <span>Register Date</span>
            </div>
            <div className="p-2">
              1/12/1965
            </div>
          </div>
        </div>
      </div>
    </>
  );
}