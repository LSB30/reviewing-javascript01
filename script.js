function tocaSom(idElementAudio) {
  document.querySelector(idElementAudio).play();
}

const listKey = document.querySelectorAll('.tecla');



for (let contador = 0; contador < listKey.length; contador++) {

  const key = listKey[contador];
  const instrument = key.classList[1];
  const idAudio = `#som_${instrument}`;

  listKey[contador].onclick = () => {
    tocaSom(idAudio)
  };
}