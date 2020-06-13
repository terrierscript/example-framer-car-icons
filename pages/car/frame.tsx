import Head from "next/head"
import { Frame } from "framer"
import { motion } from "framer-motion"
import { randomCar } from "./cars"

const Car = () => {
  const car = randomCar()
  return (
    <motion.div
      style={{ fontSize: "20vh" }}
      drag={true}
      // dragConstraints={{ left: -100, right: 100 }}
    >
      {car}
    </motion.div>
  )
}
const Home = () => {
  return (
    <div className="container">
      <Frame width="90vw" height="90vh" background={"#ccc"}>
        <Car />
      </Frame>
    </div>
  )
}

export default Home
