import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Circle from "../../components/Circle";
import SideNav from "../../components/SideNav/SideNav";
import socialIcons from "../../data/social";
import useSideNav from "../../hooks/sideNav";
import whiteLogo from '../../assets/logo-white-cropped.png';

function LandingPage() {

    const [progress, setProgress] = useState('0');

    const { revealSideNav } = useSideNav();

    const social = socialIcons();

    const handleNotify = () => {
        revealSideNav('landingSideNav')
    }

    useEffect(() => {
        setProgress('60%')
    }, [])

    return (
        <div className='text-center grid text-white bg-black h-screen relative p-3'>
            <SideNav />
            {/* <header className='text-2xl pt-8'>RICK DUSI</header> */}
            <img className='w-44 m-auto my-4' src={whiteLogo} />
            <div>
                <h1 className='md:px-32 lg:px-56 px-2 xl:text-8xl lg:text-7xl sm:text-6xl text-4xl my-3 py-1 leading-none font-semibold' >
                    WEBSITE COMING SOON
                </h1>
                <h5 className='py-2 text-2xl my-6' >NEARLY READY!</h5>
                <div className='bg-gray-100 w-4/5 sm:w-96 m-auto h-4 my-8' >
                    <div style={{ width: progress, transition: 'ease 1s all' }} className='progress-bar w-56 bg-blue-400 h-4' />
                    <div className='relative flex justify-between top-2 progress-label'>
                        <p>0%</p>
                        <p>100%</p>
                    </div>
                </div>
                <Button text='Notify Me!' className='hover:opacity-70 bg-accent-400 px-10 py-2 shadow-lg mt-6 hover:bg-accent-100' onClick={handleNotify} />
                <div className='flex justify-between md:w-128 w-4/5 m-auto mt-12' >
                    {social.map((item) => <Circle info={item.icon} link={item.link} />)}
                </div>
            </div>
            <footer className='py-4 font-light text-sm' >
                RICK DUSI © 2021. Proudly created Chukwuma Azubuike
            </footer>
        </div>
    )
}

export default LandingPage;