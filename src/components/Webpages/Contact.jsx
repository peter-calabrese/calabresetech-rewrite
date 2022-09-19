import InputField from '../TextForms/InputField'
import TextAreaInput from '../TextForms/TextAreaInput'
import { useState } from 'react'
const Contact = () => {
    const [contactInfo, setContactInfo] = useState({
        fName: "",
        lName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: ""
    })
    const onSubmitHandle = (e) => {
        e.preventDefault();
        console.log(contactInfo);
    }
    return (

        <form className="flex justify-center items-center flex-col h-screen" onSubmit={(event) => onSubmitHandle(event)}>
            <div className='bg-blue-200 px-56 py-24 rounded'>
                <h1 className='text-white text-5xl font-bold mb-5'>Contact Me!</h1>
                <div className="flex">
                    <InputField label="First Name" type="text" id="fName" value={contactInfo.fName} onChange={(e) => setContactInfo({ ...contactInfo, fName: e.target.value })} placeholder="John" required={true} />
                    <InputField label="Last Name" type="text" id="lName" value={contactInfo.lName} onChange={(e) => setContactInfo({ ...contactInfo, lName: e.target.value })} placeholder="Doe" required={true} />
                </div>
                <div className="flex">
                    <InputField label="Email" type="email" id="email" value={contactInfo.email} onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })} placeholder="john.doe@email.com" required={true} />
                    <InputField label="Phone Number" type="number" id="phoneNumber" value={contactInfo.phoneNumber} onChange={(e) => setContactInfo({ ...contactInfo, phoneNumber: e.target.value })} placeholder="(555) 123-4553" required={true} />
                </div>
                <div className="w-[29rem]">
                    <InputField label="Subject" type="text" id="subject" value={contactInfo.subject} onChange={(e) => setContactInfo({ ...contactInfo, subject: e.target.value })} placeholder="john.doe@email.com" required={true} />
                    <div className="m-4 flex flex-col">
                        <label className="text-white">
                            Message;
                        </label>
                        <textarea className='bg-tab-open-unfocused focus:outline-none bg-transparent border text-white focus:border-react-logo rounded px-4 py-2 h-56' value={contactInfo.message} onChange={(e) => setContactInfo({ ...contactInfo, message: e.target.value })} />
                    </div>
                </div>
                <input className='hover:cursor-pointer bg-Sunset-Orange px-4 py-2 rounded text-white' type="submit" value="Submit" />
            </div>
        </form>

    )
}

export default Contact;