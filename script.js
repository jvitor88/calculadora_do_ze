function calcular() {
  let resultado = document.getElementById('resp')
  resultado.innerHTML = ''
  let cervejas = [
    {nome: "Litrão", valor: (Number(document.getElementById('litrao').value)/1000)},
    {nome: "Long Neck", valor: (Number(document.getElementById('long').value)/330)},
    {nome: "Garrafa", valor: (Number(document.getElementById('garrafa').value)/600)},
    {nome: "Garrafinha", valor: (Number(document.getElementById('garrafinha').value)/300)},
    {nome: "Latão", valor: (Number(document.getElementById('latao').value)/473)},
    {nome: "Lata", valor: (Number(document.getElementById('lata').value)/350)},
    {nome: "Latinha", valor: (Number(document.getElementById('latinha').value)/269)},
    {nome: "Outros", valor: (Number(document.getElementById('outros').value)/Number(document.getElementById('mloutros').value))},
  ]
  cervejas.sort(function(a, b) {
    if(a.valor < b.valor) {
      return -1
      } 
      else {
        return true
      }
      })
  var dados = [];
  for(let elemento of cervejas){
    if (elemento.valor != 0)
      dados.push(elemento.nome);
  }
  resultado.innerHTML = `A melhor opção é: <strong>${dados[0]}</strong>`
    }
function limpar(){
  document.getElementById('resp').value = ''
  document.getElementById('litrao').value = ''
  document.getElementById('long').value = ''
  document.getElementById('garrafa').value = ''
  document.getElementById('garrafinha').value = ''
  document.getElementById('latao').value = ''
  document.getElementById('lata').value = ''
  document.getElementById('latinha').value = ''
  document.getElementById('mloutros').value = ''
  document.getElementById('outros').value = ''
  let resultado = document.getElementById('resp').innerHTML = ''
}