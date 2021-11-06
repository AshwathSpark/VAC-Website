import React from "react"
// import Image from "gatsby-image"
import image from "../../events/substance.jpeg";

const SingleEvent = ({
  poster,
  posterTitle,
  eventName,
  eventDate,
  eventDesc,
}) => {
  return (
    <>
      <div className="event">
        <div className="event-poster">
          <div className="poster-img">
            {/* <Image className="gray-scale" fluid={poster} alt={posterTitle} /> */}
            <img src={image} className="gray-scale" style={{width:'500px',height:'500px'}} alt="event" />
          </div>
        </div>
        <div className="event-details">
          <h3 className="event-name">Intro to Premiere Pro</h3>
          <h4 className="event-date">
            <span className="date-svg">
              <svg
                width="23"
                height="25"
                viewBox="0 0 23 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5417 13.5H11.5V19.5417H17.5417V13.5ZM16.3333 0.208374V2.62504H6.66667V0.208374H4.25V2.62504H3.04167C1.70042 2.62504 0.637083 3.71254 0.637083 5.04171L0.625 21.9584C0.625 23.2875 1.70042 24.375 3.04167 24.375H19.9583C21.2875 24.375 22.375 23.2875 22.375 21.9584V5.04171C22.375 3.71254 21.2875 2.62504 19.9583 2.62504H18.75V0.208374H16.3333ZM19.9583 21.9584H3.04167V8.66671H19.9583V21.9584Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="date"> 29/08/2021 : 4:30 PM - 6:30 PM</span>
          </h4>
          <div
            className="event-desc"
          >Vivifying images and 3D models with the help of textures, vector graphics, edited noise and tweakable materials give complexity and detail to any animated sequence. All of these factors are important to retain the viewer's attention till the very end of your animated masterpiece. Have you ever wondered how the golden idol in the Temple Run game was designed? Do you also yearn to make such spectacular and incredible textures? To give you all a deeper insight on 'texturing', VIT Animation Club presents to you an event on the fundamentals of the software tool "Substance Painter". Substance Painter is a widely used texturing tool in the animation industry. 
          <br/><br/>
          <a href="https://meet.google.com/gnd-sgqu-bob">Meeting Link</a> <br/>
          <a href="https://www.facebook.com/154884601259238/posts/4327131110701212/">Facebook</a><br/>
          <a href="https://www.instagram.com/p/CTB03xMKrzg/?utm_medium=copy_link">Instagram</a><br/>
        </div><br/><br/>
        <hr />
      </div>
    </div>
    </>
  )
}

export default SingleEvent
