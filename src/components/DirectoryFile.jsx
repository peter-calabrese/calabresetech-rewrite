const DirectoryFile = ({ icon, filename }) => {
    return (
        <div className="flex justify-start items-center mt-1">
            {icon}
            <p className='text-file-text text-sm'>{filename}</p>
        </div>
    );
}

export default DirectoryFile;