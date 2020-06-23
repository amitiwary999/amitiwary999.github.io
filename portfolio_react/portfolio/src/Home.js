import React, { Component } from 'react'
import image from "./media/amit_img.png"

function Home(props) {

    return (
        <div className="container">
            <div className="profile_container">
                <img src={image} className="profile_image" />
                <div className="profile_name_social">
                    <h1>Amit Tiwary</h1>
                    <h3 style={{ color: 'grey' }}>Software Engineer</h3>
                    <div className="social_accounts">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home