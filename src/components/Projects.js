import React from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-re-super-tabs";
import data from "../data/data.json";

const projectsList = data["projects"]
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
        <section className="bg-[#f6f8fa] dark:bg-[#010409] dark:text-[#c9d1d9] text-[#24292f]">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-lg font-bold mb-6">My tech projects sorted from newest to oldest 💡!</h2>
                <Tabs activeTab="All">
                    <TabList className="text-center term-tags gap-2 p-1">
                        {
                            tabs.map((tab, index) =>
                                <Tab
                                    component={
                                        () =>
                                            <button
                                                className="outline-0 flex items-center px-4 py-2 text-sm font-medium rounded-md 
                                                         bg-white dark:bg-[#0d1117] border border-[#d0d7de] dark:border-[#30363d] 
                                                         hover:bg-[#ddf4ff] dark:hover:bg-[#388bfd26] hover:text-[#0969da] dark:hover:text-[#58A6FF] hover:border-[#54aeff66] dark:hover:border-[#388bfd66]
                                                         focus:bg-[#ddf4ff] focus:dark:bg-[#388bfd26] focus:text-[#0969da] focus:dark:text-[#58A6FF] focus:border-[#54aeff66] focus:dark:border-[#388bfd66]
                                                           transition ease-in-out duration-150">
                                                {tab.id}
                                            </button>
                                    }
                                    id={tab.id}
                                    key={index} />
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
                                    key={index} />

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
            <h3 className="my-6 text-lg font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{tags}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                {
                    numList.map((num, index) =>
                        (projectsList[num].tag).includes(tags) &&
                        <div className="h-full rounded-md transition shadow-lg-light bg-white dark:bg-[#0d1117] border border-[#d0d7de] dark:border-[#30363d]" key={index}>

                            <img className="rounded-t-md" src={projectsList[num].image} alt="" />

                            <div className="p-5">
                                <h4 className="mb-2 text-lg font-bold text-[#0969da] dark:text-[#58A6FF] tracking-tight">{projectsList[num].name}</h4>
                                <p className="mb-3 text-md font-normal text-[#57606a] dark:text-[#8b949e]">{projectsList[num].text}</p>
                                <div className="grid grid-cols-2 gap-3 text-center content-center">
                                    {
                                        projectsList[num].github &&
                                        <a href={projectsList[num].github} className="px-4 py-2 text-sm font-medium rounded-md bg-[#f6f8fa] dark:bg-[#21262d] text-[#24292f] dark:text-[#c9d1d9] border border-[#1b1f2426] dark:border-[#f0f6fc1a] hover:bg-[#ddf4ff] dark:hover:bg-[#388bfd26] hover:text-[#0969da] dark:hover:text-[#58a6ff] hover:border-[#54aeff66] dark:hover:border-[#388bfd66]">
                                            Github
                                        </a>
                                    }
                                    {
                                        projectsList[num].youtube &&
                                        <a href={projectsList[num].youtube} className="px-4 py-2 text-sm font-medium rounded-md bg-[#f6f8fa] dark:bg-[#21262d] text-[#24292f] dark:text-[#c9d1d9] border border-[#1b1f2426] dark:border-[#f0f6fc1a] hover:bg-[#ddf4ff] dark:hover:bg-[#388bfd26] hover:text-[#0969da] dark:hover:text-[#58a6ff] hover:border-[#54aeff66] dark:hover:border-[#388bfd66]">
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

