async function getDisciplinas(){
    const urlBase = "http://localhost:8080/api/disciplinas";
    const listaDisciplinas = document.getElementById("listaDisciplinas");
    let texto ="";
    var myHeaders = new Headers();

    var MyInit = { method: "GET", headers: myHeaders };

    var myRequest = new Request(`${urlBase}`, MyInit)

    await fetch(myRequest).then(async function (response){
        if (!response.ok){
            listaDisciplinas.innerHTML = "Não posso mostrar disciplinas de momento!";
        }else{
            disciplinas = await response.json();
            console.log(disciplinas);
            for(const disciplina of disciplinas){
                texto +=`
                       <div>
                   <h4>${disciplina.Nome}</h4>
                   &nbsp;&nbsp;&nbsp;Docente: ${disciplina.Docente}
                   </div>`;
                }
                listaDisciplinas.innerHTML = texto;
            }
    });
}