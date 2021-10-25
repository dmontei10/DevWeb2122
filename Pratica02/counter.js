let seconds = 0;

function incrementSeconds(){
    seconds += 1;
    console.log("Aguardou" + seconds + "segundo(s). ");
    if (seconds ==3) clearInterval(sequencia);

    let sequencia = setInterval(incrementSeconds, 1000)
}