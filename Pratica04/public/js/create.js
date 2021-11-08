async function enviarRegisto() {
    const urlBase = "http://localhost:8080/api/disciplinas";
    const disc = document.getElementById("disc").value;
    const doce = document.getElementById("doce").value;
    const resultado = document.getElementById("resultado");
    const falhou = document.getElementById("falhou");
    if (disc == "" || doce == ""){
      falhou.innerHTML = "Deve informar os nomes da disciplina e do docente!";
      return;
    }
    console.log(doce);
    var myInit = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        disciplina: `${disc}`,
        docente: `${doce}`,
      }),
    };
    var myRequest = new Request(`${urlBase}`, myInit);
    await fetch(myRequest).then(async function (response) {
      if (!response.ok) {
        falhou.innerHTML = "Algo correu mal!";
      } else {
         resposta = await response.json();
         console.log(resposta.message);
         resultado.innerHTML = resposta.message;
      }
    });
  }