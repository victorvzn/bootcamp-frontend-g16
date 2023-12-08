const BaseButton = ({ label, bgColor, textColor = 'text-white', classx }) => {
  return (
    <button className={`rounded-full px-5 py-4 font-semibold min-w-[100px] ${bgColor} ${textColor} ${classx}`}>
      {label}
    </button>
  )
}

export default BaseButton