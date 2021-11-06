import React, { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useStaticQuery, graphql } from "gatsby"
import arohan from "../team/arohan.png"
import aadhithyaa from "../team/aadhithyaa.png"
import ashwath from "../team/ashwath.png"
import aviral from "../team/aviral.png"
import fatema from "../team/fatema.png"
import mukunth from "../team/mukunth.png"
import prajjwal from "../team/prajjwal.png"
import ronit from "../team/ronit.png"
import sandeep from "../team/sandeep.png"
import vaishnavi from "../team/vaishnavi.png"
import vishal from "../team/vishal.png"

// arohan
// aadhithyaa
// ashwath
// aviral
// fatema
// mukunth
// prajjwal
// ronit
// sandeep
// vaishnavi
// vishal


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
  const v3 = [
    ["Arohan Mishra",arohan,"---","19XXX0000"],
    ["G Aadhithyaa",aadhithyaa,"CSE (Information Security)","19BCI0121"],
    ["Vaishnavi Manambat Kaloor",vaishnavi,"Biotechnology Engineering","19BBT0024"],
    ["Aviral Goyal",aviral," Computer Science and Engineering","19BCE883"],
    ["Fatema Malik",fatema,"---","19XXX0000"],
    ["Mukunth BS",mukunth,"Computer Science and Engineering","19BCE0625"],
    ["Vishal R",vishal,"Computer Science and Engineering","19BCE0695"],
    ["Sandeep Balaji J",sandeep,"Multimedia and animation","19BAM0013"],
    ["Ashwath P",ashwath,"Information Technology","19BIT0222"],
    ["Ronit Sahu",ronit,"---","19XXX0000"],
    ["Prajjwal RT",prajjwal,"Electronics and Communication engineering","19BEC0470"],
];


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
                reg={versi[3]}
                branch={versi[2]}
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
