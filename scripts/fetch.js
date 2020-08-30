const currencyFormatter = (num) => {
  return num.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

let page = 1;

const loadData = (page) =>{
  return fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`)
}

const insertProducts = (page) => {
  const productsContainer = document.getElementById('products-container');
  
  loadData(page).then(response =>{
    response.json().then(data => {
      data.products.map(product => {
        const p = document.createElement('div');
        p.className = "product"
        p.innerHTML =
          `
          <img src="http:${product.image}" alt="">
          <div class="product-info">
            <span class="text-small">${product.name}</span>
            <small class="description text-tiny">${product.description}</small>
            <small class="text-tiny">De: ${currencyFormatter(product.oldPrice)}</small>
            <strong class="text-medium" >Por: ${currencyFormatter(product.price)}</strong>
            <small class="text-tiny">ou ${product.installments.count}x de ${currencyFormatter(product.installments.value)}</small>
            <button class="button text-medium" type="button">Comprar</button>
          </div>
          `
        ;
        productsContainer.appendChild(p);
      })
    })
  });
}

const buttonLoadMore = document.getElementById('load-more');
buttonLoadMore.addEventListener('click', () => {
  page+=1;
  insertProducts(page);
});

insertProducts(page);
