import Link from "next/link";

async function getUserList() {
  
  // await new Promise(resolve => setTimeout(resolve, 5000)) // Imitate 5s loading


  const res = await fetch(`${process.env.API_URL}/user?limit=5`, {
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
    throw new Error('Failed to fetch data');
  }

  return res.json();
  
}

async function getUserDetails(id: string) {

  const res = await fetch(`${process.env.API_URL}/user/${id}`, {
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
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function getUserListWithDetails() {
  const resList = await getUserList();
  const restListData = resList.data;

  const userList = [];

  for (let i = 0; i < restListData.length; i++) {
    const userDetails = await getUserDetails(restListData[i].id);

    userList.push(userDetails);
  }

  return userList;
}

export default async function UserList() {

  let userList = [];
  let errorMsg = '';

  try {
    userList = await getUserListWithDetails();
  } catch (e) {
    if (e instanceof Error) {
      errorMsg = e.message
    }
  }

  return (
    <>

      { errorMsg && 
        <div className="flex justify-center text-red">
          {errorMsg}
        </div>
      }
      
      {/* List */}
      <div className="card rounded drop-shadow">

        {/* Rows */}
        {
          userList.map((user: {
            id: string; 
            firstName: string;
            lastName: string;
            email: string;
          }) => (
            <Link href={`/users/${user.id}`} key={user.id}>
              <div className="m-2 flex items-center border rounded border-gray-600">
                <div className="border-r-2 border-gray-600 px-2 py-1">
                  {user.firstName} {user.lastName}
                </div>
                <div className="p-2">
                  {user.email}
                </div>
              </div>
            </Link>
          ))
        }


      </div>
    </>
  );
}