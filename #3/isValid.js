export default function isValid(letter) {
  if(/^[\wáéíóúñ(\s]*[\wáéíóúñ\s]\).*/gmi.test(letter)) return true
  return false
}