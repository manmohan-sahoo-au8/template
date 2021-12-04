import React, { Component } from 'react';
import logo from '../images/cocount.png';
import tea from '../images/tea.png';
import banner from '../images/banner.png';
import teacher from '../images/teacher.png';
import boat from '../images/boat.png';
import box from '../images/box.png';
import '../styles/image.css';
import '../styles/about.css';

export class about extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt="banner" width="100%" />
        <br />
        <div className="container">
          <h2 className="history">Our History</h2>
          <p className="metapara">
            29Meta founding partner, Tanya Thomas, has a long history and proven
            track record working in paid media and is also a certified data
            analyst with subject matter expertise in search engine optimization
            (SEO) Along with a team of creatives and a new web development
            partner, 29Meta offers data-driven strategies backed by extensive
            industry knowledge and experience along with machine learning and AI
            from Google and other top tier brands we deliver paid media
            campaigns and digital marketing that feature fast turnaround and
            success to clients. Most impressive (at least according to us) is
            our approach and process which has an analytics undertone.
          </p>
          <p className="metapara">
            We begin building paid media campaigns using a data-driven approach
            that begins with a thorough data analysis of your industry and it's
            particular field of competitors. Believing that industry leaders
            have insights that will later help shape our own campaigns has
            always been very useful in planning stages. No matter who those
            competitors may be or what industry or product you offer, there are
            definitely better, faster ways we can plan marketing steps and
            deliver results that propel our clients to the top of the field.
            Think of it as a mix of the children's games of "Leap Frog" and
            "King of the Mountain" and you begin to form an idea of how our
            action plans originate. We know they did it well so far but there
            are likely areas we can seriously improve and shorten delivery
            timelines. And, that is just what we do and why we think of
            ourselves as growth hackers.
          </p>
        </div>
        <div className="contactdiv">
          <div className="container">
            <h2 className="get">Get In Touch With Us!</h2>
            <p className="text-center">
              Currently, we are still building this website. You may, however,
              want to go ahead and contact us.{' '}
            </p>
            <div className="row">
              <div className="col-md-6 text-center">
                <p className="emailpara">
                  If you are in a rush and want to speak to us now rather than
                  waiting. Simply click on the profile of your choice:
                </p>
                <p className="contactpara">
                  Contact us via
                  <a href="/">Upwork.com profile.</a>
                </p>
                <p className="contactpara">
                  Contact us via
                  <a href="/">Linkedin.com profile.</a>
                </p>
                <p className="contactpara">or send us an email:</p>
                <button className="button">Email us</button>
              </div>
              <div className="col-md-6 text-center">
                <img className="teacher" src={teacher} alt="teacher" />
              </div>
            </div>
            <h3 className="text-center" style={{ color: '#617D96' }}>
              Want to learn more about us?
            </h3>
            <h3 className="text-center" style={{ color: '#617D96' }}>
              Visit our Blog.
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-center">
              <img className="img" src={box} alt="teacher" width="50%" />
            </div>
            <div className="col-md-3 text-center">
              <img className="img" src={box} alt="teacher" width="50%" />
            </div>
            <div className="col-md-3 text-center">
              <img className="img" src={box} alt="teacher" width="50%" />
            </div>
            <div className="col-md-3 text-center">
              <img className="img" src={box} alt="teacher" width="50%" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default about;
