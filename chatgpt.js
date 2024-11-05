// Fonction pour mettre à jour le prix total
function updateTotalPrice() {
    var items = document.getElementsByClassName("card-body");
    var total = 0;
    
    for (var i = 0; i < items.length; i++) {
      var quantity = parseInt(items[i].getElementsByClassName("quantity")[0].textContent);
      var unitPrice = parseFloat(items[i].getElementsByClassName("unit-price")[0].textContent.replace("$", ""));
      total += quantity * unitPrice;
    }
  
    document.getElementsByClassName("total")[0].textContent = total + " $";
  }
  
  // Fonction pour gérer l'ajout et la suppression d'articles
  function handleQuantityChange(event, increment) {
    var quantitySpan = event.target.parentNode.getElementsByClassName("quantity")[0];
    var quantity = parseInt(quantitySpan.textContent);
    
    // Mise à jour de la quantité
    quantity = increment ? quantity + 1 : Math.max(quantity - 1, 0);
    quantitySpan.textContent = quantity;
    
    // Mise à jour du prix total
    updateTotalPrice();
  }
  
  // Fonction pour supprimer un article
  function handleDelete(event) {
    var item = event.target.closest(".card-body");
    item.parentNode.removeChild(item);
    
    // Mise à jour du prix total
    updateTotalPrice();
  }
  
  // Fonction pour aimer un article
  function handleLike(event) {
    if (event.target.style.color === "red") {
      event.target.style.color = "black";
    } else {
      event.target.style.color = "red";
    }
  }
  
  // Ajout des événements pour chaque article
  var plusButtons = document.getElementsByClassName("fa-plus-circle");
  for (var i = 0; i < plusButtons.length; i++) {
    plusButtons[i].onclick = function(event) {
      handleQuantityChange(event, true);
    };
  }
  
  var minusButtons = document.getElementsByClassName("fa-minus-circle");
  for (var i = 0; i < minusButtons.length; i++) {
    minusButtons[i].onclick = function(event) {
      handleQuantityChange(event, false);
    };
  }
  
  var deleteButtons = document.getElementsByClassName("fa-trash-alt");
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = handleDelete;
  }
  
  var heartButtons = document.getElementsByClassName("fa-heart");
  for (var i = 0; i < heartButtons.length; i++) {
    heartButtons[i].onclick = handleLike;
  }
  