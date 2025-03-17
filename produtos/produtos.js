function filtrarProdutos() {
    let minPrice = document.getElementById("minPrice").value || 0;
    let maxPrice = document.getElementById("maxPrice").value || Infinity;
    let produtos = document.querySelectorAll(".produto");

    produtos.forEach(produto => {
      let preco = parseFloat(produto.getAttribute("data-price"));
      if (preco >= minPrice && preco <= maxPrice) {
        produto.style.display = "block";
      } else {
        produto.style.display = "none";
      }
    });
  }