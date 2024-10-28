import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './responsive.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import logo from './images/logo.svg';
import mark from './images/mark.png';
import product from './images/product.png';
import experience from './images/experience.png';
import expert from './images/expert.png';
import hero from './images/hero.png';
import featureLeft from './images/feature-left.png';
import featureRight from './images/feature-right.png';
import line from './images/line.png';
import s1 from './images/s1.png';
import s2 from './images/s2.png';
import s3 from './images/s3.png';
import s4 from './images/s4.png';
import s5 from './images/s5.png';
import s6 from './images/s6.png';
import s7 from './images/s7.png';
import s8 from './images/s8.png';
import mark1 from './images/mark1.png';
import prod_left from './images/prod_left.png';
import prod_right from './images/prod_right.png';
import smc from './images/smc.png';
import bkash from './images/bkash.png';
import download from './images/download.png';
import mark3 from './images/mark3.png';
import mark4 from './images/mark4.png';
import dotnet from './images/dotnet.png';
import flutter from './images/flutter.png';
import react from './images/react.png';
import angular from './images/angular.png';
import aws from './images/aws.png';
import php from './images/php.png';
import java from './images/java.png';
import vue from './images/vue.png';
import bootstrap from './images/bootstrap.png';
import python from './images/python.png';

function App() {
  return (
    <div className="App">
        <div className="nav_section">
        <Navbar expand="lg" className="header">
          <Container className="container">
            <Navbar.Brand href="#home" className="logo"><img src={logo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='hamburger'/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto menu-section">
                <NavDropdown title="Service" id="basic-nav-dropdown" className="service menu">
                  <NavDropdown.Item href="#s1" className='sub_menu'>Service1</NavDropdown.Item>
                  <NavDropdown.Item href="#s2" className='sub_menu'>Service2</NavDropdown.Item>
                  <NavDropdown.Item href="#s3" className='sub_menu'>Service3</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#technologies" className="technologies menu">Technologies</Nav.Link>
                <NavDropdown title="Products" id="basic-nav-dropdown" className="products menu">
                  <NavDropdown.Item href="#p1" className='sub_menu'>Product1</NavDropdown.Item>
                  <NavDropdown.Item href="#p2" className='sub_menu'>Product2</NavDropdown.Item>
                  <NavDropdown.Item href="#p3" className='sub_menu'>Product3</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#about-us" className="aboutus menu">About us</Nav.Link>
                <Nav.Link href="#industries" className="industries menu">Industries</Nav.Link>
                <Nav.Link href="#case-studies" className="case_studies menu">Case Studies</Nav.Link>
                <Nav.Link href="#career" className='career menu'>Career</Nav.Link>
                <Nav.Link href="#contact"><button className="contact menu">Contact</button></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>

        <section id="banner">
           <Container className="container">
              <div className='banner_page'>
                 <div className="banner_left">
                    <div className="btn_container">
                      <button className='btn1'>Hire Developers</button>
                      <button className='btn2'>Meet our Team</button>
                    </div>
                    <h1>We Deploy Product Teams on Demand</h1>
                    <p>Upscale your business process to deliver superior customer experience and
                    revolutionize your business from top to bottom.</p>
                    <div className='bottom_container'>
                       <div className='mark_container'>
                         <button className='btn3'>Let’s work together <img src={mark}></img> </button>
                       </div>
                       <div className='bottom_right_container'>
                          <div className='product_parent_container'>
                             <div className='product_container'>
                                <img src={product}></img>
                             </div>
                             <div>
                                 <h5 className="prod_num">10+</h5>
                                 <p className="prod_text">Products</p>
                             </div>
                          </div>
                          <div className='experience_parent_container'>
                             <div className='experience_container'>
                                <img src={experience}></img>
                             </div>
                             <div>
                                 <h5 className="experience_num">16+</h5>
                                 <p className="experience_text">Years of Experince</p>
                             </div>
                          </div>
                          <div className='expert_parent_container'>
                             <div className='expert_container'>
                                <img src={expert}></img>
                             </div>
                             <div>
                                 <h5 className="expert_num">60+</h5>
                                 <p className="expert_text">Experts</p>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="hero">
                    <img src={hero}></img>
                 </div>
              </div>
           </Container>
        </section>

        <section className='feature'>
           <Container className="container">
              <h1 className='heading'>Featured Projects</h1>
              <div className='feature_container'>
                 <div className='feature_left'>
                     <img src={featureLeft} className="feature_left_img"></img>
                 </div>
                 <div className="top-right-container">
                     <h3>Banglalink OSRMS</h3>
                     <p className='txt'>Upscale your business process to deliver superior customer experience and revolutionize your business from
                     top to bottom.</p>
                     <div className="top-right-3-container">
                        <div>
                           <h6>10K</h6>
                           <p>Active user</p>
                        </div>
                        <div className='line'>
                           <img src={line}></img>
                        </div>
                        <div>
                           <h6>4.7</h6>
                           <p>App/ Play store Rating</p>
                        </div>
                     </div>
                     <div className='mark_container'>
                         <button className='btn3'>View Case Study <img src={mark}></img> </button>
                      </div>
                 </div>
              </div>
           </Container>
        </section>
        <section className='feature_bottom'>
           <Container className="container">
              <div className='feature_container'>
                 <div className="top-left-container">
                     <h3>LIC Bangladesh</h3>
                     <p className='txt'>Upscale your business process to deliver superior customer experience and revolutionize your business from
                     top to bottom.</p>
                     <div className="top-left-3-container">
                        <div className='leftmost'>
                           <h6>350K+</h6>
                           <p className="smalltxt">Website Traffic</p>
                        </div>
                        <div className='line'>
                           <img src={line}></img>
                        </div>
                        <div>
                           <h6>170+</h6>
                           <p className="smalltxt">Dynamic Pages</p>
                        </div>
                     </div>
                     <div className='mark_container'>
                         <button className='btn3'>View Case Study <img src={mark}></img> </button>
                      </div>
                 </div>
                 <div className='feature_right'>
                     <img src={featureRight} className="feature_right_img"></img>
                 </div>
              </div>
           </Container>
        </section>
        <div className="more_projects">
            <p>Total Project 50+</p>
        </div>
        <div className='more_projects_btn'>
            <button className='btn3'>More Projects <img src={mark}></img> </button>
        </div>

        <section id='services'>
            <div className="service_container">
               <h1>Our Services</h1>
               <div className="parent_div">
                  <div className="txt">Our Web Development Service is a comprehensive solution designed to meet the diverse digital needs of businesses and organizations. Our team of experts has extensive experience in all aspects of software development</div>
               </div>
               <Container>
                 <div className="square_container">
                     <div className="square">
                        <div><img src={s1}></img></div>
                        <h5>Software Development</h5>
                     </div>
                     <div className="square">
                        <div><img src={s2}></img></div>
                        <h5>Apps Development</h5>
                     </div>
                     <div className="square">
                        <div><img src={s3}></img></div>
                        <h5>Website Development</h5>
                     </div>
                     <div className="square">
                        <div><img src={s4}></img></div>
                        <h5>Call Center Solution</h5>
                     </div>
                     <div className="square">
                        <div><img src={s5}></img></div>
                        <h5>Training</h5>
                     </div>
                     <div className="square">
                        <div><img src={s6}></img></div>
                        <h5>IVR</h5>
                     </div>
                     <div className="square">
                        <div><img src={s7}></img></div>
                        <h5>UX Design</h5>
                     </div>
                     <div className="square">
                        <div><img src={s8}></img></div>
                        <h5>SMS Service</h5>
                     </div>
                 </div>
                 <div className='services_btn'>
                    <button className='btn3'>More Services <img src={mark}></img> </button>
                </div>
               </Container>
            </div>
        </section>

        <section id="products">
           <Container>
              <div className='header_container'>
                 <span className="heading">Our Signature Products</span>
                 <button className='prod_btn'>More Products <img src={mark1}></img> </button>
              </div>
              <div className="parent">
                  <div className="left_child">
                     <div className="prod_left">
                         <img src={prod_left} className="prod_left_img"></img>
                     </div>
                     <div className='prod_bottom left'>
                        <h5>fieldforce</h5>
                        <div>
                           <span className='headingTxt'>Implement Company</span>
                           <img className="smc" src={smc}></img>
                           <img className="bkash1" src={bkash}></img>
                           <img className="bkash2" src={bkash}></img>
                           <button className='mark4'>Client Feedback <img src={mark4}></img> </button>
                        </div>
                        <p className='txt'>Field force management software is a solution to manage and optimize the field-based operations of an organization</p>
                        <div>
                           <button className='btn3'>Download Brochure <img src={download}></img> </button>
                           <span>www.fieldforce.work <img src={mark3}></img></span>
                        </div>
                     </div>
                  </div>
                  <div>
                  <div className="prod_right">
                         <img src={prod_right} className="prod_right_img"></img>
                     </div>
                     <div className='prod_bottom right'>
                        <h5>Richfleet</h5>
                        <div>
                           <span className='headingTxt'>Implement Company</span>
                           <img className="smc" src={smc}></img>
                           <img className="bkash1" src={bkash}></img>
                           <img className="bkash2" src={bkash}></img>
                           <button className='mark4'>Client Feedback <img src={mark4}></img> </button>
                        </div>
                        <p className='txt'>Field force management software is a solution to manage and optimize the field-based operations of an organization</p>
                        <div>
                           <button className='btn3'>Download Brochure <img src={download}></img> </button>
                           <span>www.richfleet.com <img src={mark3}></img></span>
                        </div>
                     </div>
                  </div>
              </div>
           </Container>
        </section>

        <section id="technology">
            <div className="parent">
               <h1 className="heading">Technology We Used</h1>
               <div className="parent_div">
                  <div className="txt">Entrusting the new technology to the most advanced programmers will ensure a more robust and high-performing system.</div>
               </div>
               <Container>
                 <div className="square_container">
                        <div><img src={dotnet} className='tech_img first_img'></img></div>
                        <div><img src={flutter} className='tech_img'></img></div>
                        <div><img src={react} className='tech_img'></img></div>
                        <div><img src={angular} className='tech_img'></img></div>
                        <div><img src={aws} className='tech_img last_img'></img></div>
                        <div><img src={php} className='tech_img first_img'></img></div>
                        <div><img src={java} className='tech_img'></img></div>
                        <div><img src={vue} className='tech_img'></img></div>
                        <div><img src={bootstrap} className='tech_img'></img></div>
                        <div><img src={python} className='tech_img last_img'></img></div>
                 </div>
               </Container>
            </div>
        </section>
    </div>
  );
}

export default App;
