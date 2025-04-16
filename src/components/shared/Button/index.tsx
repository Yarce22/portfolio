interface ButtonProp {
  label: string
}

const Button: React.FC<ButtonProp> = ({ label }) => {

  return (
    <button className="w-[60%] h-14 bg-Titles rounded-xl cursor-pointer font-bold">{label}</button>
  )
}

export { Button }