import MenuButton from "./MenuButton";

const TopBar = ({ file }) => {
    return (
        <div className='flex bg-border-bar justify-center items-center shadow-xl'>
            <div className='flex absolute left-1'>
                <MenuButton color="bg-Sunset-Orange">x</MenuButton>
                <MenuButton color="bg-Selective-Yellow">-</MenuButton>
                <MenuButton color="bg-Malachite">+</MenuButton>
            </div>
            <h1 className='text-white'>{file} - calabrese.tech</h1>
        </div>
    )
}

export default TopBar;