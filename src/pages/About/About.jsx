import {Helmet} from "react-helmet-async";
import profile from '/pro.png';
import {Link} from "react-router-dom";
import {RiSendPlane2Line} from "react-icons/ri";

const About = () => {
    return (
        <>
            <Helmet>
                <title>About | RONiB</title>
            </Helmet>
            <main>
                <div className='mb-12 text-center space-y-2'>
                    <div className='font-atomic font-bold text-4xl'>About Me</div>
                    <div className='dark:text-gray-400'>My Introduction</div>
                </div>
                <div className='lg:w-8/12 mx-auto flex flex-col lg:flex-row justify-center items-center lg:justify-start gap-12'>
                    <div className='w-10/12 lg:w-full mx-auto'>
                        <img src={profile} alt='RON:B' className='w-auto lg:w-72'/>
                    </div>
                    <div className='grid gap-12 text-center lg:text-left'>
                        <div className='font-medium dark:text-gray-300'>
                            Web Developer, with extensive knowledge and years of experience, working in web technologies & delivering quality work.
                        </div>
                        <div className='grid lg:grid-cols-3 gap-4'>
                            <div className='flex flex-col justify-center gap-3'>
                                <div className='font-bold text-3xl'>05+</div>
                                <div>Years experience</div>
                            </div>
                            <div className='flex flex-col justify-center gap-3'>
                                <div className='font-bold text-3xl'>30+</div>
                                <div>Projects completed</div>
                            </div>
                            <div className='flex flex-col justify-center gap-3'>
                                <div className='font-bold text-3xl'>02+</div>
                                <div>Companies worked</div>
                            </div>
                        </div>
                        <div className='flex justify-center lg:justify-start'>
                            <Link to='/contact'
                                  className='w-max flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 bg-violet-600 font-semibold rounded-md'>
                                Contact Me <RiSendPlane2Line/>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default About;