export default function createXmasTree(height) {
  const AST = '*'
  const LOW = '_'
  const NL = '\n'
  const HASH = '#'
  
  let html = ''
  for (let i = 0; i < height; i++) {    
    for (let j = 1; j <= height; j++) {
      if(j < height - i) html += LOW 
      else html += AST
    }
    for (let x = height; x > 1 ; x--) {
      if(x <= height - i || i == 0) html += LOW 
      else html += AST
    }
    html += NL
  }
  
  for (let i = 0; i < 2; i++) {    
    for (let j = 1; j < height; j++) {
      html += LOW
    }
    html += HASH
    for (let x = 1; x < height ; x++) {
      html += LOW
    }
    if(i != 1) html += NL
  }

  return html
}