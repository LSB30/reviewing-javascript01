function tocaSom(idElementAudio) {
  document.querySelector(idElementAudio).play();
}

const listKey = document.querySelectorAll('.tecla');



for (let contador = 0; contador < listKey.length; contador++) {

  const key = listKey[contador];
  const instrument = key.classList[1];
  const idAudio = `#som_${instrument}`;

  key.onclick = () => {
    tocaSom(idAudio)
  };

  key.onkeydown = (e) => {
    console.log(e)
    if (e.key === 'Enter' || e.key === 'Space') {
      key.classList.add('ativa')
    }

  }

  key.onkeyup = () => {
    key.classList.remove('ativa')
  }
}