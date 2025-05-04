interface ButtonProp {
  label: string,
  type?: "submit" | "reset" | "button" | undefined,
  disabled?: boolean
}

const Button: React.FC<ButtonProp> = ({ label, type = "button", disabled }) => {

  return (
    <button className="w-full h-14 px-5 bg-Titles rounded-xl cursor-pointer font-Geist font-bold text-Text tracking-[1.5px]" type={type} disabled={disabled}>{label}</button>
  )
}

export { Button }