import React, { Component } from 'react';
import logo from '../images/cocount.png';
import camera from '../images/camera.png';
import cocount from '../images/cocount-small.png';
import tea from '../images/tea.png';
import banner from '../images/banner.png';
import teacher from '../images/teacher.png';
import boat from '../images/boat.png';
import youtube from '../images/youtube.png';
import '../styles/image.css';
import '../styles/home.css';

export class home extends Component {
  render() {
    return (
      <div>
        <img className="image" src={logo} alt="banner" width="100%" />
        <h2 className="service">Our Services</h2>
        <div className="container">
          <p className="cardText">
            29Meta founder has been working as a service provider since 2005 and
            in this span of time has acquired all types of web development
            skills so the possibilities are endless. 29Meta also recently
            partnered with two talented teams in order to round out service
            offerings.
          </p>
        </div>
        <br />
        <div className="container">
          <p className="cardText">
            Our strategic partners along with our 29Meta team round out services
            so that we can offer website design and mobile app development
            services. With these crucial partners at our side we feel we can
            deliver on any type of digital transformation campaign thrown in our
            direction - and do it well, on time, and while keeping our actions
            and campaigns affordable.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <h5 className="data">We Live in Data Driven World</h5>
              <p className="para">
                If you wonder what is happening in the world around you, take a
                moment and consider how what you do contributes to brands and
                companies around the globe which many people seem oblivious to
                just how a simple swipe on an ad or watching a YouTube video is
                being used by external parties who get their hands on it. In
                fact, we believe the vast amount of data alone will surprise
                you. Find out more about how your own data is being used with or
                without your consent.
              </p>
              <img src={camera} alt="camera" width="50%" />
            </div>
            <div className="col-md-6 text-center">
              <img src={cocount} alt="cocount" width="50%" />
              <h5 className="data">To Blog or Not to Blog?</h5>
              <p className="para">
                At 29Meta, we asked ourselves this same question, answered it
                and then decided to switch it up a bit. Blogging and curated
                content are one of the easiest ways to keep a website fresh
                without devoting an unusually large block of time daily. And, by
                curating and mashing up content borrowed from third parties we
                do not necessarily have to commit to serious finanical
                investment either. So, while we do occassionally blog, we prefer
                to highlight those others who deserve recognition for content
                they have developed and published. You can see what we mean
                here.
              </p>
            </div>
          </div>
        </div>

        <div className="container3">
          <div className="row">
            <div className="col-md-3 text-center">
              <img className="img" src={banner} alt="banner" width="50%" />
              <p className="text-light">Paid Media Campaign</p>
              <p className="text-light">Plan, Build, Optimize</p>
            </div>
            <div className="col-md-3 text-center">
              <img className="img" src={tea} alt="tea" width="50%" />
              <p className="text-light">Branding, Reputation, Awareness</p>
            </div>
            <div className="col-md-3 text-center">
              <img className="img" src={boat} alt="boat" width="50%" />
              <p className="text-light">SaaS & mobile App Development</p>
            </div>
            <div className="col-md-3 text-center">
              <img className="img" src={teacher} alt="teacher" width="40%" />
              <p className="text-light">Digital Transfomation Stratergies</p>
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="pro">Go Pro:</h2>
          <h2 className="pro">User-Centric Content</h2>
          <p className="gopro">
            GoPro brand was the first example of truly exceptional user centric
            content marketing.
          </p>
          <h4 className="how">How did they do it?</h4>
          <p className="paragraph">
            They simply asked. Eager GoPro owners were happy to oblige and set
            forth uploading and publishing footage taken using their own GoPro
            camera. Soon, GoPro began hosting competitions and offering prizes
            to winners who posted the most captivating examples. Soon GoPro
            shares rose and they became a brand name recognized around the
            globe.{' '}
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <h5 className="digital">
                Digital Marketing & go Pro Youtube Channel
              </h5>
              <p className="cardpara">
                GoPro is obviously an exceptional player in rich media and they
                made their customers stars of their video channel at YouTube.{' '}
              </p>
              <h4 className="brand">
                What is your brand doing in this category?{' '}
              </h4>
              <p className="cardpara">
                Rich media, and especially video is growing at a faster pace now
                than ever before. Isn't it time you get creative and put rich
                media to work for your brand? 29Meta can help!
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img src={youtube} alt="cocount" width="80%" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default home;
