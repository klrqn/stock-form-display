//Stock object model
function Stock(ticker, name, price, change, marketCap) {
	this.ticker = ticker;
	this.name = name;
	this.price = price;
	this.change = change;
	this.marketCap = marketCap;
}

//Blog object model
function Blog() {
  this.post = [];

  this.addStock = function(stock) {
    this.post.push(stock);
  }
}

//new Stock object
var stockABC = new  Stock('ABC', 'alphabet', 100, 5, 1000);

//new Blog object
var blog = new Blog();

//adds the stock to the empty array
blog.addStock(stockABC);

//function to add Blog stocks to HTML content
function addToHTML() {
	for(var i=0; i<blog.post.length; i++){
		var article = document.querySelector('#blog_posts');
		var ticker = document.createElement('h1');
		var name = document.createElement('h2');
		var price = document.createElement('p');
		var change = document.createElement('p');
		var marketcap = document.createElement('p');

		var blog_ticker = blog.post[i].ticker;
		var blog_name = blog.post[i].name;
		var blog_price = blog.post[i].price;
		var blog_change = blog.post[i].change;
		var blog_marketcap = blog.post[i].marketcap;

		ticker.textContent = blog_ticker;
		name.textContent = blog_name;
		price.textContent = blog_price;
		change.textContent = blog_change;
		marketcap.textContent = blog_marketcap;

		article.appendChild(ticker);
		article.appendChild(name);
		article.appendChild(price);
		article.appendChild(change);
		article.appendChild(marketcap);
	}
}

var submit = document.getElementById('submit');

//Event listener
submit.addEventListener('click', function getTarget(e) {
  e.preventDefault();
  var jsTickerInput = document.getElementById('ticker_input').value;
  var jsNameInput = document.getElementById('name_input').value;
  var jsPriceInput = document.getElementById('price_input').value;
  var jsChangeInput = document.getElementById('change_input').value;
  var jsMarketcapInput = document.getElementById('marketcap_input').value;
  var newStock = new Stock(jsTickerInput, jsNameInput, jsPriceInput, jsChangeInput, jsMarketcapInput);
  blog.addStock(newStock);
  addToHTML();
});