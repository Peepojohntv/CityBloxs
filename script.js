// Funktion zum Öffnen des Modals
function openModal(element) {
  document.getElementById("imgModal").style.display = "block";
  document.getElementById("modalImg").src = element.src;
  document.getElementById("caption").innerText = element.alt;
}

// Funktion zum Schließen des Modals
function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}
