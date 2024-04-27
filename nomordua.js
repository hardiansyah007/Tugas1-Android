const outputDiv = document.getElementById("output");

if (outputDiv) {
    let num = 89;
    let i = 1;

    while (i <= 20) {
        const paragraph = document.createElement("p");
        paragraph.textContent = num.toString();
        outputDiv.appendChild(paragraph);
        num++;
        i++;
    }
} else {
    console.error(" 'output' tidak ditemukan.");
}
