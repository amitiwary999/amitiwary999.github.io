import React, { Component } from 'react'
import image from '../media/amit_img.png'
import wallofufame from '../media/projects/wallofufame.png'
import CutSong from '../media/projects/cutsong.png'
import ImageConverter from '../media/projects/imageconverter.jpg'
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
                <div className="row">
                  <div className="ml-md-2 mx-auto">
                    <a
                      className="social p-1"
                      href="https://twitter.com/Tiwarya9Amit"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
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
                I am an Android Developer and have been in the field since over
                two year and being an avid Open Source lover, the source code to
                most of my apps can be easily found on my GitHub. Currently, I
                work at{" "}
                <a href="https://www.linkedin.com/company/superproai/">
                  Superpro.ai
                </a>{" "}
                as Software Engineer. I have done my B.Tech from MAKAUT, Kolkata
                majoring in Computer Science and Engineering.
                <br />
                <br />
                Apart from Android, I've also wrote some python script mainly
                related to webscraping. When I am not coding, I love to listen
                music or sort stories and watching stand-up comedy show
              </p>
            </div>
            <div className="card p-4">
              <p className="sections-title">Latest Projects</p>
              <div className="row">
                <div className="col-sm-4">
                  <img className="project-img" src={wallofufame} />
                </div>
                <div className="col-sm-8">
                  <p className="job-title-header"> Wall-of-U-Fame</p>
                  <p>
                    An Android app for chating and posting some stuff. User can post pictures or text and can also chat with other users. They can like unlike each others post. User can chat and see post of user having mail id of same domain. So who used gmail id for creating account can chat and see post of user who also used gmail mail id for creating account.
                    I used Firebase for storing users information, posts and chat.

                    Note: I am devloping my owns server for this project using Node.js and MySql(WIP). So I am making some change in this project. And also I built a react native version of this app.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-4">
                  <img className="project-img" src={wallofufame} />
                </div>
                <div className="col-sm-8">
                  <p className="job-title-header"> Wall-of-U-Fame-Server</p>
                  <p>
                    This is backend code for my project Wall-of-U-Fame. I using Node.js and Mysql in this project
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-4">
                  <img className="project-img" src={CutSong} />
                </div>
                <div className="col-sm-8">
                  <p className="job-title-header"> CutSong</p>
                  <p>
                    An Android app for creating ringtone. User can create ringtone either from a song present in mobile or user can record a voice in app and then create ringtone from it.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-4">
                  <img className="project-img" src={ImageConverter} />
                </div>
                <div className="col-sm-8">
                  <p className="job-title-header">ImageConverter</p>
                  <p>
                    An Android App to convert any image and .doc file to pdf and also any pdf file to image.
                    The Android App lets user select multipe image file and made a single pdf file and also convert different page of pdf file in different image. I am working on this project, so currently it is private repository.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
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
              <p className="sections-title">Work Experience</p>
              <p className="job-title-header">
                Software Engineer -{" "}
                <span className="job-company-name">
                  {" "}
                  <a href="https://www.linkedin.com/company/superproai/">
                    Superpro.ai
                  </a>{" "}
                  (june 2018 - present)
                </span>
              </p>
              <p>
                I build the Real-time chat app from scratch using RxJava,
                Kotlin, Android Jetpack library, Material design and some 3rd
                party libraries. I am leading the Android developer team.
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