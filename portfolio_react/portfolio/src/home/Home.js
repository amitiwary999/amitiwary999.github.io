import React, { Component } from 'react'
import image from '../media/amit_img.png'
import './home.scss'

function Home(props) {

    return (
      <div className="container-fluid">
        <div className="row pt-5 pb-5">
          <div className="col-8 text-center">
            <div className="row">
              <img src={image} className="profile_image" />
              <div className="col my-auto">
                <h1 className="text-left">Amit Tiwary</h1>
                <div className="row">
                  <div className="social-list">
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
          <div className="col-4 text-center">
            <img src={image} className="profile_image" />
          </div>
        </div>
      </div>

    );
}

export default Home