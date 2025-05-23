
// script.js

// Obtenez la zone de recherche et ajoutez un écouteur d'événements pour la saisie
var searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
    searchOnPage();
});

// Fonction pour effectuer la recherche sur la page
function searchOnPage() {
    var searchTerm = searchInput.value.toLowerCase();
    var searchableElements = document.getElementsByClassName('searchable');

    // Parcourez les éléments et ajustez le style en fonction de la correspondance avec le terme de recherche
    for (var i = 0; i < searchableElements.length; i++) {
        var text = searchableElements[i].innerText.toLowerCase();
        if (text.includes(searchTerm)) {
            searchableElements[i].style.display = 'block'; // Affiche les éléments correspondants
        } else {
            searchableElements[i].style.display = 'none';  // Cache les éléments non correspondants
        }
    }
}
function goBack() {
    window.history.back();
}