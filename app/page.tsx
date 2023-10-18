import { Suspense } from "react";
import Counter from "./Counter";
import UserList from "./UserList";

import Loading from './loading';

export default function Home() {
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
