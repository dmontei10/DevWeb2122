async function espera(){
    await setTimeout(() => {}, 1000);
    console.log("Aguardou 1s");

    await setTimeout(() => {}, 1000);
    console.log("Aguardou mais 1s");
}
espera();