import React, {Component} from 'react';
import ReactGA from 'react-ga';
// import $ from 'jquery';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Resume from './components/Resume/Resume';
// import Portofolio from './components/Portofolio/Portfolio';
// import Testimonials from './components/Testimonial/Testimonials';

ReactGA.initialize('UA-110570651-1');
ReactGA.pageview(window.location.pathname);

class App extends Component {
  state = {
    resumeData: {
      "main": {
        "name":"Achmad Ismail Rivaldi",
        "description":"Hi! My name is Achmad Ismail Rivaldi. I just graduated as a Bachelor's Degree of Computer Sciences at IPB University.",
        "image":"avatar.jpg",
        "bio":"My name is Achmad Ismail Rivaldi. I just graduated as a Bachelor's Degree of Computer Sciences at IPB University. I have experience since 2017 as Android developer and frontend since I did various project during college. My skills are Flutter, PHP, Laravel, MySQL, and good at communication and teamwork. Always eager to learn new things from anyone.",
        "contactmessage":"Write your message here to get in contact with me.",
        "email": "rivaldi@qmail.id",
        "phone": "(+62) 85155020290",
        "address":{
          "street":"Jl. Jeruk No.6, Komplek Arco",
          "city":"Depok",
          "state":"Indonesia",
          "zip": "16518"
        },
        "website": "http://www.ilovemyways.wordpress.com",
        "resumedownload":"https://drive.google.com/a/qmail.id/uc?authuser=1&id=1Nv2DC2bpzaK5J8vjfYbLyTZvphhf5794&export=download",
        "social":[
          {
            "name":"facebook",
            "url":"http://facebook.com/airjyp",
            "className":"fa fa-facebook"
          },
          {
            "name":"twitter",
            "url":"http://twitter.com/airjyp",
            "className":"fa fa-twitter"
          },
          {
            "name":"linkedin",
            "url":"https://www.linkedin.com/in/airjyp/",
            "className":"fa fa-linkedin"
          },
          {
            "name":"instagram",
            "url":"http://instagram.com/airjyp",
            "className":"fa fa-instagram"
          },
          {
            "name":"github",
            "url":"http://github.com/airjyp",
            "className":"fa fa-github"
          }
        ]
      },
      "resume":{
        "skillmessage":"Here you can create a short write-up of your skills to show off to employers",
        "education":[
          {
            "school":"IPB University (Institut Pertanian Bogor)",
            "degree":"Bachelor in Computer Sciences",
            "graduated":"September 2019",
            "description":"Since my college, I have learned about Big Data, Artifical Intelligence, Information System, Software Engineering, etc. And between all of them, I'm interested as a Developer. I've done my research about develop an android application on my script, namely RPPI Mart."
          },
          {
            "school":"SMA Negeri 5 Depok",
            "degree":"Alumnus batch 2015",
            "graduated":"May 2015",
            "description":"On senior high school, I joined a Japanese language club and I'm interested in its culture. I also participated in a teenage scientific club."
          },
          {
            "school":"SMP Negeri 14 Depok",
            "degree":"Alumnus batch 2012",
            "graduated":"2012",
            "description":"During my junior high school, I follow badminton and multimedia extracurricular activities. I was once had experience as a tutor in multimedia extracurriculars"
          },
          {
            "school":"SD Negeri Durenseribu 04",
            "degree":"Alumnus batch 2009",
            "graduated":"2009",
            "description":"My journey was started here. I started to like things about technology"
          }
        ],
        "work":[
          {
            "company":"Koperasi RPPI (Rumah Peradaban Pelajar Indonesia)",
            "title":"Android Developer",
            "years":"January 2019 - July 2019",
            "description":"Do some research and build android apps (RPPI Mart) for customers to order products or goods at RPPI Cooperative."
          },
          {
            "company":"PT Dompet Unikas Indonesia",
            "title":"Web Developer Internship",
            "years":"July 2018 - September 2018",
            "description":"Worked as web developer internship on system called Nobu e-Pav dashboard such as creates new modules, optimizes home and landing pages, and improves the user interface."
          },
          {
            "company":"Institut Pertanian Bogor",
            "title":"Web developer",
            "years":"September 2017 - December 2017",
            "description":"Build information system for manages livestock data, monitoring income and outcome, and feed availibility for livestock on Faculty of Animal Science at IPB University"
          }
        ],
        "organization":[
          {
            "role":"Committee of Prosiding Division on Seminar of AgriBusiness",
            "heldBy":"Department of Agribusiness",
            "years":"2018",
            "description":"This seminar was held by Head of Agribusiness Department and collaborated with Agribusiness Information System courses."
          },
          {
            "role":"Committee of Events on Himpunan Mahasiswa Ilmu Komputer (HIMALKOM)",
            "heldBy":"Department of Computer Sciences",
            "years":"2017",
            "description":"An event of computer science that held by Himalkom to welcome new computer science students."
          },
          {
            "role":"Event Division's Committee on Inauguration of Computer Sciences 2016",
            "heldBy":"Department of Computer Sciences",
            "years":"2016",
            "description":"An event that was held for students of Computer Sciences batch 2015."
          }
        ],
        "skills":[
          {
            "name":"HTML",
            "level":"80%"
          },
          {
            "name":"CSS",
            "level":"85%"
          },
          {
            "name":"JavaScript",
            "level":"70%"
          },
          {
            "name":"React",
            "level":"70%"
          },
          {
            "name":"Flutter",
            "level":"80%"
          },
          {
            "name":"Laravel",
            "level":"80%"
          },
          {
            "name":"MySQL",
            "level":"85%"
          },
          {
            "name":"PHP",
            "level":"80%"
          },
          {
            "name":"Photoshop",
            "level":"70%"
          }
        ],
        "achievements":[
          {
            "role":"Speaker on Seminar Ilmiah Ilmu Komputer",
            "date":"April, 27th 2019"
          }
        ]
      },
      "portfolio":{
        "projects": [
          {
            "title":"RPPI MART",
            "category":"A marketplace application based for RPPI",
            "image":"rppi.jpg",
            "url":"https://play.google.com/store/apps/details?id=com.rppimart&hl=en_US"
          },
          {
            "title":"Bantu DESA",
            "category":"Sayembara website",
            "image":"bantudesa.jpg",
            "url":"#"
          }
        ]
      },
      "testimonials":{
        "testimonials":[
          {
            "text":"Here you should write some nice things that someone has said about you. No lies though, employers can tell when you are lying.",
            "user":"Achmad Ismail Rivaldi"
          },
          {
            "text":"Here you should write some nice things that someone has said about you. No lies though, employers can tell when you are lying.",
            "user":"Achmad Ismail Rivaldi"
          }
        ]
      }
    }
  };

  // getResumeData(){
  //   $.ajax({
  //     url:'resumeData.json',
  //     dataType:'json',
  //     cache: false,
  //     success: data => {
  //       console.log('Get Data success: ', data)
  //       this.setState({resumeData: data});
  //     },
  //     error: (xhr, status, err) => {
  //       console.log('Get data failed: ', err);
  //       alert(err);
  //     }
  //   });
  // }
  // componentDidMount(){
  //   this.getResumeData();
  // }

  render() { 
    const {resumeData} = this.state;
    return (
      <div className="App">
        <Header data={resumeData.main}/>
        <About data={resumeData.main}/>
        <Resume data={resumeData.resume}/>
        {/* <Portfolio data={resumeData.portfolio}/>
        <Testimonials data={resumeData.testimonials}/> */}
        <Contact data={resumeData.main}/>
        <Footer data={resumeData.main}/>
      </div>
    );
  }
}
 
export default App;