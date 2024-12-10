// Rotate card function
function rotateCard() {
    // Select the card element
    const card = document.querySelector('.simple-card');
    
    // Toggle the 'flipped' class to rotate
    card.classList.toggle('rotated');
}
function function0(name){
    const card = document.getElementsByName(name);
    card.classList.remove('rotated'); // Supprime la classe 'rotated' pour revenir à la face avant
}