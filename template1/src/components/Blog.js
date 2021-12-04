import React, { Component } from 'react';
import logo from '../images/cocount.png';
import eye from '../images/eye.png';
import '../styles/blog.css';

export class blog extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt="banner" width="100%" />
        <br />
        <div className="container">
          <h2 className="meta">The 29META Blog</h2>
          <img className="banner" src={eye} alt="banner" width="50%" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <div className="circle">
                <i class="fas fa-user-alt fa-5x justify-content-center mt-4"></i>
              </div>
              <p className="blogpara">
                This blog is about people and personal freedoms, data, data
                privacy and paid media campaign tracking. We likely will discuss
                many issues relating to data, tracking and advertising at
                random. Especially how companies are using data for data-driven
                strategies. Along with how these companies sell and resell first
                party audience data for their own monetization schemes.
              </p>
              <p className="blogpara">
                And, you are welcome to comment here and via email. We welcome
                your input and suggestions. Send us their own reactions and
                responses at anytime you feel the urge. But, please, play nice!
                We are a sensitive bunch of humans just enjoying the journey
                like everyone else on the planet.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <h4 className="curated">ORIGINAL AND CURATED CONTENT</h4>
              <p className="originalpara">
                One thing all media campaigns and marketing activities should
                have in common is that they stem from a simple keyword and key
                selling statement or keyword phrase. The next common trait or
                core characteristic should be proper alignment of all marketing
                and paid media efforts with goals of the brand and support
                overall business objectives. If your own paid media efforts seem
                out of whack it is probably because something is askew so no
                matter how many leads or new visits your ads drive to your
                landing pages -it is highly unlikely you will realize a positive
                ROAS or Return on Ad Spend.{' '}
              </p>
              <p className="originalpara">
                At 29Meta, we understand how all parts of the brand and business
                marketing machine and have been around far longer than even the
                SEO industry. Experience makes a difference when you get down to
                the undeerlying reasons and goals of your advertising effort and
                each Call To Action and every ad copy should be aligned with
                your interests. How do we know? We do an initial data analysis
                findings, chosen keyword(s) and key selling statements along
                with campaign goal form a foundation for every marketing
                campaign or paid media advertisement we produce. We firmly
                believe all parts work together as a whole to support the brand
                and business.{' '}
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <h4 className="letus">Let Us Look How Some Brands Use Rich Media:</h4>
          <h4 className="letus">Beginning With Youtube...</h4>
          <p className="lookpara">
            Take a look at some of our favorite Youtube Advertisements
          </p>
          <p className="text-center ">Here's a great example: </p>
          <p className="videopara">
            Consider the YouTube video below to see how an automobile is built
            piece by piece and you will begin to imagine how our campaigns are
            designed.
          </p>
          <div className="box">
            <i
              class="fas fa-play-circle fa-5x ml-mt-5"
              style={{ color: 'red ' }}
            ></i>
          </div>
          <p className="noticepara">
            If you notice in this YouTube video posted by The Used Car Guy, you
            will see how each piece and part of a vehicle has a role in the
            overall performance and operation of the car. To properly perform at
            top functionality, each piece has a part it must play in the
            overall. This is how 29Meta sees digital and especially media
            campaigns.
          </p>
          <p className="noticepara">
            There are many parts which make up the whole of a brand's online
            visibility online. And, it begins with something as simple as a
            keyword.{' '}
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <div className="youtube">
                {' '}
                <i
                  class="fab fa-youtube fa-5x mt-5"
                  style={{ color: 'red ' }}
                ></i>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <h3>Creativity Starts Here!</h3>
              <p>
                When ordinary static paid media no longer delivers positive
                results for marketing campaigns, it's time to turn up the heat
                on competitors using creativity.
              </p>
              <p>
                Rich media offers brands an opportunity to build new online
                channels that drive quality leads. Isn't it time you begin
                advancing your brand marketing? Why not let 29Meta show you how
                a small investment in rich media can grow your customer base?
                It's time to evolve!{' '}
              </p>
            </div>
          </div>
          <h3 className="text-center">Expainer Videos on Youtube Channels</h3>
          <p className="text-center">
            There are many ways to use rich media, especially video advertising
            to grow online sales and offer service and support to consumers.
            Above is a past client, Ozark River Portable Sinks, explainer video.
          </p>
        </div>
      </div>
    );
  }
}

export default blog;
