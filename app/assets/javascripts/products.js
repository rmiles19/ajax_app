function toggleForm() {
  showForm = !showForm;
  $('#product-form').remove();
  $('#products-list').toggle();

  if (showForm) {
    $.ajax({
      url: '/product_form',
      method: 'GET'
    }).done( function(html) {
      $('#toggle').after(html)
    });
  }
}

$(document).ready( function() {

$('.product-item').on('click', function () {

    $.ajax({
      url: "http://json-server.devpointlabs.com/api/v1/products",
      method: 'GET',
      dataType: 'JSON'
    }).done( function(products) {
      var list = $('#products-list');
      list.empty()
      products.forEach( function(product) {
        var li = '<li data-product-id="' + product.id + '">' + product.name + '</li>'
         list.append(li)
      })
  });
});
})
