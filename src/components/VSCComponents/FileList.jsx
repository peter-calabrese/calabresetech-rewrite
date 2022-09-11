import { VscChevronDown, VscJson, VscEllipsis } from 'react-icons/vsc'
import { SiCss3, SiReact, SiHtml5 } from "react-icons/si";
import { useState, useEffect } from 'react';
const FileList = ({ value, setFileToRender }) => {
    const [homepageFocus, setHomepageFocus] = useState(true);
    const [aboutFocus, setAboutFocus] = useState(false);
    const [contactFocus, setContactFocus] = useState(false);
    const [projectsFocus, setProjectsFocus] = useState(false);

    useEffect(() => {
        switch (value) {
            case 'Homepage.jsx':
                setHomepageFocus(true);
                setAboutFocus(false);
                setContactFocus(false);
                setProjectsFocus(false);
                break;
            case 'About.html':
                setHomepageFocus(false);
                setAboutFocus(true);
                setContactFocus(false);
                setProjectsFocus(false);
                break;
            case 'Contact.css':
                setHomepageFocus(false);
                setAboutFocus(false);
                setContactFocus(true);
                setProjectsFocus(false);
                break;
            case 'Projects.json':
                setHomepageFocus(false);
                setAboutFocus(false);
                setContactFocus(false);
                setProjectsFocus(true);
                break;
            default:
                break;
        }
    }, [value])

    const fileClicked = (toRender) => {
        setFileToRender(toRender)

    }
    return (
        <div className=' bg-file-panel h-screen w-60 pt-1'>
            <div className='text-white flex items-center justify-between mt-2 mb-3 ml-1'>
                <h2 className='ml-5 text-xs opacity-60'>EXPLORER</h2>
                <VscEllipsis className="mr-3" size={15} />
            </div>
            <div className='text-white flex justify-start items-center ml-1'>
                <VscChevronDown size={15} />
                <h2 className='ml-1 text-xs font-bold'>CALABRESE.TECH</h2>
            </div>
            {/* Directories */}
            <div className="">
                {/* Homepage */}
                <button className={`pl-2 w-full flex justify-start items-center mt-1 hover:bg-slate-200 hover:bg-opacity-10 ${homepageFocus ? 'bg-file-selected text-tab-text-focused' : ''}`} onClick={() => fileClicked('Homepage.jsx')}>
                    <SiReact className='text-react-logo mr-2' size={12} />
                    <p className='text-file-text text-sm'>Homepage.jsx</p>
                </button>

                {/* About */}
                <button className={`pl-2 w-full flex justify-start items-center mt-1 hover:bg-slate-200 hover:bg-opacity-10 ${aboutFocus ? 'bg-file-selected text-tab-text-focused' : ''}`} onClick={() => fileClicked('About.html')}>
                    <SiHtml5 className='text-html-logo mr-2' size={12} />
                    <p className='text-file-text text-sm'>About.html</p>
                </button>
                {/* Contact */}
                <button className={`pl-2 w-full flex justify-start items-center mt-1 hover:bg-slate-200 hover:bg-opacity-10 ${contactFocus ? 'bg-file-selected text-tab-text-focused' : ''}`} onClick={() => fileClicked('Contact.css')}>
                    <SiCss3 className='text-css-logo mr-2' size={12} />
                    <p className='text-file-text text-sm'>Contact.css</p>
                </button>
                {/* Projects */}
                <button className={`pl-2 w-full flex justify-start items-center mt-1 hover:bg-slate-200 hover:bg-opacity-10 ${projectsFocus ? 'bg-file-selected text-tab-text-focused' : ''}`} onClick={() => fileClicked('Projects.json')}>
                    <VscJson className='text-JSON-logo mr-2' size={12} />
                    <p className='text-file-text text-sm'>Projects.json</p>
                </button>
            </div>
        </div>
    )
}

export default FileList;