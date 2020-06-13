import Head from "next/head"
import { Frame } from "framer"
import { motion } from "framer-motion"
import { randomCar } from "./cars"
import { useRef, useEffect, useState } from "react"

const Car = ({ frameRef }) => {
  const car = randomCar()
  return (
    <Frame style={{ fontSize: "20vh",
    }}
    drag={true}
    dragConstraints={frameRef}
    >
      {car}
    </Frame>
  )
}
const Home = () => {
  const ref = useRef(null)
  const [ready, setReady] = useState(false)
  useEffect(() => {
    setReady(!!ref.current)
  }, [ref.current])
  return (
      <Frame width="90vw" height="90vh" background={"#ccc"} ref={ref} center>
        <Car frameRef={ref} />
      </Frame>
  )
}

export default Home
