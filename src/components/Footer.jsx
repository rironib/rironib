const Footer = () => {
    return (
        <footer className='w-full py-4 px-6 lg:px-12 bg-slate-900 text-white border-t dark:border-slate-700'>
            <div className='w-11/12 lg:w-10/12 max-w-[1275px] mx-auto'>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-2 lg:justify-between'>
                    <div className='text-center lg:text-left'>ⓒ {new Date().getFullYear()} RONiB</div>
                    <div className='text-center lg:text-right'>All Right Reserved.</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;