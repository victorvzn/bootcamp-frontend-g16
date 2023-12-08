const BaseTag = ({ label, bgColor, dotColor }) => {
  return (
    <div className={`py-3 rounded-md text-center capitalize font-extrabold min-w-[120px] ${bgColor}`}>
      <span className={`text-3xl mr-2 ${dotColor}`}>•</span>
      {label}
    </div>
  )
}

export default BaseTag