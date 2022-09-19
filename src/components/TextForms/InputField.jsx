
const InputField = ({ label, type, name, value, onChange, placeholder, required = false, classes }) => {

    return (
        <div className="m-4 flex flex-col">
            <label className="text-white">
                {label}:
            </label>
            <input className={`bg-tab-open-unfocused focus:outline-none bg-transparent border text-white focus:border-react-logo rounded px-4 py-2 `} type={type} id={name} value={value} onChange={onChange} placeholder={placeholder} required={required} />
        </div>
    )
}

export default InputField;