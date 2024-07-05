import {Helmet} from "react-helmet-async";
import {RiSendPlane2Line} from "react-icons/ri";
import profile from '/pro.png';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | RONiB</title>
            </Helmet>
            <main className='min-h-[70dvh] flex justify-center items-center'>
                <div className='flex flex-col-reverse lg:flex-row justify-center items-center gap-16 lg:gap-8'>
                    <div className='grid gap-3 text-center lg:text-start'>
                        <div className='text-3xl lg:text-5xl font-bold font-atomic'>
                            Hi, I'm <span className='font-atomic'>R❁NiB</span>
                        </div>
                        <div className='font-medium text-lg text-violet-400 mb-2'>Web Developer</div>
                        <div className='mb-6'>
                            H:gh level experience in web design & development knowledge, producing quality work.
                        </div>
                        <div className='flex justify-center lg:justify-start'>
                            <Link to='/contact' className='w-max flex items-center gap-2 px-6 py-3 bg-violet-600 rounded-md'>
                                Contact Me <RiSendPlane2Line/>
                            </Link>
                        </div>
                    </div>
                    <div className='w-full flex justify-center'>
                        <img src={profile} alt='RON:B' className='w-72' />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;