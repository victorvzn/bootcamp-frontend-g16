import AppointmentsForm from "../components/appointments/AppointmentsForm"
import AppointmentsList from "../components/appointments/AppointmentsList"

const Appointments = () => {
  return (
    <>
      <AppointmentsForm />

      <AppointmentsList appointments={[1,2,3,4]} />
    </>
  )
}

export default Appointments