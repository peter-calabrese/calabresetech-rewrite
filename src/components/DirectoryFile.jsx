const DirectoryFile = ({ icon, filename, onClick }) => {
    return (
        <button className="w-full flex justify-start items-center mt-1 hover:bg-slate-200 hover:bg-opacity-10 focus:bg-blue-900" onClick={onClick}>
            {icon}
            <p className='text-file-text text-sm'>{filename}</p>
        </button>
    );
}

export default DirectoryFile;