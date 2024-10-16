const buttons = document.querySelectorAll('.buttons__element');
const modal = document.getElementById('myModal');
const modalText = document.getElementById('modalText');
const span = document.getElementsByClassName("close")[0];

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('qr');

// Define storage keys for QR data and all-found flag
const storageKey = 'foundQrs';

initGame();

function initGame() {
    // Initial check for found QR based on URL param
    if (myParam !== null) {
        const text = "Felicidades, encontraste el QR N° " + myParam;
        showModal(text);
        updateFoundQrs(parseInt(myParam)); // Convert URL param to integer
        buttons[myParam - 1].classList.add("founded");
    }

    const foundQrs = getFoundQrs();
    foundQrs.forEach(qrNumber => {
        buttons[qrNumber - 1].classList.add("founded");
    });

    if(foundQrs.length === 4) {
        console.log("Todos los QRs encontrados");
        showModal("¡Felicidades! Encontraste todos los QRs");
        buttons[4].classList.remove("inactive");
    }
}

// Function to retrieve found QR data from local storage
function getFoundQrs() {
    const storedData = localStorage.getItem(storageKey);
    return storedData ? JSON.parse(storedData) : [];
}

// Function to update local storage with new found QR data
function updateFoundQrs(qrNumber) {
  const foundQrs = getFoundQrs();
  
  if (!foundQrs.includes(qrNumber)) {
    foundQrs.push(qrNumber);
    localStorage.setItem(storageKey, JSON.stringify(foundQrs));
  }
}

// Function to check if a QR is already found
function isFound(qrNumber) {
  const foundQrs = getFoundQrs();
  return foundQrs.includes(qrNumber);
}

const textArr = [
  "Pista para el QR N° 1",
  "Pista para el QR N° 2",
  "Pista para el QR N° 3",
  "Pista para el QR N° 4",
  "Pista para el QR N° 5"
];

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (isFound(index + 1) || button.classList.contains("inactive")) {
      return; // Don't show modal for already found QR
    }
    showModal(textArr[index]);
    // updateFoundQrs(index + 1); // Store the QR number found (index + 1)
  });
});

span.onclick = function() {
  modal.style.display = "none";
}

function showModal(text) {
    modal.style.display = "block";
    modalText.textContent = text;
}
