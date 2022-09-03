import { VscFiles, VscSearch, VscGithubAlt, VscAccount, VscExtensions } from 'react-icons/vsc'

const SideBar = () => {
    return (

        <div className='flex justify-center h-screen bg-left-border-bar w-14 group'>
            <div className='border-l-2 h-10 absolute top-8 left-0' />
            <div>
                <VscFiles className='text-white px-1 my-2 hover:cursor-pointer' size={40} />
                <VscSearch className='text-white px-1 my-2 opacity-70 hover:opacity-100 hover:cursor-pointer ease-in-out duration-100' size={40} />
                <VscGithubAlt className='text-white my-2 p-1 opacity-70 hover:opacity-100 hover:cursor-pointer ease-in-out duration-100' size={40} onClick={() => {
                    window.open('https://github.com/peter-calabrese');
                }} />
                <VscExtensions className='text-white my-2 px-1 opacity-70 hover:opacity-100 hover:cursor-pointer ease-in-out duration-100' size={40} onClick={() => {
                    window.open('https://marketplace.visualstudio.com/VSCode');
                }} />

                {/* TODO: CREATE TOOLTIP FOR MENU */}
                <VscAccount className='text-white absolute bottom-1 px-1 my-2 opacity-70 hover:opacity-100 hover:cursor-pointer ease-in-out duration-100' size={40} />
            </div>

        </div>
    );
}
export default SideBar;