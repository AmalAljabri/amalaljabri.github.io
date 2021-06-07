import React from 'react';

import {
    about, education, date, location, honours,
    experience, role, publication, interest, check,
    skills
} from './Emojis';
import { educationList } from '../lists/EducationList';
import { experienceList } from '../lists/ExperienceList';
import { publicationsList } from '../lists/PublicationsList';
import { interestsList } from '../lists/InterestsList';
import { skillsList } from '../lists/SkillsList';

const About = () => {

    return (
        <section>
            <div className="main">
                <h3 className="center">A little bit of information about myself!</h3>
                <h3>{about} About Me</h3>
                <div className="info">
                    <p>Hello .. My name is Amal Saad Aljabri and I am from Madina, a peaceful city in the west part of Saudi Arabia.
                    I am a developer and researcher in computer science.
                    I have a passion for coding and get most enjoyment from solving problems and building things all by myself.
                    I love learning so I'm every day, I strive to learn and increase my knowledge, skills, and experience in the fields of computer science!</p>
                </div>
                <h3>{education} Education</h3>
                <div className="info">
                    {
                        educationList.map(
                            (education, index) =>
                                <div key={index}>
                                    {
                                        education.name && <p><strong>{education.name}</strong></p>
                                    }
                                    {
                                        education.date && <p className="text">{date} {education.date}</p>
                                    }

                                    {education.location && <p className="text">{location} {education.location}</p>
                                    }
                                    {
                                        education.honours && <p className="text">{honours} {education.honours}</p>
                                    }
                                </div>
                        )
                    }
                </div>
                <h3>{experience} Experience</h3>
                <div className="info">
                    {
                        experienceList.map((experience, index) =>
                            <div key={index}>
                                {
                                    experience.name && <p><strong>{experience.name}</strong></p>
                                }
                                {
                                    experience.date && <p className="text">{date} {experience.date}</p>
                                }
                                {
                                    experience.location && <p className="text">{location} {experience.location}</p>
                                }
                                {
                                    experience.role && <p className="text">{role} {experience.role}</p>
                                }
                            </div>
                        )
                    }
                </div>

                <h3>{publication} Publications</h3>
                <div className="info">
                    {
                        publicationsList.map((publication, index) =>
                            <div key={index}>
                                {
                                    publication.name && <p><strong>{publication.name}</strong></p>
                                }
                                {
                                    publication.date && <p className="text">{date} {publication.date}</p>
                                }
                                {
                                    publication.location && <p className="text">{location} {publication.location}</p>
                                }

                            </div>
                        )
                    }
                </div>
                <h3>{interest} Interests</h3>
                <div className="info">
                    {
                        interestsList.map((interest, index) =>
                            <div key={index}>
                                <p><strong>{check} {interest}</strong></p>
                            </div>
                        )
                    }
                </div>
                <h3>{skills} My Skills</h3>
                <div className="info">
                    {
                        skillsList.map((skill, index) =>
                            <div key={index}>
                                <p>
                                    <strong>{skill.name}</strong>
                                </p>
                                <div>
                                    {
                                        (skill.links).map((link, index) =>
                                            <img key={index} className="space" src={link} alt='img-skill' />
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </section>
    );
}

export default About;