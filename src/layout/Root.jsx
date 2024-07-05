import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <>
            <ToastContainer
                autoClose={2000}
                theme="colored"
            />
            <div className='dark:bg-slate-800 dark:text-gray-200 min-h-[100dvh] w-full flex flex-col justify-between'>
                <Header/>
                <div className='flex-grow w-full lg:w-10/12 max-w-[1275px] mx-auto my-6 p-4'>
                    <Outlet/>
                </div>
                <Footer/>
            </div>
        </>
    );
};

export default Root;
