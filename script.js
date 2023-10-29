// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(id) {
    // Recupere os dados do produto da seção correspondente no index.html
    const produto = document.querySelector(`#produto${id}`)

    // Clone o elemento da seção
    const produtoClonado = produto.cloneNode(true);

    // Altere o ID do botão para evitar duplicações no carrinho
    const botao = produtoClonado.querySelector(".car")
    botao.id = `btnremover${id}`
    botao.textContent = "Remover do Carrinho"

    // Adicione o produto clonado ao carrinho.html
    const carrinho = document.getElementById("carrinho")
    carrinho.appendChild(produtoClonado)

    // Defina o botão para remover o produto do carrinho
    botao.addEventListener("click", () => {
        carrinho.removeChild(produtoClonado)
        localStorage.removeItem(`produto${id}`)
    });

    // Salve os dados do produto no localStorage para que possam ser restaurados após o recarregamento
    localStorage.setItem(`produto${id}`, produtoClonado.outerHTML)

    // Desative o botão Adicionar ao Carrinho no index.html
    const botaoAdicionar = document.querySelector(`#btn${id}`)
    botaoAdicionar.disabled = true


// Função para inicializar o carrinho na página carrinho.html
function inicializarCarrinho() {
    const carrinho = document.getElementById("carrinho")

    // Percorra os itens no localStorage e adicione-os ao carrinho
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key.startsWith("produto")) {
            const produtoHTML = localStorage.getItem(key)
            const produtoClonado = document.createElement("div")
            produtoClonado.innerHTML = produtoHTML

            // Altere o ID do botão para o botão de Remover
            const botao = produtoClonado.querySelector(".car")
            const id = key.replace("produto", "")
            botao.id = `btnremover${id}`;
            botao.textContent = "Remover do Carrinho"
            // Adicione o produto clonado ao carrinho
            carrinho.appendChild(produtoClonado)

            // Defina o botão para remover o produto do carrinho
            botao.addEventListener("click", () => {
                carrinho.removeChild(produtoClonado);
                localStorage.removeItem(key)
            });
        }
    }
}

// Adicione manipuladores de eventos para os botões Adicionar ao Carrinho no index.html
for (let i = 1; i <= 9; i++) {
    const botaoAdicionar = document.querySelector(`#btn${i}`)
    botaoAdicionar.addEventListener("click", () => adicionarAoCarrinho(i))
}

// Chame a função de inicialização no carrinho.html
if (document.getElementById("carrinho")) {
    inicializarCarrinho()
}
}