import Header from "./components/Header";
import Appointments from "./pages/Appointments";

export default function App() {
  return (
    <>
      <Header title='Citas médicas para mascotas' />

      <main className="container m-auto flex gap-12 py-5">
        <Appointments />
      </main>
    </>
  )
}