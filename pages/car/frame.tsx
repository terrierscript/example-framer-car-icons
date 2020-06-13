import Head from "next/head"
import { Frame } from "framer"
import { motion, useMotionValue } from "framer-motion"
import { randomCar } from "./cars"
import { useRef, useEffect, useState } from "react"

const Car = ({ x, y, frameRef, size }) => {
  const [car] = useState(randomCar())
  console.log(x, y)
  const xx = useMotionValue(x)
  const yy = useMotionValue(y)
  console.log(xx, yy)
  return (
    <Frame
      width={size}
      height={size}
      style={{
        fontSize: "20vh",
        background: "transparent",
        // background: "red",
        // x: xx,
        // y: yy,
      }}
      x={x}
      y={y}
      drag={true}
      dragConstraints={frameRef}
      dragElastic={1}
      animate={{ x: 0 }}
      transition={{ type: "spring", damping: 0.1 }}
      dragMomentum={true}
      dragTransition={{
        min: Infinity,
        max: Infinity,
        bounceStiffness: 10000,
        bounceDamping: 0,
      }}
    >
      {car}
    </Frame>
  )
}
const Home = () => {
  const ref = useRef(null)
  const [ready, setReady] = useState(false)
  const [cars, setCars] = useState([])
  useEffect(() => {
    setReady(!!ref.current)
  }, [ref.current])

  const onTap = (e, info) => {
    console.log("tap", e, info, ref.current)
    setCars((cars) => {
      return [
        ...cars,
        {
          x: info.point.x - 10,
          y: info.point.y - 10,
        },
      ]
    })
  }

  return (
    <Frame
      width="90vw"
      height="90vh"
      background={"#ccc"}
      overflow="hidden"
      ref={ref}
      // center
      onTap={onTap}
    >
      {cars.map((car, i) => (
        <Car key={i} {...car} frameRef={ref} size={64} />
      ))}
    </Frame>
  )
}

export default Home
