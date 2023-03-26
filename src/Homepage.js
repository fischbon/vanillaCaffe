import "./css/Homepage.css"
import React from "react";
import ReactPlayer from 'react-player/file'

function Homepage(){
    return(
        <div className="homepage">
            <div className="ad">
                <img
                 id="background"
                 src={require("./components/img/background.jpg")}
                 alt="coffe beans bacground">    
                 </img>
                <div className="video">
                    <ReactPlayer
                    url={require("./components/img/ad.mp4")}
                    controls={true}
                    playing={true}
                    volume={0.5}
                    muted={true}
                    alt="vanilla caffe ad"
                    >                    
                    </ReactPlayer>
                </div>
            </div>

            <div className="article">
                <div className="articlePhoto">
                    <img 
                    src={require("./components/img/manhattan-star.jpeg")}
                    id="manhattanStar"
                    alt="manhattan star caffe"
                    ></img>
                </div>
                <div className="articleContent">
                    <h1>Enjoy yourself with our newest position in menu "Manhattan star"</h1>
                    <p> Manhattan Star is a premium coffee blend that captures the essence of the bustling city that never sleeps. 
                        With rich, bold flavors and a smooth finish, this coffee is the perfect pick-me-up for those who demand the best. 
                        Crafted with carefully selected beans from around the world, Manhattan Star is a true testament to the art and science of coffee making. 
                        Enjoy the bold flavor and irresistible aroma of "Manhattan Star" today and experience a taste of the city that never disappoints.
                    </p>
                </div>
            </div>

            <div className="article">
                <div className="articleContent">
                    <h1>50% off if u bring a friend with you!</h1>
                    <p> At our coffee shop, we believe that coffee is best enjoyed with friends. 
                        That's why we're excited to offer our customers a fantastic deal - bring a friend and receive 50% off your order!
                        Not only will you enjoy great savings, but you'll also have the opportunity to share your love of coffee with someone new. 
                        So why not invite a friend to join you for your daily caffeine fix and take advantage of this amazing offer? 
                        Visit our coffee shop today and experience the perfect blend of great coffee, good company, and unbeatable savings!
                    </p>
                </div>
                <div className="articlePhoto">
                    <img 
                    src={require("./components/img/twoCoffe.jpg")}
                    id="invitePhoto"
                    alt="manhattan star caffe"
                    ></img>
                </div>
            </div>
        </div>
    )
}

export default Homepage;