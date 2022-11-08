function criaJogo(player1, hour, player2){
   return `
   <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delayCard = -.3
function criaCard(date, day, games){
  delayCard = delayCard  + 0.3
  return `
        <div class="card" style="animation-delay: ${delayCard}s" >
          <h2>${date} <span>${day}</span></h2>
          <ul>
          ${games}
          </ul>
        </div>
  `
}



document.querySelector("#cards").innerHTML = 
      criaCard("24/11", "quinta", 
        criaJogo("brazil", "16:00", "serbia") )+

      criaCard("28/11", "segunda", 
         criaJogo("brazil", "13:00", "switzerland"))+
        
      criaCard("02/12", "terça",   
        criaJogo("cameroon", "16:00", "brazil"))
      