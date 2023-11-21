function changeSaying() {
    idArray = new Array()
    idArray [1] = "Akėčiomis laukų nepravažinėsi – duonos neturėsi."
    idArray [2] = "Bijai vilko – neik į mišką."
    idArray [3] = "Cukrus su druska lygiai balti, tik nelygiai saldūs."
    idArray [4] = "Čiupinėjasi kaip mergos su bernais."
    idArray [5] = "Viena boba – vienas turgus, dvi bobos – du turgūs."
  
    document.getElementById("select").onclick = changeSaying;
    randomParagraph = Math.floor(Math.random()*5);
  
    document.getElementById("result").innerHTML = idArray[randomParagraph + 1];       
  }
