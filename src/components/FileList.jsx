import { VscChevronDown, VscJson } from 'react-icons/vsc'
import { SiCss3, SiReact, SiHtml5 } from "react-icons/si";
import DirectoryFile from './DirectoryFile'

const FileList = () => {
    // const [selectedFile, setSelectedFile] = useState('Hompage.jsx')
    return (
        <div className='mr-10 bg-file-panel h-screen w-60 pt-1 pl-1'>
            <div className='text-white flex justify-start items-center'>
                <VscChevronDown size={15} />
                <h2 className='ml-1 text-xs font-bold'>CALABRESE.TECH</h2>
            </div>
            {/* Directories */}
            <div className="ml-2">
                {/* Homepage */}
                <DirectoryFile icon={<SiReact className='text-react-logo mr-2' size={12} />} filename={"Homepage.jsx"} />
                {/* About */}
                <DirectoryFile icon={<SiHtml5 className='text-html-logo mr-2' size={12} />} filename={"About.html"} />
                {/* Contact */}
                <DirectoryFile icon={<SiCss3 className='text-css-logo mr-2' size={12} />} filename={"About.html"} />
                {/* Projects */}
                <DirectoryFile icon={<VscJson className='text-JSON-logo mr-2' size={12} />} filename={"Projects.json"} />

            </div>
        </div>
    )
}

export default FileList;