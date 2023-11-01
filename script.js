const btnPlaystation = document.getElementById('btnplaystation')
const btnTablet = document.getElementById('btntablet')
const btnPlaca = document.getElementById('btnplaca')
const btnGabinete = document.getElementById('btngabinete')
const btnNotebook = document.getElementById('btnnotebook')
const btnSsd = document.getElementById('btnssd')
const btnAll = document.getElementById('btnallinone')
const btnMonitor = document.getElementById('btnmonitor')
const btnFonte = document.getElementById('btnfonte')

btnPlaystation.addEventListener('click',function() {
  if(btnPlaystation.textContent === 'Adicionar ao carrinho'){
    btnPlaystation.textContent = 'Produto adicionado !'
    localStorage.setItem('playstation','produto 1')
  } else{
    btnPlaystation.textContent = 'Adicionar ao carrinho'
    localStorage.removeItem('playstation','produto 1')
  }
})
btnTablet.addEventListener('click',function() {
  if(btnTablet.textContent === 'Adicionar ao carrinho'){
    btnTablet.textContent = 'Produto adicionado !'
    localStorage.setItem('tablet','produto 2')
  } else{
    btnTablet.textContent = 'Adicionar ao carrinho'
    localStorage.removeItem('tablet','produto 2')
  }
})
btnPlaca.addEventListener('click',function() {
  if(btnPlaca.textContent === 'Adicionar ao carrinho'){
    btnPlaca.textContent = 'Produto adicionado !'
    localStorage.setItem('placa de video','produto 3')
  } else{
    btnPlaca.textContent = 'Adicionar ao carrinho'
    localStorage.removeItem('placa de video','produto 3')
  }
})
btnGabinete.addEventListener('click',function() {
  if(btnGabinete.textContent === 'Adicionar ao carrinho'){
    btnGabinete.textContent = 'Produto adicionado !'
    localStorage.setItem('gabinete','produto 4')
  } else{
    btnGabinete.textContent = 'Adicionar ao carrinho'
    localStorage.removeItem('gabinete','produto 4')
  }
})
btnNotebook.addEventListener('click',function() {
  if(btnNotebook.textContent === 'Adicionar ao carrinho'){
    btnNotebook.textContent = 'Produto adicionado !'
    localStorage.setItem('notebook','produto 5')
  } else{
    btnNotebook.textContent = 'Adicionar ao carrinho'
    localStorage.removeItem('notebook','produto 5')
  }
})
btnSsd.addEventListener('click',function() {
  if(btnSsd.textContent === 'Adicionar ao carrinho'){
    btnSsd.textContent = 'Produto adicionado !'
    localStorage.setItem('ssd','produto 6')
  } else{
    btnSsd.textContent = 'Adicionar ao carrinho'
    localStorage.removeItem('ssd','produto 6')
  }
})
btnAll.addEventListener('click',function() {
  if(btnAll.textContent === 'Adicionar ao carrinho'){
    btnAll.textContent = 'Produto adicionado !'
    localStorage.setItem('all in one','produto 7')
  } else{
    btnAll.textContent = 'Adicionar ao carrinho'
    localStorage.removeItem('all in one','produto 7')
  }
})
btnMonitor.addEventListener('click', function() {
   if(btnMonitor.textContent === 'Adicionar ao carrinho'){
    btnMonitor.textContent = 'Produto adicionado !'
    localStorage.setItem('monitor','produto 8')
   }else{
    btnMonitor.textContent = 'Adicionar ao carrinho'
    localStorage.removeItem('monitor','produto 8')
   }
})
btnFonte.addEventListener('click',function() {
  if(btnFonte.textContent === 'Adicionar ao carrinho'){
    btnFonte.textContent = 'Produto adicionado !'
    localStorage.setItem('fonte','produto 9')
  } else{
    btnFonte.textContent = 'Adicionar ao carrinho'
    localStorage.removeItem('fonte','produto 9')
  }
})

const sidebar = document.getElementById('expandir')
const carshop = document.getElementById('sidebar')
const back = document.getElementById('backHome')

carshop.addEventListener('click', function(){
    sidebar.style.display = 'block'
    back.addEventListener('click', function(){
      sidebar.style.display = 'none'
    })
})