// FILME
let filmes = [

    {
    titulo: "RAPUNZEL",
    imagem: "filme.jpg.webp",
    descricao:" uma jovem de longos cabelos dourados aprisionada em uma torre alta por uma bruxa. Sem portas ou escadas, a torre só é acessível quando Rapunzel lança suas tranças. Ela anseia pela liberdade e é salva por um príncipe que ouve seu canto." 
    }
    
    ];
    
    // FILME
    let filme = [
    
    {
    titulo: "RATATOUILLE",
    imagem: "filme.jpg",
    descricao: "Remy, um rato francês com paladar refinado que sonha ser chef em Paris. Ele faz uma parceria improvável com Linguini, um ajudante de cozinha desajeitado, controlando seus movimentos sob o chapéu para criar pratos fantásticos no restaurante de seu ídolo, Gusteau."
    }

    
    ];
    
    function mostrar(){
    
    let listaFilmes = document.getElementById("listaFilmes");
    let listaFilme = document.getElementById("listaFilme");
    
    filmes.forEach(function(f){
    
    listaFilmes.innerHTML += `
    <div class="card">
    <img src="${f.imagem}">
    <h3>${f.titulo}</h3>
    <p>${f.descricao}</p>
    </div>
    `;
    
    });
    
    filme.forEach(function(s){
    
    listaFilme.innerHTML += `
    <div class="card">
    <img src="${s.imagem}">
    <h3>${s.titulo}</h3>
    <p>${s.descricao}</p>
    </div>
    `;
    
    });
    
    }
    
    mostrar();




