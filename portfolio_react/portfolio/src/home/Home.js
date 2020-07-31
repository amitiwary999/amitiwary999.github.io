import React, { Component } from 'react'
import image from '../media/amit_img.png'
import './home.scss'

function Home(props) {

    return (
      <div className="container-fluid">
        <div className="row pt-5 pb-5">
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
              <p className="font-weight-bold">About Me</p>
              <p>I am an Android Developer and have been in the field since over two year and being an avid Open Source lover, the source code to most of my apps can be easily found on my GitHub.
              Currently, I work at Joynt as Software Engineer.
              I have done my B.Tech from MAKAUT, Kolkata majoring in Computer Science and Engineering.
              <br />
              <br />
              Apart from Android, I've also wrote some python script mainly related to webscraping.
When I am not coding, I love to listen music or sort stories and watching stand-up comedy show</p>
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