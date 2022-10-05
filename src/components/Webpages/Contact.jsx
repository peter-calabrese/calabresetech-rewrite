import InputField from '../TextForms/InputField'
import PhoneNumber from '../TextForms/PhoneNumber'
import { useState } from 'react'
import { MdMarkEmailUnread } from 'react-icons/md'
import { VscGithubInverted } from 'react-icons/vsc'
import { AiFillLinkedin } from 'react-icons/ai'
const Contact = () => {
    const [contactInfo, setContactInfo] = useState({
        fName: "",
        lName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: ""
    })
    async function onSubmitHandle(e) {
        e.preventDefault();
        console.log(e)
        let res = await fetch("http://192.168.50.108:8080/email", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    name: `${contactInfo.fName} ${contactInfo.lName}`,
                    email: contactInfo.email,
                    phoneNumber: contactInfo.phoneNumber,
                    subject: contactInfo.subject,
                    message: contactInfo.message
                }),
        });
        console.log(res.json());
    }
    const iconSize = '25px';
    return (

        <form className="flex justify-center items-center h-screen -mt-6" onSubmit={(event) => onSubmitHandle(event)}>
            <div className='bg-left-border-bar px-20 py-16 rounded-xl flex'>
                <div className='text-react-logo  flex flex-col justify-center items-start pr-44 space-y-4'>
                    <div className="flex items-center">
                        <MdMarkEmailUnread size={iconSize} />
                        <a className="px-2" href='mailto:peter@calabrese.tech'>peter@calabrese.tech</a>
                    </div>
                    <div className="flex justify-center items-center">
                        <VscGithubInverted size={iconSize} />
                        <p className="hover:cursor-pointer px-2" onClick={() => {
                            window.open('https:/github.com/peter-calabrese');
                        }} >peter-calabrese</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <AiFillLinkedin size={iconSize} />
                        <p className="hover:cursor-pointer px-2" onClick={() => {
                            window.open('https://www.linkedin.com/in/peter-calabrese/');
                        }} >peter-calabrese</p>
                    </div>



                </div>
                <div className='bg-text-editor-bg px-10 py-6 rounded-xl flex flex-col justify-center items-center '>
                    <h1 className='text-white text-5xl font-bold mb-5'>Contact Me!</h1>
                    <div className="flex ">
                        <InputField label="First Name" type="text" id="fName" value={contactInfo.fName} onChange={(e) => setContactInfo({ ...contactInfo, fName: e.target.value })} placeholder="John" required={true} />
                        <InputField label="Last Name" type="text" id="lName" value={contactInfo.lName} onChange={(e) => setContactInfo({ ...contactInfo, lName: e.target.value })} placeholder="Doe" required={true} />
                    </div>
                    <div className="flex">
                        <InputField label="Email" type="email" id="email" value={contactInfo.email} onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })} placeholder="john.doe@email.com" required={true} />
                        <PhoneNumber label="Phone Number" contactInfo={contactInfo} setPNumber={setContactInfo} placeholder="(555) 123-4553" />
                        {/* <InputField label="Phone Number" type="number" id="phoneNumber" value={contactInfo.phoneNumber} onChange={(e) => setContactInfo({ ...contactInfo, phoneNumber: e.target.value })} placeholder="(555) 123-4553" required={true} /> */}
                    </div>
                    <div className="w-full">
                        <InputField label="Subject" type="text" id="subject" value={contactInfo.subject} onChange={(e) => setContactInfo({ ...contactInfo, subject: e.target.value })} placeholder="john.doe@email.com" required={true} />
                        <div className="m-4 flex flex-col">
                            <label className="text-white">
                                Message:
                            </label>
                            <textarea className='bg-tab-open-unfocused focus:outline-none bg-transparent border text-white focus:border-react-logo rounded px-4 py-2 h-56' value={contactInfo.message} onChange={(e) => setContactInfo({ ...contactInfo, message: e.target.value })} />
                        </div>
                    </div>
                    <input className='hover:cursor-pointer bg-Sunset-Orange px-4 py-2 rounded text-white' type="submit" value="Submit" />
                </div>
            </div>
        </form>

    )
}

export default Contact;