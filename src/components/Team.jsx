import React from "react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../utils/motion"

const team = [
  {
    name: "Juliana Machado",
    profile: "https://images.pexels.com/photos/3998002/pexels-photo-3998002.jpeg",
    position: "Founder & CEO",
    biography:
      "Remedial Massage Therapist since 2009 with a passion for helping others and promoting healthy living. Currently pursuing a Bachelor of Health Science, I have a deep understanding of diet, exercise, and lifestyle changes that enhance well-being. Skilled in various massage techniques, I exclusively use natural products to ensure optimal care.",
  },
]

const Team = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="team"
      className="my-20 flex flex-col items-center justify-center md:my-32">
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex flex-col items-center justify-center">
        <h1 className="text-center font-urbanist text-2xl font-semibold md:text-5xl">
          Meet Juliana
        </h1>
        <span className="text-md mt-2 px-2 font-urbanist text-center md:mt-4 md:px-5 md:text-xl">
          The mind behind Beyond Body Holistic Health.
        </span>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="py-10 max-w-7xl">
        <div className="container mx-4 h-auto rounded-xl max-sm:max-w-sm border border-base-content/10 grid place-items-center">
          {team.map((item, index) => (
            <div key={index} className="card w-80 border border-base-content/10 shadow-sm lg:w-96">
              <figure className="px-10 pt-10">
                <img src={item.profile} alt={item.name} className="h-44 w-44 rounded-full" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="font-urbanist card-title font-bold">{item.name}</h2>
                <h2 className="font-urbanist font-semibold opacity-70">{item.position}</h2>
                <p className="mt-4 text-sm font-urbanist text-base-content leading-6">
                  {item.biography}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Team
