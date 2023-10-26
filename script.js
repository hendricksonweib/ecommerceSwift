const btnplaystation = document.getElementById('btnplaystation')
    const btntablet = document.getElementById ('btntablet')
    const btnplaca = document.getElementById('btnplaca')
    const btngabinete = document.getElementById('btngabinete')
    const btnnotebook = document.getElementById('btnnotebook')
    const btnssd = document.getElementById('btnssd')
    const btnallinone = document.getElementById('btnallinone')
    const btnmonitor = document.getElementById('btnmonitor')
    const btnfonte = document.getElementById('btnfonte')

btnplaystation.addEventListener("click", function(){
    btnplaystation.textContent ="produto adicionado!"
    localStorage.setItem ("btnplaystation",btnplaystation)
    console.log(typeof btnplaystation)
})
btntablet.addEventListener("click", function(){
    btntablet.textContent ="produto adicionado!"
    localStorage.setItem ("btntablet",btntablet)
})
btnplaca.addEventListener("click", function(){
    btnplaca.textContent ="produto adicionado!"
    localStorage.setItem ("btnplaca",btnplaca)
})
btngabinete.addEventListener("click", function(){
    btngabinete.textContent ="produto adicionado!"
    localStorage.setItem ("btngabinete",btngabinete)
})
btnnotebook.addEventListener("click", function(){
    btnnotebook.textContent ="produto adicionado!"
    localStorage.setItem ("btnnotebook",btnnotebook)
})
btnssd.addEventListener("click", function(){
    btnssd.textContent ="produto adicionado!"
    localStorage.setItem ("btnssd",btnssd)
})
btnallinone.addEventListener("click", function(){
    btnallinone.textContent ="produto adicionado!"
    localStorage.setItem ("btnallinone",btnallinone)
})
btnmonitor.addEventListener("click", function(){
    btnmonitor.textContent ="produto adicionado!"
    localStorage.setItem ("btnmonitor",btnmonitor)
})
btnfonte.addEventListener("click", function(){
    btnfonte.textContent ="produto adicionado!"
    localStorage.setItem ("btnfonte",btnfonte)
})