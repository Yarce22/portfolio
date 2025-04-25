interface ButtonProp {
  label: string
}

const Button: React.FC<ButtonProp> = ({ label }) => {

  return (
    <button className="w-[60%] h-14 bg-Titles rounded-xl cursor-pointer font-Geist font-bold text-Text tracking-[1.5px]">{label}</button>
  )
}

export { Button }