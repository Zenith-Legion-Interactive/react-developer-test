import Link from "next/link";

import Counter from "./Counter";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-around">
        <div>
          <Counter />
        </div>
        <div className="flex justify-center">
          <Link href="/users">
            <Button
              label="Go to UserList"
              />
          </Link>
        </div>
      </div>
    </>
  )
}
