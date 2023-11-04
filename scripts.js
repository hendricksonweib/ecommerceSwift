const products = [
  {
    id: 0,
    name: "Console Playstation 5 Sony",
    price: 756.69,
    instock: 100,
    description:
      "Console Playstation 5 Sony, SSD 825GB, Controle sem fio DualSense, Edição Digital, Branco - 1214B.",
    imgSrc: "./img/playstation.svg",
  },
  {
    id: 1,
    name: "Tablet Samsung Galaxy Tab A8",
    price: 2270.40,
    instock: 43,
    description:
      "Tablet Samsung Galaxy Tab A8 4G, 64GB, 4GB RAM, Tela 10.5, Câmera 8MP, Android 11, Nano Sim, Cinza - SM-X205NZAUZTO.",
    imgSrc: "./img/tablet.svg",
  },
  {
    id: 2,
    name: "Computador All in One LGin One",
    price: 359.93,
    instock: 18,
    description:
      "Computador All in One LG 22V30R, Intel Celeron N5100, 8GB, SSD 128GB, Windows Home 11, Tela de 22 Full HD, Branco - 22V30R-L.BY31P2.",
    imgSrc: "./img/allinone.svg",
  },
  {
    id: 3,
    name: "Fonte MSI MAG A650BN",
    price: 61.04,
    instock: 5,
    description:
      "Fonte MSI MAG A650BN, ATX, 650W, 80 PLUS Bronze, PFC Ativo, Entrada Bivolt, Preto - 306-7ZP2B22-CE0.",
    imgSrc: "./img/fonte.svg",
  },
  {
    id: 4,
    name: "Gabinete Rise Mode Office 01",
    price: 14.24,
    instock: 4,
    description:
      "Gabinete Rise Mode Office 01, mATX, Preto - RM-GA-OF-FB",
    imgSrc: "./img/gabinete.svg",
  },
  {
    id: 5,
    name: "Monitor Gamer LG 21.5 LED Full HD",
    price: 89.52,
    instock: 40,
    description:
      "Monitor Gamer LG 21.5 LED Full HD, 75Hz, 5ms, HDMI, FreeSync - 22MP410-B.",
    imgSrc: "./img/monitor.svg",
  },
  {
    id: 6,
    name: "Notebook Gamer Acer Nitro 5",
    price: 844.38,
    instock: 40,
    description:
      "Notebook Gamer Acer Nitro 5 AMD Ryzen 5 7535HS, 8GB, NVIDIA RTX 3050, SSD 512GB, 15.6 Full HD, Linux Gutta, Preto - AN515-47-R5SU.",
    imgSrc: "./img/notebook.svg",
  },
  {
    id: 7,
    name: "Placa de Vídeo RX 6600",
    price: 244.16,
    instock: 40,
    description:
      "Placa de Vídeo RX 6600 CLD 8G ASRock AMD Radeon, 8GB, GDDR6 - 90-GA2RZZ-00UANF.",
    imgSrc: "./img/placadevideo.svg",
  },
  {
    id: 8,
    name: "SSD 1 TB Kingston NV2",
    price: 56.97,
    instock: 40,
    description:
      "SSD 1 TB Kingston NV2, M.2 2280 PCIe, NVMe, Leitura: 3500 MB/s e Gravação: 2100 MB/s - SNV2S/1000G.",
    imgSrc: "./img/ssd.svg",
  },
];

const productsEl = document.querySelector('.products')
const cartItemsEl = document.querySelector('.cart-items')
const subtotalEl = document.querySelector('.subtotal')
const totalItemsInCartEl = document.querySelector('.total-items-in-cart')

function renderProducts (){
  products.forEach((product)=>{
    productsEl.innerHTML += `
    <div class="item">
    <div class="item-container">
        <div class="item-img">
            <img src="${product.imgSrc}" alt="${product.name}">
        </div>
        <div class="desc">
            <h2>${product.name}</h2>
            <h2><small>$</small>${product.price}</h2>
            <p>
            ${product.description}
            </p>
        </div>
        <div class="add-to-wishlist">
            <img src="./icons/heart.png" alt="add to wish list">
        </div>
        <div class="add-to-cart" onclick="addToCart(${product.id})">
            <img src="./icons/bag-plus.png" alt="add to cart">
        </div>
    </div>
</div>
    `
  })  
}
renderProducts()


 let cart = JSON.parse(localStorage.getItem("CART")) || []
updateCart()

function addToCart(id){
  if(cart.some((item) => item.id === id )){
    alert('Produto já existente no carrinho!')
  }else{
    const item = products.find((product) => product.id === id)
    cart.push({
      ...item,
      numberOfUnits:1,
    })
  }
  updateCart()
}

function updateCart(){
  renderCartItems()
  renderSubTotal()
  localStorage.setItem("CART",JSON.stringify(cart))
}


function renderSubTotal(){
  let totalPrice = 0 , TotalItems = 0
  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits
    TotalItems += item.numberOfUnits
  })

  subtotalEl.innerHTML = `Subtotal(${TotalItems}itens): $${totalPrice.toFixed(2)}`
  totalItemsInCartEl.innerHTML = TotalItems
}

function renderCartItems(){
  cartItemsEl.innerHTML = ""
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
        <div class="cart-item">
        <div class="item-info" onclick="removeItemFromCart(${item.id})">
            <img src="${item.imgSrc}" alt="${item.name}">
            <h4>${item.name}</h4>
        </div>
        <div class="unit-price">
            <small>$</small>${item.price}
        </div>
        <div class="units">
            <div class="btn minus" onclick="chanceNumerOfUnits('minus', ${item.id})">-</div>
            <div class="number">${item.numberOfUnits}</div>
            <div class="btn plus"  onclick="chanceNumerOfUnits('plus', ${item.id} )">+</div>           
        </div>
    </div>
    `   
  })
}

function removeItemFromCart(id){
 cart = cart.filter((item) => item.id !== id)

 updateCart()

}

function chanceNumerOfUnits(action, id){
 cart = cart.map((item) => {
  let numberOfUnits = item.numberOfUnits

  if(item.id === id){
    if(action == "minus" && numberOfUnits >1){
      numberOfUnits--
    }else if(action=== "plus" && numberOfUnits < item.instock){
      numberOfUnits++
    }
  }
  return {
    ...item,
    numberOfUnits,
  }
  })

  updateCart()
}