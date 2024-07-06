import {Helmet} from "react-helmet-async";
import contact from '/mail.png';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <main>
                <div className='mb-8 text-center space-y-2'>
                    <div className='font-atomic font-bold text-4xl'>Contact Me</div>
                    <div className='dark:text-gray-400'>Contact with me</div>
                </div>
                <div className='grid lg:grid-cols-5 items-center gap-12 bg-slate-100 dark:bg-slate-800 py-12 px-6 lg:px-24 rounded-xl'>
                    <div className='lg:col-span-2'>
                        <img src={contact} alt='Contact'/>
                    </div>
                    <div className='lg:col-span-3'>
                        <div className='grid gap-6'>
                            <div className='w-full space-y-2'>
                                <div className='font-medium text-lg'>Name</div>
                                <input className='w-full px-6 py-3 border bg-white dark:bg-slate-900 dark:text-white rounded-lg outline-none'
                                       placeholder='Enter Name'></input>
                            </div>
                            <div className='w-full space-y-2'>
                                <div className='font-medium text-lg'>Email</div>
                                <input
                                    className='w-full px-6 py-3 border bg-white dark:bg-slate-900 dark:text-white rounded-lg outline-none'
                                    placeholder='Enter Email'></input>
                            </div>
                            <div className='w-full space-y-2'>
                                <div className='font-medium text-lg'>Message</div>
                                <textarea rows='5'
                                    className='w-full px-6 py-3 border bg-white dark:bg-slate-900 dark:text-white rounded-lg outline-none'
                                    placeholder='Write Your Message'></textarea>
                            </div>
                            <button className='w-full bg-violet-600 text-white py-3 font-medium text-lg rounded-lg'>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Contact;