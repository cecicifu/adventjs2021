export default function groupBy(collection, it) {
  return collection.reduce((accumulator, currentValue) => {
    const isFunc =
      typeof it === "function" ? it(currentValue) : currentValue[it]
    if (accumulator.hasOwnProperty(isFunc))
      accumulator[isFunc].push(currentValue)
    else accumulator[isFunc] = [currentValue]
    return accumulator
  }, {})
}
