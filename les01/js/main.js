const products = [
	{id: 1,title: 'Notebook', price: 2000, img: `https://ru.store.asus.com/image/cache/catalog/notebooks-3/rog/fx505_black-470x470.jpg`},
	{id: 2,title: 'Mouse', price: 20, img:`https://upload.wikimedia.org/wikipedia/commons/2/22/3-Tasten-Maus_Microsoft.jpg` },
	{id: 3,title: 'Keyboard', price: 200, img:`https://shop.lenovo.ru/upload/resize_cache/content_webp/800_288_17f5c944b3b71591cc9304fac25365de2/iblock/95b/95b60cbd73f9ca66279f514ceb36f58c.webp` },
	{id: 4,title: 'Gamepad', price: 200, img:`https://c.dns-shop.ru/thumb/st1/fit/300/300/49449e140b3bf0b0f32d97bb34893435/56fa31bfaf3f63590904cee3ebc60c62b8e81c292281db2bbaffc773c52d1d53.jpg` },
];

const renderProduct = (x) =>
	`<div class="product-item">
	<img class="catalog-img" src='${x.img}'>
	<h3>${x.title}</h3>
	<p>${x.price}</p>
	<button class="buy-btn">Купить</button>
</div>`



const renderPage = list =>{
	const productList = list.map(item => renderProduct(item));
	console.log(productList);
	document.querySelector(`.products`).innerHTML = productList.join('');
};

renderPage(products);