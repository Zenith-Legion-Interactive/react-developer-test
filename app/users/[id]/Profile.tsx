import Image from "next/image";
import { format } from 'date-fns';

export default function Profile({ userDetails } :
    {
      userDetails: {
        id: string;
        picture: string;
        title: string;
        firstName: string;
        lastName: string;
        gender: string;
        email: string;
        phone: string;
        dateOfBirth: string;
        location: {
          street: string;
          city: string;
          state: string;
          country: string;
        };
        registerDate: string;
      };
    }
  ) {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="border rounded border-gray-600 p-4">

          {/* ID */}
          <div className="text-1xl font-bold text-center my-2">{userDetails.id}</div>

          {/* User Details - TOP */}
          <div className="flex mt-10 mb-5">
            {/* Image */}
            <div>
              <Image 
                src={userDetails.picture}
                alt="User Image"
                width={100}
                height={100}
                quality={100}
                />
            </div>

            {/* User Details - TOP */}
            <div className="flex flex-col justify-center m-2">
              {/* Name */}
              <div className="font-bold flex">
                {userDetails.title} {userDetails.firstName} {userDetails.lastName}
                {/* Gender Pill */}
                { ( (userDetails.gender).toLowerCase() === 'male' ) ?
                  <span className="text-xs p-1 mx-2 rounded bg-blue text-white">male</span> :
                  <span className="text-xs p-1 mx-2 rounded bg-pink">female</span>
                }
                
              </div>
              <div className="text-sm">{userDetails.email}</div>
              <div className="text-sm">{userDetails.phone}</div>
              <div className="text-sm">Date of Birth: <span className="font-bold">{format(new Date(userDetails.dateOfBirth), 'MMM d, yyyy')}</span></div>
            </div>
          </div>

          {/* User Details - BOTTOM */}
          <div className="my-2 flex border rounded border-gray-600">
            <div className="flex items-center border-r-2 border-gray-600 px-2 py-1">
              <span>Location</span>
            </div>
            <div className="p-2">

              { !userDetails.location ? '-' :
                <>
                  <div>{userDetails.location.street}</div>
                  <div>{userDetails.location.city}, {userDetails.location.state}</div>
                  <div>{userDetails.location.country}</div>
                </>
              }


            </div>
          </div>

          <div className="my-2 flex border rounded border-gray-600">
            <div className="flex items-center border-r-2 border-gray-600 px-2 py-1">
              <span>Register Date</span>
            </div>
            <div className="p-2">
              {format(new Date(userDetails.registerDate), 'yyyy/MM/dd - hh:mm b')}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}