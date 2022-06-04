import React from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-re-super-tabs';
import data from '../data/data.json';

const projectsList = data['projects']
var numList = [];
for (var i = 0; i < projectsList.length; i++) {
    numList.push(i);
}

const tabs = [
    {
        id: "All",
        name: "All Projects"
    },
    {
        id: "Web",
        name: "Web App"
    },
    {
        id: "Mobile",
        name: "Mobile App"
    },
    {
        id: "Console",
        name: "Console App"
    },
    {
        id: "Desktop",
        name: "Desktop App"
    },
    {
        id: "ML",
        name: "Machine Learning"
    },
    {
        id: "DL",
        name: "Deep Learning"
    },
    {
        id: "CV",
        name: "Computer Vision"
    },
    {
        id: "DA",
        name: "Data Analysis"
    },
    {
        id: "NLP",
        name: "Natural Language Processing"
    },
    {
        id: "VR",
        name: "Virtual Reality"
    },
];

const Projects = () => {
    return (
        <section>
            <div className='container mx-auto px-4'>
                <h2 className="text-center text-lg font-bold mb-6">My tech projects sorted from newest to oldest 💡!</h2>
                <Tabs activeTab='All' >
                    <TabList className="text-center term-tags gap-2 p-1">
                        {
                            tabs.map((tab, index) =>
                                <Tab
                                    component={
                                        () => <button className='flex items-center px-4 py-2 text-sm font-medium rounded-md bg-[#21262d] text-[#c9d1d9] border border-[#30363d] hover:bg-[#121D2F] hover:text-[#58a6ff] hover:border-[#224D87]'>
                                            {tab.id}
                                        </button>
                                    }
                                    id={tab.id} 
                                    key={index}/>
                            )
                        }
                    </TabList>
                    <TabList>
                    {
                        tabs.map((tab, index) =>
                        <TabPanel 
                        component={
                            () => Project(tab.name)} 
                            id={tab.id}
                            key={index}/>
                        
                        )
                    }
                    </TabList>
                </Tabs>
            </div>


        </section>
    );
}

export default Projects;

const Project = (tags) => {
    return (
        <div>
            <h3 className='my-6 text-lg font-bold text-center' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{tags}</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center' data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                {
                    numList.map((num, index) =>
                        (projectsList[num].tag).includes(tags) &&
                        <div className="h-full rounded-md transition border border-[#30363d] hover:border-[#224D87] hover:bg-[#121D2F] shadow-lg-light bg-[#161B22]" key={index}>

                            <img className="rounded-t-md p-1" src={projectsList[num].image} alt="" />

                            <div className="p-5">
                                <h4 className="mb-2 text-lg font-bold text-[#58A6FF] tracking-tight">{projectsList[num].name}</h4>

                                <p className="mb-3 text-md font-normal text-[#c9d1d9]">{projectsList[num].text}</p>
                                <div className='grid grid-cols-2 gap-3 text-center content-center'>
                                    {
                                        projectsList[num].github &&
                                        <a href={projectsList[num].github} className="px-4 py-2 text-sm font-medium rounded-md bg-[#21262d] text-[#c9d1d9] border border-[#30363d] hover:border-[#224D87] hover:bg-transparent hover:text-[#58a6ff]">
                                            Github
                                        </a>
                                    }
                                    {
                                        projectsList[num].youtube &&
                                        <a href={projectsList[num].youtube} className="px-4 py-2 text-sm font-medium rounded-md bg-[#21262d] text-[#c9d1d9] border border-[#30363d] hover:bg-transparent hover:border-[#224D87] hover:text-[#58a6ff]">
                                            Youtube
                                        </a>
                                    }
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>

        </div>
    );
}

