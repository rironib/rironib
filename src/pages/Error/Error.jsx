import {Helmet} from "react-helmet-async";
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <>
            <Helmet>
                <title>Page Not Found</title>
            </Helmet>
            <main className='min-h-screen w-full dark:bg-slate-900 dark:text-white p-12 flex justify-center items-center'>
                <div className='lg:h-[70dvh] lg:w-[60%] dark:bg-slate-800 p-8 flex flex-col justify-center items-center gap-6 rounded-xl'>
                    <div className='font-bold text-8xl'>4❁4</div>
                    <div className='w-1/2 mb-6 font-medium text-center text-xl uppercase'>
                        OOPS! The page you are looking for could not be found.
                    </div>
                    <Link to='/' className='px-6 py-3 bg-violet-600 font-semibold rounded-lg'>Back To Home</Link>
                </div>
            </main>
        </>
    );
};

export default Error;