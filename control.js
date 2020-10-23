function search(){
	var pokemonABuscar = document.getElementById("pokemonABuscar").value.toLowerCase();
	var pokeList = document.getElementById("pokeList");
	var name, sprite, id;
	
	if(pokemonABuscar == null || pokemonABuscar == ""){
		alert("Ingresá el nombre de un Pokémon!");
	}else{
		fetch('https://­pokeapi.co/api/v2/pokemon/' + pokemonABuscar)
			.then(response => response.json())
			.catch(err => alert("No se encontraron Pokémon!"))
			.then(data => {
				console.log(data)
				pokeList.innerHTML = null;
				name = data.name;
				sprite = data.sprites.front_default;
				id = data.id;
				var list = document.createElement("li");
				list.className = "bg-lite-grey padded margin";
				list.innerHTML = "<strong>" + name.charAt(0).toUpperCase() + name.slice(1) + "</strong>" + "<br><br>" + "<img src = '" + sprite + "'>" + "<br><br><p><strong>Número: </strong>" + id + "</p>";		
				pokeList.appendChild(list);
				document.getElementById("pokemonABuscar").value = "";
				})	
	}
	pokemonABuscar = null;
}
