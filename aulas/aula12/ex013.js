var agora = new Date()
var horário = agora.getHours()
var minutos = agora.getMinutes()

console.log (`São exatamente ${horário}:${minutos} horas do seu dia.`)

if (horário <5) {
  console.log ('Boa madrugada!')
} else if (horário <12) {
  console.log ('Bom dia!')
} else if (horário <= 18) {
  console.log ('Boa tarde!')
} else if (horário <= 24) {
  console.log ('Boa noite!')
}