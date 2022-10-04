const PhoneNumber = ({ label, contactInfo, setPNumber, placeholder }) => {

    function formatPhoneNumber(num) {
        if (!num) return num;
        //strip out all non-digit characters
        const phoneNumber = num.replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) return phoneNumber;
        if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        }
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }


    const handleInput = (e) => {
        // this is where we'll call our future formatPhoneNumber function that we haven't written yet.
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        // we'll set the input value using our setInputValue
        setPNumber({ ...contactInfo, phoneNumber: formattedPhoneNumber });
    };

    return (
        <div className="m-4 flex flex-col">
            <label className="text-white">
                {label}:
            </label>
            <input className={`bg-tab-open-unfocused focus:outline-none bg-transparent border text-white focus:border-react-logo rounded px-4 py-2 `} onChange={(e) => handleInput(e)} value={contactInfo.phoneNumber} placeholder={placeholder} />
        </div>
    );
}

export default PhoneNumber;