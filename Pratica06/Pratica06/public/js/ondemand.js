async function getDisciplinas(id) {
  const urlBase = "http://localhost:8080/api/disciplinas";
  const listaDisciplinas = document.getElementById("listaDisciplinas");
  const criteria = document.getElementById("searchkey").value;
  console.log("Critério: " + criteria);
  let texto = "";
  let myHeaders = new Headers();
  let url = urlBase;

  if (id != "") {
    url = url + "/:" + id;
  } else if (criteria != "") {
           url = url + "/key/:" + criteria;
         }

  console.log("URL: " + url);
  const myInit = { method: "GET", headers: myHeaders };
  const myRequest = new Request(url, myInit);

  await fetch(myRequest).then(async function (response) {
    if (!response.ok) {
      listaDisciplinas.innerHTML = "Não posso mostrar disciplinas de momento!";
    } else {
      disciplinas = await response.json();
      console.log(disciplinas);
      if (Object.keys(disciplinas).length == 1) {
        // Só retornou uma disciplina, detalhamos
        disciplina = disciplinas[0];
        texto += ` 
        <div>
          <h4>${disciplina.disciplina}</h4>
          &nbsp;&nbsp;&nbsp;${disciplina.curso} -- Ano: ${disciplina.ano}<br /> 
          &nbsp;&nbsp;&nbsp;Docente: ${disciplina.docente}
        </div>`;
      } else {
        // Retornou mais de uma disciplina
        for (const disciplina of disciplinas) {
          texto += ` 
          <div>
            <h4>${disciplina.disciplina}
            <button type="button" onclick="getDisciplinas('${disciplina._id}')">
              Clique aqui para detalhar esta disciplina
            </button></h4>
          </div>`;
        }
      }
      listaDisciplinas.innerHTML = texto;
    }
  });
}
