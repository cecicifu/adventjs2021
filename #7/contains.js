export default function contains(store, product) {
  for(const item of Object.values(store)) {
    if(typeof item === "object") {
      if(contains(item, product)) return true
    } else if (item === product) return true
  }
  return false
}