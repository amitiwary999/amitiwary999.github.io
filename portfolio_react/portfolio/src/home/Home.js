import React, { Component } from 'react'
import image from '../media/amit_img.png'
import './home.scss'

function Home(props) {

    return (
      <div className="container">
        <div className="row pt-3 pb-3 pl-3 mb-3  bg-white">
          <div className=" col-md-8 text-center">
            <div className="row">
              <img src={image} className="profile-image img-responsive" />
              <div className="col my-auto">
                <h1 className="text-md-left text-sm-center">Amit Tiwary</h1>
                <div className="row">
                  <div className="ml-md-2 mx-auto">
                    <a className="social p-1" href="https://twitter.com/Tiwarya9Amit">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a className="social p-1 ml-1" href="https://linkedin.com/in/amit-tiwary-8bb081103/">
                      <i className="fa fa-linkedin"></i>
                    </a>                                  
                    <a className="social p-1 ml-1" href="https://github.com/amitiwary999">
                      <i className="fa fa-github"></i>
                    </a>              
                    <a className="social p-1 ml-1" href="https://stackoverflow.com/users/5216062/amit-tiwary">
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
              <p>I am an Android Developer and have been in the field since over two year and being an avid Open Source lover, the source code to most of my apps can be easily found on my GitHub.
              Currently, I work at <a href="https://www.linkedin.com/company/superproai/">Superpro.ai</a> as Software Engineer.
              I have done my B.Tech from MAKAUT, Kolkata majoring in Computer Science and Engineering.
              <br />
              <br />
              Apart from Android, I've also wrote some python script mainly related to webscraping.
When I am not coding, I love to listen music or sort stories and watching stand-up comedy show</p>
            </div>
            <div className="card mt-4 p-4">
              <p className="sections-title">Work Experience</p>
              <p className="job-title-header">Software Engineer - <span className="job-company-name"> <a href="https://www.linkedin.com/company/superproai/">Superpro.ai</a> (june 2018 - present)</span></p>
              <p>I build the Real-time chat app from scratch using RxJava, Kotlin, Android Jetpack library, Material design and some 3rd party libraries. I am leading the Android developer team.</p>

              <p className="job-title-header">Android App Developer Intern - <span className="job-company-name">Samosa Labs (Feb 2018 - April 2018)</span></p>
              <p>I worked on Samosa Android app. My job was to update their android app according to new design, implement new features and remove bugs.</p>

              <p className="job-title-header">Student Developer - <span className="job-company-name"> <a href="https://summerofcode.withgoogle.com/archive/2017/projects/5127065938427904/">GSoC 2k17</a> (May 2017 - August 2017)</span></p>
              <p>I was a Google Summer of Code Participant at FOSSASIA.
              My job at FOSSASIA was to develop SUSI Android app. The main feature of the app is to provide a conversational interface to provide intelligent answers using the loklak/AskSusi infrastructure.
Alongwith app, I also create some skills for SUSI.</p>
            </div>
          </div>
          <div>
            <div className="card md-3">

            </div>
          </div>

        </div>

      </div>

    );
}

export default Home