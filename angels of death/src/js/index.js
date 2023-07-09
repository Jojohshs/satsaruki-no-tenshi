const personagens=document.querySelectorAll(".personagem"); /* permite pegar todos os li com a class personagem. Se eu adicionar mais não preciso mexer no js. */

personagens.forEach(personagem => {
    personagem.addEventListener("mouseenter", () => { if(window.innerWidth <450) {
      window.scrollTo({top: 0, bihavior:"smooth"})
    }
      const personagemSelecionado = document.querySelector(".selecionado");
      personagemSelecionado.classList.remove("selecionado")
        personagem.classList.add("selecionado");
      const imagemPersonagemGrande = document.querySelector('.personagem-grande')
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.jpg`;
        const nomePersonagem = document.getElementById("nome-personagem");
        nomePersonagem.innerText = personagem.getAttribute("data-name");
        const descricaoPersonagem = document.getElementById("descricao-personagem")
        descricaoPersonagem.innerText = personagem.getAttribute("data-description");
    })
})

/*  const personagemSelecionado = document.querySelector(".selecionado");
      personagemSelecionado.classList.remove("selecionado")
      permite tirar e colocar a borda do personagem selecionado */