import React from "react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../utils/motion"

const services = [
  {
    name: "Remedial Massage",
    icon: "../../images/icons/digitalmarketing.png",
    description:
      "Targeted treatments to alleviate muscle tension, improve circulation, and promote overall wellness. I use customized techniques to ensure optimal recovery and relaxation for your body and mind.",
  },
  {
    name: "Hot Stones",
    icon: "../../images/icons/webdevelopment.png",
    description:
      "Experience deep relaxation and enhanced muscle relief with my hot stone massage service. I use smooth, heated stones to melt away tension, improve circulation, and restore balance.",
  },
  {
    name: "Nutrition Consultation",
    icon: "../../images/icons/socialmedia.png",
    description:
      "Personalized guidance to help you achieve optimal health. I provide tailored advice, meal plans, and support to ensure you meet your wellness goals through balanced, nutritious eating habits.",
  },
  {
    name: "Exercise Consultation",
    icon: "../../images/icons/appdevelopment.png",
    description:
      "My exercise consultation service provides personalized fitness plans to help you achieve your health goals. I offer expert advice, tailored workout routines, and ongoing support to ensure you stay motivated and make progress towards a healthier lifestyle.",
  },
  

]
const Services = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="services"
      className="mt-10 flex flex-col items-center justify-center md:mt-20">
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex flex-col items-center justify-center">
        <h1 className="font-urbanist text-center text-2xl font-semibold md:text-5xl">
          My Services
        </h1>
        <span className="text-md font-urbanist mt-2 px-2 text-center md:mt-4 md:px-5 md:text-xl">
          Comprehensive Care and Holistic Health Services.
        </span>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="container mt-10 grid gap-10 p-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((item, index) => (
          <div
            key={index}
            className="card max-w-2xl  shadow-sm transition duration-300 hover:-translate-y-1">
            <div className="card-body">
              <div className="h-16 w-16 rounded-full bg-gradient-to-t from-base-300/20 to-base-content/10">
                <img className="p-4" src={item.icon} />
              </div>
              <h2 className="font-urbanist card-title text-3xl font-black">{item.name}</h2>
              <p className="text-md font-urbanist font-medium opacity-60">{item.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
