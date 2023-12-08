const BaseInput = ({ type='text', classx, label, value, placeholder, onChange }) => {
  return (
    <label className={`text-white flex flex-col gap-2 mb-4 ${classx}`}>
      <span>{label}</span>
      <input
        className="w-full py-4 px-5 rounded-lg bg-slate-800"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  )
}

export default BaseInput