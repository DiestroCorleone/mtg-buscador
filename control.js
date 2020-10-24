function search(){
	var cartaABuscar = document.getElementById("cartaABuscar").value.toLowerCase();
	var cardList = document.getElementById("cardList");
	var name, card, id;
	
	if(cartaABuscar == null || cartaABuscar == ""){
		alert("Ingresá el nombre de una carta!");
	}else{
		fetch('https://api.magicthegathering.io/v1/cards?name=' + cartaABuscar)
			.then(response => response.json())
			.catch(err => alert("No se encontraron cartas!"))
			.then(data => {
				console.log(data)
				cardList.innerHTML = null;
				for(var i = 0; i < data.cards.length; i++){
				name = data.cards[i].name;
				if(data.cards[i].imageUrl == undefined){
					card = "back.jpg";
				}else{
					card = data.cards[i].imageUrl;
				}
				var list = document.createElement("li");
				list.className = "bg-lite-grey padded margin";
				list.innerHTML = "<strong>" + name + "</strong><br><br><img src = '" + card + "'>";
				cardList.appendChild(list);
				}
				document.getElementById("cartaABuscar").value = "";
				})	
	}
	cartaABuscar = null;
}

window.onload = function(){
	var cartaABuscar = document.getElementById("cartaABuscar");
	cartaABuscar.addEventListener("keyup", function(event) {
		if(event.keyCode === 13) {
			event.preventDefault();
			document.getElementById("search").click();
		}
	});
}
