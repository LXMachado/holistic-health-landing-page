import React from "react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../utils/motion"

const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="home"
      className="hero py-10 flex justify-center">
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://cdn.midjourney.com/72039c74-959a-43db-a463-afc786e22c32/0_2.png"
          alt=""
          className="max-w-xs rounded-b-box rounded-t-[14rem] shadow-2xl outline outline-base-content/5 md:max-w-md"
        />
        <div className="text-center lg:text-start">
          <span className="badge badge-outline badge-lg">Award winning Wellness Center</span>
          <h1 className="font-urbanist text-3xl font-black uppercase md:text-7xl">
            Beyond Body
            <span className="text-base-content/30"> Holistic Health</span>
          </h1>
          <p className="py-6 font-urbanist lg:max-w-lg">
            Your Path to Holistic Health and Mindful Living
          </p>
          <div className="flex gap-2 max-lg:justify-center">
            <a
              href="#contactus"
              className="btn btn-neutral md:btn-lg rounded-full font-urbanist shadow-md">
              Get Started
            </a>
            <a href="/" className="btn btn-ghost md:btn-lg rounded-full font-urbanist font-light">
              Find out more
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Hero
