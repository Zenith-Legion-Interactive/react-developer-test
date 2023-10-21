import { Suspense } from "react";
import UserList from "./UserList";

import Loading from '../loading';

export default function Users() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-around">
        <div>
          <Suspense fallback={<Loading />}>
              <UserList />
          </Suspense>
        </div>
      </div>
    </>
  )
}
