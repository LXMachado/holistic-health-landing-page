import React from "react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../utils/motion"

const team = [
  {
    name: "Juliana Machado",
    profile:
      "https://cdn.midjourney.com/fa7d2c5e-08ff-4143-be09-45dadf22c27a/0_0.png",
    position: "Founder & CEO",
  },
 /* {
    name: "John",
    profile:
      "https://cdn.midjourney.com/fa7d2c5e-08ff-4143-be09-45dadf22c27a/0_1.png",
    position: "CoFounder & CTO",
  },
  {
    name: "Emily",
    profile:
      "https://cdn.midjourney.com/3ae5b881-099a-44c7-a715-48531c4b5e22/0_2.png",
    position: "Head of Growth",
  },*/
  
]

const Team = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="team"
      className="flex flex-col items-center justify-center">
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex flex-col items-center justify-center">
        <h1 className="font-urbanist text-center text-2xl font-semibold md:text-5xl">Meet Juliana</h1>
        <span className="text-md font-urbanist mt-4 px-2 text-center md:mt-4 md:px-5 md:text-xl">
          our passionate team collaborates seamlessly to create solutions.
        </span>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-10 grid gap-8 md:grid-cols-1 xl:grid-cols-3">
        {team.map((item, index) => (
          <div key={index} className="card w-80 border border-base-content/10 shadow-sm lg:w-96">
            <figure className="lpx-10 pt-10">
              <img src={item.profile} alt="Shoes" className="h-44 w-44 rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="font-urbanist card-title font-bold">{item.name}</h2>
              <h2 className="font-urbanist font-semibold opacity-70">{item.position}</h2>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Team
