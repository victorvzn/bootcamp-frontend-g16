import { useState } from "react"

export default function App() {
  const [weight, setWeight] = useState(180)
  const [height, setHeight] = useState(300)

  return (
    <section className="w-96 mx-auto my-5 bg-sky-500 rounded-md">
      <h1 className="text-3xl font-bold text-center text-white p-5">IMC Calculator</h1>

      <div className="bg-sky-200 p-5">
        <p className="font-bold">Weight: {weight} kg</p>
        <input
          type="range"
          className="w-full"
          min="50"
          max="200"
        />

        <p className="font-bold">Height: {height} cm</p>
        <input
          type="range"
          className="w-full"
          min="50"
          max="200"
        />

        <p className="text-2xl font-bold bg-orange-400 text-center p-5 mt-5">
          Tu IMC es 00
        </p>
      </div>
    </section>
  )
}