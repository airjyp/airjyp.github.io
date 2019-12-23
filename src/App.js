import React, {Component} from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
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
    resumeData: {}
  };

  getResumeData(){
    $.ajax({
      url:'resumeData.json',
      dataType:'json',
      cache: false,
      success: data => {
        console.log('Get Data success: ', data)
        this.setState({resumeData: data});
      },
      error: (xhr, status, err) => {
        console.log('Get data failed: ', err);
        alert(err);
      }
    });
  }
  componentDidMount(){
    this.getResumeData();
  }

  render() { 
    const {resumeData} = this.state;
    return (
      <div className="App">
        <Header data={resumeData.main}/>
        <About data={resumeData.main}/>
        <Resume data={resumeData.resume}/>
        {/* <Portofolio data={resumeData.portfolio}/>
        <Testimonials data={resumeData.testimonials}/> */}
        <Contact data={resumeData.main}/>
        <Footer data={resumeData.main}/>
      </div>
    );
  }
}
 
export default App;