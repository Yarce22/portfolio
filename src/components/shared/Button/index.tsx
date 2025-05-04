interface ButtonProp {
  label: string,
  type?: "submit" | "reset" | "button" | undefined,
  disabled?: boolean
}

const Button: React.FC<ButtonProp> = ({ label, type = "button", disabled }) => {

  return (
    <button className="relative overflow-hidden w-full h-14 px-5 bg-Titles rounded-xl cursor-pointer font-Geist font-bold text-Text tracking-[1.5px] after:absolute after:content-[''] after:inset-0 after:z-0 after:bg-white after:opacity-0 after:transition after:duration-400 after:ease-in-out hover:after:opacity-20" type={type} disabled={disabled}>{label}</button>
  )
}

export { Button }