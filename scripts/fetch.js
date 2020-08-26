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
        const p = document.createElement('p');
        p.innerHTML =
          `<div class="product">
            <img src="http:${product.image}" alt="">
            <span>${product.name}</span>
            <small class="description">${product.description}</small>
            <small>De: ${currencyFormatter(product.oldPrice)}</small>
            <strong>Por: ${currencyFormatter(product.price)}</strong>
            <small>ou ${product.installments.count}x de ${currencyFormatter(product.installments.value)}</small>
            <button type="button">Comprar</button>
          </div>`
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
