import useSideNav from "../../hooks/sideNav";
import Close from "../OpenClose/close";
import sendEmail from "../../api/landingEmail";
import { useEffect, useRef } from "react";
import useButtonState from "../../hooks/buttonState";

export default function SideNav() {

    const { hideSideNav } = useSideNav();
    const { buttonInfo,
        emailSuccess,
        setEmailSuccess,
        buttonInfoFunc } = useButtonState()
    const subForm = useRef();

    const handleClick = () => {
        hideSideNav('landingSideNav')
    }

    const handleSubmit = async (e) => {
        buttonInfoFunc('progress')
        e.preventDefault();
        const res = await sendEmail(subForm)
        if (res === 'OK') {
            let input = document.getElementsByClassName('landing-form')
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
            buttonInfoFunc('NOTIFY ME!')
            setEmailSuccess('Successfully subscribed!')
            setTimeout(() => {
                setEmailSuccess(false)
            }, 5000)
        }
    }

    useEffect(() => {
        buttonInfoFunc('NOTIFY ME!')
    }, [])

    return (
        <nav id='landingSideNav' style={{ transition: 'opacity 0.3s' }} className='w-full md:w-1/2 bg-accent-400 md:p-16 text-black h-screen text-center py-16 px-6 absolute z-10 opacity-0 hidden'>
            <Close className='absolute right-20 top-10' onClick={handleClick} />
            <div className='xl:p-24' >
                <h1 className='my-6 font-normal text-4xl leading-normal' >BE THE FIRST TO KNOW WHEN WE GO LIVE</h1>
                <h4 className='font-light my-4' >GET NOTIFIED</h4>
                <form ref={subForm} onSubmit={handleSubmit} className='space-y-4 py-5 w-9/12 m-auto' >
                    <input className='w-full h-10 p-3 landing-form' type="text" name="name" placeholder='Enter Your Name' required />
                    <input className='w-full h-10 p-3 landing-form' type="email" name="email" placeholder='Enter Your Email' required />
                    <button
                        type="submit"
                        // onClick={handleSubmit}
                        className='bg-black text-white h-10 px-4 w-full hover:bg-gray-600 transition-all' >{buttonInfo}
                    </button>
                </form>
                {emailSuccess && emailSuccess}
            </div>
        </nav>
    )
}