import { useState, useEffect } from "react";

import profile from '../DevFolio/assets/img/sobur.png'

import { BsFacebook, BsFillBarChartFill, BsBriefcase } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BiCurrentLocation } from 'react-icons/bi'
import { FaArrowUp, FaBootstrap, FaCode, FaReact } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import { BiLogoJquery, BiSolidPhoneCall } from 'react-icons/bi'
import Data from "../Component/data/Data";
import AOS from 'aos';
import 'aos/dist/aos.css'

const Home = () => {

  const [items, setitems] = useState(Data)
  const [show, setShow] = useState(true)
  console.log(Data)

  const filterCategory = (categItem) => {
    const update = Data.filter((curElm) => {
      return curElm.category === categItem;

    })
    setitems(update)
  }


  const pageTop = () => {
    if (window.scrollY > 200) {
      setShow(false)
    }
    else {
      setShow(true)
    }
  }

  const topPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  window.addEventListener("scroll", pageTop)


  useEffect(() => {
    AOS.init();
  }, [])


  return (


    <>

      <section id="about" className="about-mf sect-pt4 route">
        <div className="container-xxl">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">

                  <div className="col-md-6" data-aos="fade-up">


                    <div className="row justify-content-between align-items-center" >
                      <div className="col-sm-6 col-md-4">
                        <div className="about-img">
                          <img src={profile} className="img-fluid rounded b-shadow-a" alt="" />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-7 ">
                        <div className="about-info d-flex flex-column gap-3">
                          <p><span className="title-s">Name: </span> <span>Abdus Sobur</span></p>
                          <p><span className="title-s">Profile: </span> <span>Front End Web Developer</span></p>
                          <p><span className="title-s">Email: </span> <span>Mdabdussobur105@gmail.com</span></p>
                          <p><span className="title-s">Phone: </span> <span>(+880) 1645726503</span></p>
                        </div>
                      </div>
                    </div>

                    <div className="skill-mf mb-2">
                      <p className="title-left   pt-5 mb-3">Skill</p>
                      <span>HTML</span> <span className="pull-right">95%</span>
                      <div className="progress">
                        <div class="progress-value"></div>
                      </div>
                      <span>CSS3</span> <span className="pull-right">90%</span>
                      <div className="progress">
                        <div class="progress-css"></div>

                      </div>
                      <span>JAVASCRIPT</span> <span className="pull-right">85%</span>
                      <div className="progress">
                        <div class="progress-js"></div>


                      </div>
                      <span>REACT JS </span> <span className="pull-right">85%</span>
                      <div className="progress">
                        <div class="progress-react"></div>

                      </div>
                      <span>BOOTSTRAP</span> <span className="pull-right">90%</span>
                      <div className="progress">
                        <div class="progress-bot"></div>



                      </div>
                      <span>JQUREY</span> <span className="pull-right">60%</span>
                      <div className="progress">
                        <div class="progress-jq"></div>


                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 pt-4 pt-lg-0 pt-xxl-0" data-aos="fade-down">
                    <div className="about-me pt-2 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">
                          About me
                        </h5>
                      </div>
                      <p className="lead lh-2">
                        <p>Assalamu Walaikum. I think your health is good now.</p>


                        <p>   Hi dear sir or ma'am, <br /> My name is abdus sobur. I am professional Front-End web developer. Over 2 years+ of experience in Front-End web development.</p>

                        <p> I have been working as a FRONT END developer and BACK END Web developer having a strong command of any design format conversion into Html, CSS, and Bootstrap, React js ,Next js and (PSD to HTML, xd to HTML, Sketch to HTML, zeplin to HTML, Figma to HTML, etc) and have very strong skills in React JS. I can proudly assist you with Html5, Css3, Bootstrap, Javascript and React JS. Responsive Web templates, Mobile templates, front-end development, and all front-end related technologies.

                        </p>
                        <p>Thank you,</p>
                        <p>Abdus Sobur </p>
                      </p>

                      <div className="mt-4 text-center">
                        <button className="btn-6 custom-btn"><span>Download cv</span></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* sevices ------------------------------*/}




      <section id="services" className="services-mf pt-5 route">
        <div className="backImg">ss</div>
        <div className="container-xxl wrapper_service ">
          <div className="row mb-5">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">
                  Services
                </h3>
                <p className="subtitle-a">
                  I'm always try to my best work for my client
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="service-box" data-aos="filp-down">
                <div className="service-ico">
                  <span className="ico-circle"><FaCode /></span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Web Development</h2>
                  <p className="s-description text-center">
                    Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box" data-aos="filp-up">
                <div className="service-ico">
                  <span className="ico-circle"><FaReact /></span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">React Js</h2>
                  <p className="s-description text-center">
                    Create user interfaces from components
                    React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box" data-aos="fade-down">
                <div className="service-ico">
                  <span className="ico-circle"> <FaBootstrap /></span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Bootstrap</h2>
                  <p className="s-description text-center">
                    Build fast, responsive sites with Bootstrap
                    Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life .
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box" data-aos="fade-up">
                <div className="service-ico">
                  <span className="ico-circle"><BiLogoJquery /> </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">jQurey</h2>
                  <p className="s-description text-center">
                    jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler .
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box" data-aos="filp-up">
                <div className="service-ico">
                  <span className="ico-circle"> <BsFillBarChartFill /></span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Convert Html</h2>
                  <p className="s-description text-center">
                    I am a expert convert figma to html css bootstrap responsive developer. I will convert your files into responsive pages using bootstrap or custom CSS according ...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box" data-aos="fade-up">
                <div className="service-ico">
                  <span className="ico-circle"><SiNextdotjs /></span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Next Js</h2>
                  <p className="s-description text-center">
                    The React Framework for the Web
                    Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* portfolio---------------------------------------- */}




      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container-xxl">
          <div className="row mb-5">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">
                  Portfolio
                </h3>
                <p className="subtitle-a">
                    my latest working project here
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <div className="item_link d-flex align-items-center flex-wrap flex-grow-1 gap-2 gap-lg-5 gap-md-5 gap-xxl-5 text-capitalize ">
                    <span className="link" onClick={() => setitems(Data)}>all</span>
                    <span className="link" onClick={() => filterCategory("commrece")}>e commrece</span>
                    <span className="link" onClick={() => filterCategory("Portfolio")}>Portfolio</span>
                    <span className="link" onClick={() => filterCategory("Agency")}> Agency</span>
                    <span className="link" onClick={() => filterCategory("education")}>education</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {
              items.map((elm, index) => {


                return (
                  <div className="col-md-3 " key={index}>
                    <div className="work-box " data-aos="fade-up"
                      data-aos-duration="3000">
                      <a href="/" data-gallery="portfolioGallery" className="   portfolio-lightbox text-decoration-none">
                        <div className="work-img img_view">
                          <img src={elm.img} alt="" className="img-fluid " />
                        </div>
                      </a>
                      <div className="work-content p-3">
                        <div className="row">
                          <div className="col-sm-12">
                            <h2 className="w-title mb-1">{elm.title}</h2>

                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <a href="portfolio-details.html"> <span className="bi bi-picon_list"></span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }


          </div>
        </div>
      </section>


      {/* contact -------------------------- */}
      <section id="contact" className="w-100 overflow-hidden  "  >
        <div className="backImg"></div>

        <div className="container-xxl mt-5 wrapper_container ">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact_wrapper" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6" data-aos="flip-down"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine">
                      <div className="title-box-2">
                        <h5 className="title-left">
                          Send Message Us
                        </h5>
                      </div>
                      <div>
                        <form action="form">
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                              </div>
                            </div>

                            <div className=" text-center my-4">
                              <button type="submit" className="btn-7 "><span>Send Message</span></button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6" data-aos="flip-up">

                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">
                          Get in Touch
                        </h5>
                      </div>
                      <div className="more-info">

                        <div className="w-100  ">
                          <iframe style={{width:"100%", height:"300px"}}  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862606.8418337225!2d87.50312821977565!3d24.245136612164405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcfd3ee3853bc9%3A0xe4c7ec17f9db21f2!2sFasitola%20Bus%20Stop!5e0!3m2!1sen!2sbd!4v1691766156287!5m2!1sen!2sbd" frameborder="0"></iframe>

                         

                        </div>

                        <ul className="list-ico text-uppercase">
                          <li><span><BiCurrentLocation /></span>fasitola, GObindagonj, ghaibandha</li>
                          <li><span ><BiSolidPhoneCall /></span> (+880) 1645726503</li>
                          <li ><span  ><BsBriefcase /></span> mdabdussobur105@gmail.com</li>
                        </ul>
                      </div>
                      <div className="social_icon mt-2">
                        <ul className='d-flex gap-3'>
                          <li><a href="/"><span ><BsFacebook className="icon_list" /> </span></a></li>
                          <li><a href="/"><span ><BsInstagram className="icon_list" /></span></a></li>
                          <li><a href="/"><span ><BsTwitter className="icon_list" /></span></a></li>
                          <li><a href="/"><span ><BsLinkedin className="icon_list" /></span></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id={show ? "pageTop show_page" : "pageTop"}>
        <div>
          <span onClick={topPage}><FaArrowUp className="page_item" /></span>
        </div>

      </section>

    </>
  )
}

export default Home;