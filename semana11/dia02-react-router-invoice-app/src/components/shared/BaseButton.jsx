const BaseButton = ({ label, bgColor, textColor = 'text-white', classx, onClick }) => {
  return (
    <button
      className={`rounded-full px-5 py-4 font-semibold min-w-[100px] ${bgColor} ${textColor} ${classx}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default BaseButton