let btnBasket = document.getElementById('btn-cart');

class ProductList {
	constructor(container=`.products`) {
		this.container = container;
		this.goods = [];
		this._fetchProducts();
		this.render();
	}

	_fetchProducts() {
		this.goods = [
			{id: 1,	title: 'Notebook', price: 2000,	img: `https://ru.store.asus.com/image/cache/catalog/notebooks-3/rog/fx505_black-470x470.jpg`
			},
			{id: 2,	title: 'Mouse',	price: 20, img: `https://upload.wikimedia.org/wikipedia/commons/2/22/3-Tasten-Maus_Microsoft.jpg`
			},
			{id: 3,	title: 'Keyboard',	price: 200,	img: `https://shop.lenovo.ru/upload/resize_cache/content_webp/800_288_17f5c944b3b71591cc9304fac25365de2/iblock/95b/95b60cbd73f9ca66279f514ceb36f58c.webp`
			},
			{id: 4,	title: 'Gamepad', price: 200, img: `https://c.dns-shop.ru/thumb/st1/fit/300/300/49449e140b3bf0b0f32d97bb34893435/56fa31bfaf3f63590904cee3ebc60c62b8e81c292281db2bbaffc773c52d1d53.jpg`
			}
			];
	}

	render() {
		const block = document.querySelector(this.container);
		for (let product of this.goods) {
			const item = new ProductItem(product);
			block.insertAdjacentHTML("beforeend", item.render());
//			block.innerHTML += item.render;
		}
	}
}

class ProductItem {
	constructor(product){
		this.title = product.title;
		this.id = product.id;
		this.price = product.price;
		this.img = product.img;
	}
	render() {
		return `<div class="product-item">
				<img class="catalog-img" src=${this.img}>
				<h3>${this.title}</h3>
				<p>${this.price}</p>
				<button class = "buy-btn"> Купить </button>
				<button  class = "buy-btn"> Удалить </button>
				</div>`
		 
	}
	
}



//Класс корзины, потребуется для подъитога.


//class Cart(){
	 
//	let CartMas = [];
//	constructor(){
//		
//	};
// totalCartPrice() {
//        let totalPrice = document.getElementById('basket'); 
//        let sum = 0;
//        this.goods.forEach (good => { 
//            sum += good.price
//        });
//        totalPrice.innerText = `Итого  ${sum} рублей`;
//    }
//	render () {};
//};

//Пока что очень не понятно как при такой отрисовке, привязать кнопки к уникальному товару.



let list = new ProductList();




