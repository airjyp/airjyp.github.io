import React from 'react';

const About = (props) => {
   const {data} = props;
   if(data){
      var name = data.name;
      var profilepic= 'images/' + data.image;
      var bio = data.bio;
      var street = data.address.street;
      var city = data.address.city;
      var state = data.address.state;
      var zip = data.address.zip;
      var phone= data.phone;
      var email = data.email;
      var hobby = data.hobby.map(hobby => {
         return( <li key={hobby.title}>{hobby.title}</li>)
      })
   }
   return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic" src={profilepic} alt="AIR's avatar" />
            </div>
            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p>{bio}</p>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Contact Details</h2>
                     <p className="address">
                        <span>{name}</span><br />
                        <span>{street}<br />
                              {city} {state}, {zip}
                     </span><br />
                        <span>{phone}</span><br />
                        <span>{email}</span>
                     </p>
                  </div>
                  <div className="columns hobby">
                     <h2>My Hobbies</h2>
                     <p>
                        {hobby}
                     </p>
                  </div>
                  <div className="columns download">
                     <h2>Curriculum Vitae</h2>
                     <p>
                        {/* <a rel="noopener noreferrer" target="_blank" href='https://qrco.de/airjypcvpng' className="button"><i className="fa fa-picture-o"></i>View My CV</a> */}
                        <a rel="noopener noreferrer" target="_blank" href='https://drive.google.com/file/d/11j8sWJ1oVa08YgIXEVDV7jjEJYPoESq7/view?usp=sharing' className="button"><i className="fa fa-download"></i>Download</a>
                        {/* <a rel="noopener noreferrer" target="_blank" href='https://qrco.de/airjypcvpng'><img className="cv" src={downloadCV} alt="AIR's cv" /></a> */}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
 
export default About;