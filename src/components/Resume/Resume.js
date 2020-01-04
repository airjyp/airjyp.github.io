import React from 'react';

const Resume = (props) => {
  const {data} = props;
  if(data){
    var education = data.education.map(education => {
      return <div key={education.school}><h3>{education.school}</h3>
      <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
      <p>{education.description}</p></div>
    })
    var work = data.work.map(work => {
      return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
      </div>
    })
    var organization = data.organization.map(organization => {
      return <div key={organization.role}><h3>{organization.role}</h3>
          <p className="info">{organization.heldBy}<span>&bull;</span> <em className="date">{organization.years}</em></p>
          <p>{organization.description}</p>
      </div>
    })
    var skills = data.skills.map(skills => {
      return(
        <div key={skills.name}>
          <div style={{marginBottom: 15}}>
            <img style={{borderRadius: "50%", backgroundColor: "rgba(0,0,0,0.0"}} src={skills.img} alt={skills.name} />
            <div style={{backgroundColor: "rgba(0,0,0,0.0"}}>
              <p style={{textAlign: 'center', fontWeight: 'bold'}}>{skills.name}</p>
            </div>
          </div>
        </div>
      ) 
    })
    var achievements = data.achievements.map(achievements => {
      return <div key={achievements.role}><h3>{achievements.role}</h3>
          <p className="info"><em className="date">{achievements.date}</em></p>
      </div>
    })
  }
  return (  
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
            <h1><span>Education</span></h1>
        </div>
        <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
            <h1><span>Work</span></h1>
        </div>
        <div className="nine columns main-col">
          {work}
        </div>
      </div>
      <div className="row organization">
        <div className="three columns header-col">
            <h1><span>Organization</span></h1>
        </div>
        <div className="nine columns main-col">
          {organization}
        </div>
      </div>
      <div className="row achievements">
        <div className="three columns header-col">
            <h1><span>Achievements</span></h1>
        </div>
        <div className="nine columns main-col">
          {achievements}
        </div>
      </div>
      <div className="row skill">
        <div className="three columns header-col">
            <h1><span>Skills</span></h1>
        </div>
      </div>
      <div className="row">
        <div style={{paddingTop: 50, paddingBottom: 50}}>
          <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
            {skills}
          </div>
        </div>
      </div>
      {/* <div className="nine columns main-col">
        <div className="bars">
          <ul className="skills">
            {skills}
          </ul>
        </div>
      </div> */}
    </section>
  );
}
 
export default Resume;