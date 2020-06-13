import dynamic from "next/dynamic"
export default dynamic(() => import("./car/frame"), { ssr: false })
