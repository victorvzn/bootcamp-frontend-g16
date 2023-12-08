const BaseButton = ({ label, bgColor, textColor = 'text-white' }) => {
  return (
    <button className={`rounded-full px-5 py-4 font-semibold min-w-[80px] ${bgColor} ${textColor}`}>
      {label}
    </button>
  )
}

export default BaseButton