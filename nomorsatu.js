const outputDiv = document.getElementById("output");

if (outputDiv) {
    let count = 0;
    let total = 0;

    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0 && (i / 10) %2 !== 0 ) {
            outputDiv.innerHTML += i + "<br>";
            count++;
            total += i;
        }

        if (i % 2 === 0 && (i / 10) % 2 === 0) {
            outputDiv.innerHTML += i + "<br>";
            count++;
            total += i;
        }

        if (i === 10 || i === 20 || i === 30 ||i === 40 || i === 50 || i === 60 || i === 70|| i === 80 || i === 90 || i === 100)  {
            outputDiv.innerHTML += "--------------------------<br>";
            outputDiv.innerHTML += "Jumlah: " + total + "<br>";
            outputDiv.innerHTML += "Perulangan 10 ke-" + (i / 10) + ":<br>";
            outputDiv.innerHTML += "--------------------------<br>";
            
        }
    }
} else {
    console.error("Element dengan id 'output' tidak ditemukan.");
}
