import React from "react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../utils/motion"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from "swiper/modules"

const testimonials = [
  {
    name: "Alex S.",
    position: "Lead Developer",
    quote: "I really like Beyond Body Holistic Health. Juliana is very professional and helped me a lot with my diet and fitness goals.",
    image: "/images/testimonials/alex.png",
  },
  // Add more testimonials here...
  {
    name: "Sarah J.",
    position: "Fitness Enthusiast",
    quote: "Juliana's approach to wellness here is amazing. I've seen significant improvements in my overall health.",
    image: "/images/testimonials/sarah.png",
  },
  {
    name: "Jessica R.",
    position: "Business Owner",
    quote: "This place has become an essential part of my wellness routine. Juliana is incredibly knowledgeable and supportive. ",
    image: "/images/testimonials/Jessica.png",
  },
  // Add more testimonials as needed...
]

const Testimonial = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="testimonial"
      className="my-20 flex flex-col items-center justify-center md:my-32">
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex flex-col items-center justify-center">
        <h1 className="text-center font-urbanist text-2xl font-semibold md:text-5xl">
          Testimonials
        </h1>
        <span className="text-md mt-2 px-2 font-urbanist md:mt-4 md:px-5 md:text-xl">
          What Our Clients Say About Us
        </span>
      </motion.div>

      <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="py-10 w-full max-w-7xl">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={{clickable: true}}
          mousewheel={true}
          keyboard={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
          className="container mx-auto px-4">
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="pb-12">
              <div className="h-full rounded-xl border border-base-content/10 p-6 flex flex-col justify-between">
                <blockquote className="text-center font-urbanist font-bold leading-8 text-base-content text-lg mb-4">
                  <p>"{item.quote}"</p>
                </blockquote>
                <div className="flex flex-col items-center">
                  <img
                    className="h-14 w-14 rounded-full"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="mt-4 text-center">
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-base-content/50 text-sm">{item.position}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  )
}

export default Testimonial
