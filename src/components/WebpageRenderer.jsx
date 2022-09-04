import Homepage from "./Webpages/Homepage";
import About from "./Webpages/About";
import Contact from "./Webpages/Contact";
import Projects from "./Webpages/Projects";
const WebpageRenderer = ({ value }) => {
    const renderSwitch = (value) => {
        switch (value) {
            case 'Home':
                return <Homepage />


            case 'About':
                return <About />
            case 'Contact':
                return <Contact />
            case 'Projects':
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