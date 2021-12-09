export default function listGifts(letter) {
  letter = letter.split(" ")
  const letterFiltered = letter.filter((gif, index) => !gif.startsWith("_") && letter.indexOf(gif) === index && gif.trim())
  
  const gifs = {}
  for(let gif of letterFiltered) {
    let count = 0
    for(let i of letter) if(gif === i) count++
    gifs[gif] = count
  }

  return gifs
}