import React from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-re-super-tabs';
import { projectsList, numList } from '../lists/ProjectsList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
    return (
        <section>
            <div className="main">
                <h2 className="center">My tech projects sorted from newest to oldest!</h2>
                <Tabs activeTab='All' >
                    <TabList className="center term-tags">
                        <Tab component={() => <button className='btn-menu space'>All</button>} id='All' />
                        <Tab component={() => <button className='btn-menu space'>Web</button>} id='Web' />
                        <Tab component={() => <button className='btn-menu space'>Mobile</button>} id='Mobile' />
                        <Tab component={() => <button className='btn-menu space'>Console</button>} id='Console' />
                        <Tab component={() => <button className='btn-menu space'>Desktop</button>} id='Desktop' />
                        <Tab component={() => <button className='btn-menu space'>ML</button>} id='ML' />
                        <Tab component={() => <button className='btn-menu space'>DL</button>} id='DL' />
                        <Tab component={() => <button className='btn-menu space'>CV</button>} id='CV' />
                        <Tab component={() => <button className='btn-menu space'>DA</button>} id='DA' />
                        <Tab component={() => <button className='btn-menu space'>NLP</button>} id='NLP' />
                        <Tab component={() => <button className='btn-menu space'>AR</button>} id='AR' />
                        <Tab component={() => <button className='btn-menu space'>VR</button>} id='VR' />
                    </TabList>
                    <TabList>
                        <TabPanel component={() => Project('All Projects')} id='All' />
                        <TabPanel component={() => Project('Web App')} id='Web' />
                        <TabPanel component={() => Project('Mobile App')} id='Mobile' />
                        <TabPanel component={() => Project('Console App')} id='Console' />
                        <TabPanel component={() => Project('Desktop App')} id='Desktop' />
                        <TabPanel component={() => Project('Machine Learning')} id='ML' />
                        <TabPanel component={() => Project('Deep Learning')} id='DL' />
                        <TabPanel component={() => Project('Computer Vision')} id='CV' />
                        <TabPanel component={() => Project('Data Analysis')} id='DA' />
                        <TabPanel component={() => Project('Natural Language Processing')} id='NLP' />
                        <TabPanel component={() => Project('Augmented Reality')} id='AR' />
                        <TabPanel component={() => Project('Virtual Reality')} id='VR' />
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
            <h3 className="center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">{tags}</h3>
            <ul className="cards">
                {
                    numList.map((num, index) =>
                        (projectsList[num].tag).includes(tags) &&
                        <li className="cards_item" key={index} >
                            <div className="card" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                                <div className="card_image"><img src={projectsList[num].image} alt='img-project' /></div>
                                <div className="card_content">
                                    <h4 className="card_title">{projectsList[num].name}</h4>
                                    <p className="card_text">{projectsList[num].text}</p>
                                    {
                                        projectsList[num].github &&
                                        <a className="btncard" href={projectsList[num].github} aria-label="link"><FontAwesomeIcon icon={faGithubSquare} /> </a>
                                    }
                                    {
                                        projectsList[num].youtube &&
                                        <a className="btncard" href={projectsList[num].youtube} aria-label="link"><FontAwesomeIcon icon={faYoutubeSquare} /> </a>
                                    }
                                </div>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

