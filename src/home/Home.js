import React, { Component } from 'react'
import image from '../media/amit_img.png'
import wallofufame from '../media/projects/wallofufame.png'
import CutSong from '../media/projects/cutsong.png'
import ImageConverter from '../media/projects/imageconverter.jpg'
import Browser from '../media/projects/simple_browser.png'
import { Link, Mail, MapPin} from 'react-feather'
import './home.scss'

function Home(props) {

    return (
      <div className="ml-4 mr-4">
        <div className="row pt-3 pb-3 pl-3 mb-3  bg-white">
          <div className=" col-md-7 text-center">
            <div className="row">
              <img src={image} className="profile-image img-responsive" />
              <div className="col my-auto">
                <h1 className="text-md-left text-sm-center">Amit Tiwary</h1>
                <h3 className="text-md-left" style={{color: 'grey'}}>Senior Software Developer</h3>
                <div className="row">
                  <div className="ml-md-2 mx-auto">
                    <a
                      className="social p-1 ml-1"
                      href="https://linkedin.com/in/amit-tiwary-8bb081103/"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a
                      className="social p-1 ml-1"
                      href="https://github.com/amitiwary999"
                    >
                      <i className="fa fa-github"></i>
                    </a>
                    <a
                      className="social p-1 ml-1"
                      href="https://stackoverflow.com/users/5216062/amit-tiwary"
                    >
                      <i className="fa fa-stack-overflow"></i>
                    </a>
                    <a
                      className="social p-1 ml-1"
                      href="https://dev.to/amitiwary999"
                    >
                      <i className="fa fa-blog"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card p-4">
              <p className="sections-title">About Me</p>
              <p>
                I am a Senior Software Engineer. I have 3 and half year of experience as backend developer and 1 and half year experience as an Android App developer. Currently, I
                work at{" "}
                <a href="https://www.arzooo.com/">
                  Arzooo
                </a>{" "}
                as Senior Software Engineer. I have done my B.Tech from MAKAUT, Kolkata
                majoring in Computer Science and Engineering.
                <br />
                <br />
                When I am not coding, I love to write blogs, listen
                music or sort stories and watching stand-up comedy show
              </p>
            </div>
            <div className="card p-4">
              <div className="row">
                <MapPin />
                <p className="ml-2">Bengaluru, Karnataka, India</p>
              </div>
              <div className="row">
                <Mail />
                <p className="ml-2">tiwarya9@gmail.com</p>
              </div>
              <div className="row">
                <Link />
                <a className="ml-2" href="https://amitiwary999.github.io">
                  amitiwary999.github.io
                </a>
              </div>
            </div>
            <div className="card p-4">
              <p className="sections-title">Skills</p>
              <p className="level-title mb-1">
                Node.Js
              </p>
              <div className="level-bar">
                <div className="level-bar-inner" data-level='85%' style={{ width: '85%' }}></div>
              </div>
              <p className="level-title mb-1 mt-3">
                MySQL
              </p>
              <div className="level-bar">
                <div className="level-bar-inner" data-level='75%' style={{width: '75%'}}></div>
              </div>
              <p className="level-title mb-1 mt-3">
                AWS
              </p>
              <div className="level-bar">
                <div className="level-bar-inner" data-level='55%' style={{width: '55%'}}></div>
              </div>
              <p className="level-title mb-1 mt-3">
                JAVA
              </p>
              <div className="level-bar">
                <div className="level-bar-inner" data-level='55%' style={{ width: '55%' }}></div>
              </div>
              <p className="level-title mb-1 mt-3">
                Android
              </p>
              <div className="level-bar">
                <div className="level-bar-inner" data-level='55%' style={{width: '55%'}}></div>
              </div>
              <p className="level-title mb-1 mt-3">
                React
              </p>
              <div className="level-bar">
                <div className="level-bar-inner" data-level='40%' style={{ width: '50%' }}></div>
              </div>
              <p className="level-title mb-1 mt-3">
                Python
              </p>
              <div className="level-bar">
                <div className="level-bar-inner" data-level='35%' style={{ width: '35%' }}></div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-4">

            <p className="job-title-header">
                Senior Software Engineer -{" "}
                <span className="job-company-name">
                  {" "}
                  <a href="https://www.arzooo.com/">
                    Arzooo
                  </a>{" "}
                  (june 2022 - present)
                </span>
              </p>
              <p>
                I work on different team here.
                <li>
                  My first project was with Catalogue team. I worked on moving the Catalogue service separate from the monolithic to handle the load. Catalogue serve the product listing, product details, pricing of product.
                  This service get the <b>maximum load</b> because user comes to see the product first and then buy it. We moved to microservice and I created a middleware in Monolithic code to use the new Catalogue microservice to 
                  communicate between the app and the monolithic backend. It helped us to release our microservice for a few users for testing with backward compatibility. It was released for 1000 user for test and it was a successful release.
                </li>
                <li>
                  After that I worked on backend for the Arzooo app, B2B e-commerce. We give COD and partial pay option to few user and it is one of the feature that <b>drive growth and GMV</b>. I worked on
                  revamp the logic so that business team can decide user and product on which COD and partial pay can be enabled and we can control the misuse of this feature. 
                </li>
                <li>
                  My current project is{" "} <a href="https://gostor.com/">gostor</a>. It is a B2C e-commerce product.  I am working on Category and offer page curation. These pages use to show the 
                  best offers on category and products so that user can find the offers easily and increase the chance of user <b>buying</b> the product. My responsibility is to create backend that can handle 
                  the load when lots of user directly comes to this page and admin dashboard so that business team can manage these pages.
                </li>
              </p>
              
              <p className="job-title-header">
                Senior Software Engineer -{" "}
                <span className="job-company-name">
                  {" "}
                  <a href="https://www.linkedin.com/company/superproai/">
                    Superpro.ai
                  </a>{" "}
                  (june 2018 - june-2022)
                </span>
              </p>
              <p>
                I worked on different technology here. NodeJs, MySQL, Firebase, AWS, Kotlin, Android app development
                <li>
                  I worked on the backend and Android App,{" "} <a href="https://play.google.com/store/apps/details?id=com.vayam.app">Vayam</a>. It's one stop platform to watch religious live stream, religious content and do virtual meeting.
                  Migrate our backend to microservice from monolithic using AWS EC2, Lambda and Amazon SQS tp support 20K people simultaneously in a live stream, send notification and update count of people
                  watching live stream.
                </li>
                <li>
                I build the Real-time chat app, ShutApp, from scratch using RxJava,
                Kotlin, Android Jetpack library, Material design, build a scheduler to add offline support i.e user can send the message even if user is offline and 
                scheduler send message once user comes online or retry to send failed messages.
                </li>
              </p>

              <p className="job-title-header">
                Android App Developer Intern -{" "}
                <span className="job-company-name">
                  Samosa Labs (Feb 2018 - April 2018)
                </span>
              </p>
              <p>
                I worked on Samosa Android app. My job was to update their
                android app according to new design, implement new features and
                remove bugs.
              </p>

              <p className="job-title-header">
                Student Developer -{" "}
                <span className="job-company-name">
                  {" "}
                  <a href="https://summerofcode.withgoogle.com/archive/2017/projects/5127065938427904/">
                    GSoC 2k17
                  </a>{" "}
                  (May 2017 - August 2017)
                </span>
              </p>
              <p>
                I was a Google Summer of Code Participant at FOSSASIA. My job at
                FOSSASIA was to develop SUSI Android app. The main feature of
                the app is to provide a conversational interface to provide
                intelligent answers using the loklak/AskSusi infrastructure.
                Alongwith app, I also create some skills for SUSI.
              </p>
            </div>
            </div>
          </div>
      </div>
    );
}

export default Home