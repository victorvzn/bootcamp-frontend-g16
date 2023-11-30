const AppointmentsForm = () => {
  return (
    <section>
      <h2 className="text-2xl text-center mb-4">Nuevo paciente</h2>

      <form>
        <input
          type="text"
          name="petName"
          placeholder="Nombre de mi mascota"
          className="border p-3 shadow-md rounded-md"
        />
        <input
          type="number"
          name="petAge"
          min="0"
          max="50"
          placeholder="Edad de la mascota"
          className="border p-3 shadow-md rounded-md"
        />
        <input
          type="date"
          name="appintmentDate"
          placeholder="Fecha de la cita"
          className="border p-3 shadow-md rounded-md"
        />
        <input
          type="time"
          name="appointmentTime"
          placeholder="Hora de la cita"
          className="border p-3 shadow-md rounded-md"
        />
        <textarea
          name="symptoms"
          placeholder="Síntomas"
          className="border p-3 shadow-md rounded-md"
          rows={3}
        />
        <input
          type="submit"
          className="border p-2 bg-green-800 text-white rounded-md cursor-pointer"
          value="Guardar"
        />
      </form>
    </section>
  )
}

export default AppointmentsForm