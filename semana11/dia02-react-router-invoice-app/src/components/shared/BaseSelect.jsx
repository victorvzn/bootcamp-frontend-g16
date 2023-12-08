const BaseSelect = ({ label, name, value, onChange, options }) => {
  return (
    <label className="text-white flex flex-col gap-2 mb-4">
      <span>{label}</span>
      <select
        className="w-full py-4 px-5 rounded-lg bg-slate-800"
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map(option => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}

export default BaseSelect