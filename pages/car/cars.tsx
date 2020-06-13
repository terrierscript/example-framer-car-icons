const cars = [
  "🚗",
  "🚕",
  "🚙",
  "🚌",
  "🚎",
  "🏎",
  "🚓",
  "🚑",
  "🚒",
  "🚐",
  "🚚",
  "🚛",
  "🚜",
  "🛵",
  "🚃",
  "🚋",
]
export const randomCar = () => {
  const idx = Math.ceil(Math.random() * 1000) % (cars.length - 1)
  return cars[idx]
}
