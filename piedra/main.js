//piedra
// papel
// tijera

let jugador1 = 'piedra'
let jugador2 = 'papel'

// evaluamos si es empate
if (jugador1 === jugador2){
  console.log('empate');
} else {
  // comenzamos con las opciones
  if(jugador1 === 'papel'){
    if(jugador2 === 'tijera'){
      console.log('gana jugador 2')
    }else {
      console.log('gana jugador 1')
    }
  } else if (jugador1 === 'tijera') {
    if (jugador2 === 'tijera') {
      console.log('gana jugador 2')
    } else {
      console.log('gana jugador 1')
    }
  } else if (jugador1 === 'papel') {
    if (jugador2 === 'piedra') {
      console.log('gana jugador 2')
    } else {
      console.log('gana jugador 1')
    }
  }
}
