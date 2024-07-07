import {Helmet} from "react-helmet-async";
    import project1 from '/projects/food-hub.png';
import project2 from '/projects/real-estate.png';
import {RiExternalLinkLine, RiFirebaseLine, RiNodejsFill, RiReactjsLine, RiTailwindCssFill} from "react-icons/ri";
import {SiMongodb} from "react-icons/si";
import {useEffect, useState} from "react";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json() )
            .then(data => setProjects(data))
    }, []);

    return (
        <>
            <Helmet>
                <title>Projects | RONiB</title>
            </Helmet>
            <main>
                <div className='mb-12 text-center space-y-2'>
                    <div className='font-atomic font-bold text-4xl'>What I Did?</div>
                    <div className='dark:text-gray-400'>My Some Notable Works.</div>
                </div>
                <div className='bg-slate-200 dark:bg-slate-800 py-12 px-4 lg:px-12 rounded-xl'>
                    <div className='grid lg:grid-cols-2 gap-6'>
                        {
                            projects.map((project, index) => (
                                <div key={index} className='h-max flex flex-col gap-4 bg-white dark:bg-slate-900 p-6 rounded-xl'>
                                    <img src={project.image} alt={project.name} className='rounded-xl'/>
                                    <h3 className='font-bold text-xl'>{project.name}</h3>
                                    <p className='text-slate-400'>{project.desc}</p>
                                    <div className='flex flex-col lg:flex-row justify-between items-center gap-4'>
                                        <div className='text-slate-300'>{project.tech}</div>
                                        <a className='w-full lg:w-max text-center bg-black dark:bg-slate-800 text-white flex justify-center items-center gap-2 px-2 lg:px-4 py-1 lg:py-2 text-sm border rounded'
                                           href={project.link} target='_blank'><RiExternalLinkLine/> Take
                                            a Look</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </main>
        </>
    );
};

export default Projects;