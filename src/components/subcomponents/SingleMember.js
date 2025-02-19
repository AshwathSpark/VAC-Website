import React from "react"
// import Image from "react";
// import Ashwath from 'public/team/ashwath.png'

const SingleMember = ({image, name, reg, branch }) => {
  return (
    <div className="member-card gray-scale " >
    {/* <h1>{image}</h1>   */}
      <div className="stud-info">
        {/* reg, branch */}
        <h3>{reg}</h3>
        <h3>{branch}</h3>
      </div>
      {/* <Image fluid={image} alt={name} /> */}
      {/* <Image
  source={require({image})}
  style={{ width: 100, height: 100 }}
/> */}
      {/* <img src={`../../team/${image}.png`} alt={name} style={{ width: "100%", height: "100%" }}/> */}
      <img src={image} alt={name} style={{ width: "100%", height: "100%" }}/>
      <div className="member-info">
        <h3>{name}</h3>
        {/* <h4>{name}</h4> */}
      </div>
    </div>
  )
}

export default SingleMember
