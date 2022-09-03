const MenuButton = ({ color, children }) => {
    return (
        <div className={`${color} h-4 w-4 mx-1 rounded-full my-1 flex justify-center items-center group hover:cursor-pointer`}>
            <p className="opacity-0 group-hover:opacity-100 text-xs font-semibold">{children}</p>
        </div>

    )
}

export default MenuButton;