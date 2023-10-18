import Counter from "./Counter";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-around">
        <div>
          <Counter />
        </div>
      </div>
    </>
  )
}
