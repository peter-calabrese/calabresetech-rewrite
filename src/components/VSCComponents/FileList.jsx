import { VscChevronDown, VscJson, VscEllipsis } from 'react-icons/vsc'
import { SiCss3, SiReact, SiHtml5 } from "react-icons/si";
import DirectoryFile from './DirectoryFile'

const FileList = ({ setFileToRender }) => {

    const fileClicked = (toRender) => {
        setFileToRender(toRender)
    }
    return (
        <div className=' bg-file-panel h-screen w-60 pt-1 pl-1'>
            <div className='text-white flex items-center justify-between mt-2 mb-3'>
                <h2 className='ml-5 text-xs opacity-60'>EXPLORER</h2>
                <VscEllipsis className="mr-3" size={15} />
            </div>
            <div className='text-white flex justify-start items-center'>
                <VscChevronDown size={15} />
                <h2 className='ml-1 text-xs font-bold'>CALABRESE.TECH</h2>
            </div>
            {/* Directories */}
            <div className="pl-2">
                {/* Homepage */}
                <DirectoryFile icon={<SiReact className='text-react-logo mr-2' size={12} />} filename={"Homepage.jsx"} onClick={() => fileClicked('Homepage.jsx')} />
                {/* About */}
                <DirectoryFile icon={<SiHtml5 className='text-html-logo mr-2' size={12} />} filename={"About.html"} onClick={() => fileClicked('About.html')} />
                {/* Contact */}
                <DirectoryFile icon={<SiCss3 className='text-css-logo mr-2' size={12} />} filename={"Contact.css"} onClick={() => fileClicked('Contact.css')} />
                {/* Projects */}
                <DirectoryFile icon={<VscJson className='text-JSON-logo mr-2' size={12} />} filename={"Projects.json"} onClick={() => fileClicked('Projects.json')} />

            </div>
        </div>
    )
}

export default FileList;