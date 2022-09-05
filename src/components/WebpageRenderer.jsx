import Homepage from "./Webpages/Homepage";
import About from "./Webpages/About";
import Contact from "./Webpages/Contact";
import Projects from "./Webpages/Projects";
const WebpageRenderer = ({ value }) => {
    const renderSwitch = (value) => {
        switch (value) {
            case 'Homepage.jsx':
                return <Homepage />
            case 'About.html':
                return <About />
            case 'Contact.css':
                return <Contact />
            case 'Projects.json':
                return <Projects />
            default:
                break;
        }
    }

    return (
        <div>
            {renderSwitch(value)}
        </div>
    )

}
export default WebpageRenderer;