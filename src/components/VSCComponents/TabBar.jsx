import { VscChevronDown, VscJson, VscEllipsis, VscClose } from 'react-icons/vsc'
import { SiCss3, SiReact, SiHtml5 } from "react-icons/si";
import { useState } from "react";
import Projects from "../Webpages/Projects";
import { useEffect } from 'react';
const TapBar = ({ value, setTabToOpen }) => {
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
    
    const tabClicked = (tab) => {
        setTabToOpen(tab)
    }

    return (
        <div className="bg-tab-bg h-8">
            <button className={`h-full px-4  ${homepageFocus ? 'bg-tab-open-focused text-tab-text-focused' : 'bg-tab-open-unfocused text-tab-text-unfocused'}`} onClick={() => tabClicked('Homepage.jsx')}>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <SiReact className='text-react-logo mr-2' size={14} />
                        <p>Homepage.jsx</p>
                    </div>
                    {/* <VscClose className="ml-3 -pr-2" size={14} /> */}
                </div>
            </button >
            <button className={`h-full px-4 text-tab-text-focused ${aboutFocus ? 'bg-tab-open-focused text-tab-text-focused ' : 'bg-tab-open-unfocused text-tab-text-unfocused'}`} onClick={() => tabClicked('About.html')}>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <SiHtml5 className='text-html-logo mr-2' size={12} />  <p>About.html</p>
                    </div>
                    {/* <VscClose className="ml-3 -pr-2" size={14} /> */}
                </div>
            </button>
            <button className={`h-full px-4 text-tab-text-focused ${contactFocus ? 'bg-tab-open-focused text-tab-text-focused ' : 'bg-tab-open-unfocused text-tab-text-unfocused'}`} onClick={() => tabClicked('Contact.css')}>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <SiCss3 className='text-css-logo mr-2' size={12} />
                        <p>Contact.css</p>
                    </div>
                    {/* <VscClose className="ml-3 -pr-2" size={14} /> */}
                </div>
            </button>
            <button className={`h-full px-4 text-tab-text-focused ${projectsFocus ? 'bg-tab-open-focused text-tab-text-focused ' : 'bg-tab-open-unfocused text-tab-text-unfocused'}`} onClick={() => tabClicked('Projects.json')}>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <VscJson className='text-JSON-logo mr-2' size={12} />
                        <p>Projects.json</p>
                    </div>
                    {/* <VscClose className="ml-3 -pr-2" size={14} /> */}
                </div>
            </button>
        </div >

    )
}

export default TapBar;