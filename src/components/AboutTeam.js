import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useStaticQuery, graphql } from "gatsby"

import SingleMember from "../components/subcomponents/SingleMember"
gsap.registerPlugin(ScrollTrigger)

const AboutTeam = () => {
  useEffect(() => {
    gsap.from(".member-card", {
      scrollTrigger: ".member-card",
      duration: 0.6,
      autoAlpha: 0,
      xPercent: -100,
      rotate: -45,
      stagger: 0.05,
    })
  }, [])

  const image = useStaticQuery(graphql`
    query {
      allContentfulTeamMember {
        nodes {
          name
          memberImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)

  // const v1 = ["Ashwath","Arohan","Aadhithyaa"];
  // const v2 = ["team/ashwath.png","team/ashwath.png","team/ashwath.png"];
  const v3 = [["Arohan Mishra","../../team/arohan.png"], ["Aadithyaa G","../../team/aadhithyaa.png"]];
  // , ["Vaishnavi","team/vaishnavi.png"], ["Aadithyaa G","team/aadhithyaa.png"], ["Arohan Mishra","team/arohan.png"], ["Aadithyaa G","team/aadhithyaa.png"], ["Arohan Mishra","team/arohan.png"], ["Aadithyaa G","team/aadhithyaa.png"], ["Arohan Mishra","team/arohan.png"], ["Aadithyaa G","team/aadhithyaa.png"], ["Arohan Mishra","team/arohan.png"]];


  // const members = image.allContentfulTeamMember.nodes
  // members.reverse()

  return (
    <div className="about-team">
      <div className="container">
        <h1 className="team-heading">Meet Our Team</h1>
        <div className="board-members">
          {v3.map(versi => {
            return (
              <SingleMember
                image={versi[1]}
                name={versi[0]}
                // post={member.post}
                // regNo={member.regNo}
                // branch={member.degree}
                key={versi[1]}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AboutTeam
