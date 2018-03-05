$(document).ready( function() {
  $('.product-item').on('click', function() {
    currentProduct.id = this.dataset.id
    $.ajax({
      url: "http://json-server.devpointlabs.com/api/v1/products",
      method: 'GET',
      dataType: 'JSON'
    }).done( function(products) {
      var list = $('.products-list');
      list.empty();
      var li = '<a href="localhost:3000/products' + product.id + '"><li class="list-item" id="product" data-product-id="' + product.id + '">' + product.name + '-' + product.price+ ': ' + product.description +'</li></a>'
       list.append(li)

    });
  });
});
