import { notFound } from "next/navigation";

import Profile from './Profile';

async function getUserDetails(userId: string) {

  const res = await fetch(`${process.env.API_URL}/user/${userId}`, {
    method: 'GET',
    headers: {
      'app-id': `${process.env.API_APP_ID}`,
    },
    // for NextJs
    next: {
      revalidate: 0,
    }
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    notFound();
  }

  return res.json();
}

export default async function UserDetails ({ params } : 
  { 
    params: { 
      id: string
    } 
  }) {

  let userDetails = undefined;
  let errorMsg = '';
  let genderPillClass = '';
    userDetails = await getUserDetails(params.id);


  genderPillClass = ( userDetails && (userDetails.gender).toLowerCase === 'male') ? 'bg-blue-400' : 'bg-pink-400';

  return (
    <>
      {/* IF: there's an error  */}
      { errorMsg && 
        <div className="flex justify-center text-red">
          {errorMsg}
        </div>
      }


      {/*  */}
      { userDetails &&
          <Profile userDetails={userDetails} />
      }
    </>
  );
}