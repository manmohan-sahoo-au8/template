import React from 'react';
import avtar from '../images/avtar.png';
import savtar from '../images/savtar.png';
import choose from '../images/choose.png';
import question from '../images/question.png';
import food from '../images/food.png';
import watch from '../images/watch.png';
import review1 from '../images/review1.png';
import review2 from '../images/review2.png';
import review3 from '../images/review3.png';
import { Card } from 'react-bootstrap';
import '../styles/page.css';

export default class Page extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <p className="text-danger">welcome to [company name]</p>
          <h1 className="build">We Build Amazing DESIGN</h1>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus, ut
            quam pellentesque libero, posuere. In elementum praesent amet,
            mauris morbi adipiscing ultrices. Viverra aliquet dignissim vitae
            sagittis nullam urna, feugiat.
          </p>
          <button className="get">Get Started</button>
          <button className="how">How it work</button>
          <img className="img" src={avtar} alt="avtar" width="100%" />
        </div>
        <button className="about">About us</button>
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <h1 className="engage">
                Engaging new audience through smart approach
              </h1>
              <h4 className="lorem">H3 subheading Lorem ipsum dolor sit</h4>
              <p className="lorempara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis
                augue sem eu pretium, quam faucibus. Aliquam vulputate diam quis
                sed varius. Faucibus sagittis magna molestie congue.
              </p>
              <button className="details">Know Details</button>
            </div>
            <div className="col-md-4 text-center">
              <img src={savtar} alt="savtar" width="100%" />
            </div>
            <div className="col-md-4 text-center">
              <h1 className="unique">Our Unique Selling Proposition</h1>
              <div className="iclass">
                <i class="fas fa-file-download">Innovative concepts</i>
                <br />
                <i class="far fa-clock">24*7 Services Available</i>
                <br />
                <i class="far fa-clock">On-time Delivery</i>
                <p className="lorempara">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mollis augue sem eu pretium, quam faucibus.
                </p>
                <button className="details">Explore all Services</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="project">Projects</button>
          <h2>Our project for clients</h2>
          <p className="projectpara">
            consectetur adipiscing elit. Lobortis diam vivamus vitae vulputate
            aliquet dictumst netus. Nisl tortor, sed donec quam.
          </p>
          <div className="parent">
            <img className="choose" src={choose} alt="choose" width="50%" />
            <img className="food" src={food} alt="food" width="50%" />
            <img className="watch" src={watch} alt="watch" width="50%" />
          </div>
        </div>
        <div className="container">
          <button className="blog">Blogs</button>
          <h2 className="from">From the Blogs</h2>

          <div className="row">
            <div className="col-md-4">
              <Card
                style={{
                  width: '18rem',
                  boxShadow: '16px 3px 29px 5px rgba(0, 0, 0, 0.15)',
                }}
              >
                <Card.Img variant="top" src={review1} />
                <Card.Body>
                  <Card.Title>H3 subheading Lorem ipsum dolor sit</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mollis augue sem eu pretium, quam faucibus. Aliquam
                    vulputate diam quis sed varius.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 text-center">
              <Card
                style={{
                  width: '18rem',
                  boxShadow: '16px 3px 29px 5px rgba(0, 0, 0, 0.15)',
                }}
              >
                <Card.Img variant="top" src={review2} />
                <Card.Body>
                  <Card.Title>H3 subheading Lorem ipsum dolor sit</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mollis augue sem eu pretium, quam faucibus. Aliquam
                    vulputate diam quis sed varius.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4 text-center">
              <Card
                style={{
                  width: '18rem',
                  boxShadow: '16px 3px 29px 5px rgba(0, 0, 0, 0.15)',
                }}
              >
                <Card.Img variant="top" src={review3} />
                <Card.Body>
                  <Card.Title>H3 subheading Lorem ipsum dolor sit</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mollis augue sem eu pretium, quam faucibus. Aliquam
                    vulputate diam quis sed varius.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="container">
          <button className="solution">Solutions</button>
          <div className="row">
            <h1 className="perfect">Perfect Solution For Your Business</h1>
            <p className="perfectpara">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis
              augue sem eu pretium, quam faucibus. Aliquam vulputate diam quis
              sed varius.{' '}
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 text-center">
              <Card style={{ width: '18rem' }}>
                <i class="fas fa-chart-line fa-5x"></i>
                <Card.Body>
                  <Card.Title>Grow Your Business</Card.Title>
                  <Card.Text>
                    We always help your company to grow with us
                  </Card.Text>
                </Card.Body>
                <button className="learn">Learn More</button>
              </Card>
            </div>
            <div className="col-md-4 text-center">
              <Card style={{ width: '18rem' }}>
                <i class="fas fa-universal-access fa-5x"></i>
                <Card.Body>
                  <Card.Title>Drive More Sales</Card.Title>
                  <Card.Text>
                    Every company that we handled. We always drive more sales.
                  </Card.Text>
                </Card.Body>
                <button className="more">Learn More</button>
              </Card>
            </div>
            <div className="col-md-4 text-center">
              <Card style={{ width: '18rem' }}>
                <i class="fas fa-brain fa-5x"></i>
                <Card.Body>
                  <Card.Title>Handled By Expert</Card.Title>
                  <Card.Text>
                    You don’t need to worry because we are professional.
                  </Card.Text>
                </Card.Body>
                <button className="learn">Learn More</button>
              </Card>
            </div>
          </div>
        </div>
        <div className="container">
          <button className="faq">FAQ</button>
          <h1>Have question in mind? Let us help you</h1>
          <div className="row">
            <div className="col-sm-6 text-center">
              <img src={question} alt="question" width="50%" />
            </div>
            <div className="col-sm-6 text-center">
              <Card style={{ width: '30rem' }}>
                <Card.Body>
                  <h4>Frequently Asked Question</h4>
                  <p>1.Question lorem ipsum? </p>
                  <p>2.Question lorem ipsum?</p>
                  <p>3.Question lorem ipsum?</p>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
