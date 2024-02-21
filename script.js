let docTitle = document.title;
window.addEventListener("blur", () =>{document.title = "Volta aqui! :(";})
window.addEventListener("focus", () =>{document.title = docTitle;})
const lista1 = ['cajú', 'maçã', 'açai', 'coco',  'jaca', 'kiwi', 'romã', 'pêra'];
const lista2 = ['limão', 'amora', 'jambo', 'cacau', 'manga', 'caqui'];
let lista;
let erro = 0;
const partes = ['   cabeça, ', '    dorso, ', '    braço direito, ', '  braço esquerdo, ', '    perna direita, ', '   perna esquerda'];
let plv;
const dica = document.getElementById('dica');
const fim = document.getElementById('fim_de_jogo');
const acerto = document.getElementById('acerto');
let corpo = document.querySelector('.corpo');
const lmt_plv = 6;
let hint;

const select = document.getElementById('numero_letras');
select.addEventListener('change', () => {
  if (select.value === '4') {
    lista = lista1;
  } else {
    lista = lista2;
  }
  plv = lista[Math.floor(Math.random() * lista.length)];
  hint = plv.charAt(0);
  dica.innerHTML = hint;
});

function reSort() {
  plv = lista[Math.floor(Math.random() * lista.length)];
  hint = plv.charAt(0);
  dica.innerHTML = hint;
}

function jogar() {
  let dadodigitado = document.getElementById('entrada').value;
  if (dadodigitado === plv) {
    acerto.classList.add('acerto');
    acerto.innerHTML = 'Você acertou!';
    reSort();
    erro = 0;
  } else {
    if (erro < lmt_plv) {
      corpo.textContent +=  partes[erro];
      erro++;
      if (erro == lmt_plv) {
        fim.classList.add('fim');
        fim.innerHTML = 'FIM DE JOGO!';
        acerto.classList.add('erro');
        acerto.innerHTML = 'A palavra certa era: ' + plv;
      } else {
        acerto.classList.remove('erro');
        acerto.innerHTML = '';
      }
    }
  }
  return;
}

