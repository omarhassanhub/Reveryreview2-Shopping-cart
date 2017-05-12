search = [];
author = [];
category = [];
year = [];
pricerange = [];
filterStockAmount = [];
filterStockAmount[0] = "Available";

//This method is used to load the data from the JSON file.
function productDisplay(pList){
$(pList).each(function(i,product){

	var tableRow = $("<tr/>").attr("id",i);
    var descData = $("<td/>").attr("id","itemTd");
    var img = $("<img />").attr("src","css/images/"+pList[i].url).css("height","200px", "width","200px");
    img.appendTo(tableRow);
	var staricon = $("<img />").attr("src","css/images/"+pList[i].staricon).css("height","15px", "width","15px");
	var comment = $("<div /><br><br>").text(pList[i].comment ).css({"font-family": "Andale Mono, monospace"});
	var title = $("<div />").text(pList[i].title ).css({"font-weight": "bold", "font-size": "150%", "color": "#58ACFA"});
	var div = $("<div /><br>").text(pList[i].description ).css({"font-family": "Andale Mono, monospace"});
	var div2 = $("<div />").text("by " + pList[i].author + "\t" +pList[i].year);
	var div3 = $("<div /><br>").text("Price: " + "£" + pList[i].price).css({"font-weight": "bold"});
	var input = $("<input />").attr("type","textbox").attr("id","vaQuantity"+i);
	var btnCart = $("<input /><br><br>").attr("type","button").attr("id","buttonAddToCart").attr("value","add to cart").css("background-color","#F2F2F2");
	var hr = $("<hr><br>");
	var commenthr = $("<div></div>").text("Community Reviews").css({"font-weight": "bold", "font-size": "110%", "color": "green", "background-color": "#F2F2F2"});
	var hr2 = $("<hr>");

    img.addClass(pList[i].author);
    img.addClass(pList[i].category.substring(0))
	img.addClass(pList[i].year.substring(0))
	img.addClass(pList[i].pricerange.substring(0))
	
	comment.addClass(pList[i].author);
    comment.addClass(pList[i].category.substring(0))
	comment.addClass(pList[i].year.substring(0))
	comment.addClass(pList[i].pricerange.substring(0))
	
	commenthr.addClass(pList[i].author);
    commenthr.addClass(pList[i].category.substring(0))
	commenthr.addClass(pList[i].year.substring(0))
	commenthr.addClass(pList[i].pricerange.substring(0))
	
	staricon.addClass(pList[i].author);
    staricon.addClass(pList[i].category.substring(0))
	staricon.addClass(pList[i].year.substring(0))
	staricon.addClass(pList[i].pricerange.substring(0))
	
	title.addClass(pList[i].author);
    title.addClass(pList[i].category.substring(0))
	title.addClass(pList[i].year.substring(0))
	title.addClass(pList[i].pricerange.substring(0))
	
	div.addClass(pList[i].author);
    div.addClass(pList[i].category.substring(0))
	div.addClass(pList[i].year.substring(0))
	div.addClass(pList[i].pricerange.substring(0))
	
	div2.addClass(pList[i].author);
    div2.addClass(pList[i].category.substring(0))
	div2.addClass(pList[i].year.substring(0))
	div2.addClass(pList[i].pricerange.substring(0))
	
	div3.addClass(pList[i].author);
    div3.addClass(pList[i].category.substring(0))
	div3.addClass(pList[i].year.substring(0))
	div3.addClass(pList[i].pricerange.substring(0))
	
	input.addClass(pList[i].author);
    input.addClass(pList[i].category.substring(0))
	input.addClass(pList[i].year.substring(0))
	input.addClass(pList[i].pricerange.substring(0))
	
	btnCart.addClass(pList[i].author);
    btnCart.addClass(pList[i].category.substring(0))
	btnCart.addClass(pList[i].year.substring(0))
	btnCart.addClass(pList[i].pricerange.substring(0))
	
    if(pList[i].amountInStock != '0')
    
	img.addClass("Available");
	comment.addClass("Available")
	title.addClass("Available")
	staricon.addClass("Available")
	div.addClass("Available")
	div3.addClass("Available")
	div2.addClass("Available")
	input.addClass("Available")
	btnCart.addClass("Available")
	
	
	title.appendTo(descData);
	div2.appendTo(descData);
	staricon.appendTo(descData);
	div.appendTo(descData);
	div3.appendTo(descData);
	input.appendTo(descData);
	btnCart.appendTo(descData);
	descData.appendTo(tableRow);
	commenthr.appendTo(descData);
	hr2.appendTo(descData);
	comment.appendTo(descData);
    tableRow.appendTo($("#products"));
	
    if($.inArray(pList[i].author,author) == -1 ) { 
      author.push(pList[i].author);
    }    
    if ($.inArray(pList[i].category, category) == -1 ) {       
      category.push(pList[i].category);
    } 

	if ($.inArray(pList[i].year, year) == -1 ) {       
      year.push(pList[i].year);
    } 	
	
	if ($.inArray(pList[i].pricerange, pricerange) == -1 ) {       
      pricerange.push(pList[i].pricerange);
    } 	

  
  });

  search.push(filterStockAmount)
  search.push(author);
  search.push(category);
  search.push(year);
  search.push(pricerange);
}


//This method is used to search through the JSON file.
$.getJSON('JSON/productstorage.json', function(data, i){
    $('#button').on('click', function(e) {
    e.preventDefault();                                       
    var description = $('#inputText').val().toUpperCase();
     
    var results = data.filter(function(elem) {
                      return elem.title.toUpperCase().indexOf(description) !== -1;
                  });
    console.log(results.length);
    var items = [];
    $.each(results, function(i, product) {

		items.push('<img src="' + "css/images/" + product.url +  '" style="' + "float:left"  + '" />');
		items.push("<h1 style=color:#58ACFA; font-weight:bold>" + this['title'] +  "</h1>");
		items.push("<br>");
		items.push("<td>" + "by " + this['author'] + "</td>");
		items.push("<br>")
		items.push('<img src="' + "css/images/" + product.staricon  + '" style="' + "height:15px"  + '" />');
		items.push("<br>");
		items.push("<td >" + "<p style=font-family:Andale Mono>" + this['description'] + "<p>" + "</td>");
		items.push("<br>");
		var hr = $("<hr><br>");
	
	var tableRow = $("<tr/>").attr("id",i);
    var descData = $("<td/>").attr("id","itemTd");	

	var input = $("<input />").attr("type","textbox").attr("id","vaQuantity"+i);
	var btnCart = $("<input /><br>").attr("type","button").attr("id","buttonAddToCart").attr("value","add to cart").css("background-color","#F2F2F2");
	input.appendTo(descData);
	btnCart.appendTo(descData);
	hr.appendTo(descData);
	descData.appendTo(tableRow);
    tableRow.appendTo($("#products2"));
	
    });
	
    $('#results').empty();

    $('<div />', {
       html: items.join('')
    }).appendTo('#results');

});
   }); 
   

//This method is used to create a check box for each category.   
function displayChecklistButton(){
  count = 0
  $.each(search,function(ind, arr){    
    count++;
    var option = $("<div />").attr("id",count);
    $.each(arr,function(pos,value){         
      var check_box = $("<input/>").attr("type", "checkbox").attr("id",count)      
      if(value.indexOf(".") > 0) {
        check_box.text(value.substring(0));
      }
      else {
        check_box.text(value);
      }
      option.append(check_box);
      option.append(value + "<br />")    
    });
    option.append("<br />");
    option.appendTo($("#itemAddToCart"));
  });
  
  
}

//This method is used to calculate the total price of the products.
function calculateTotal() {
  var pTotal = 0.0
  $("td.amount").each(function(index,element){
    pTotal += parseFloat($(element).text(),10)
  });
  $("#calculateTotal").val(pTotal.toFixed(2));
  $("#calculateTotal2").val(pTotal.toFixed(2));
  $("#calculateTotal3").val(pTotal.toFixed(2));
}


//This method is used to filter the products.
function productFilter(clicked){    
  $("#products img").show();
  $("img").removeClass("filtered");
  $("#products div").show();
  $("div").removeClass("filtered");
  $("#products div").show();
  $("div").removeClass("filtered");
  $("#products input").show();
  $("input").removeClass("filtered");
  $("#products input").show();
  $("input").removeClass("filtered");
  if($("#itemAddToCart :input").is(":checked")) {    
    $("#itemAddToCart div").each(function(ind,block){
      listChecked = [];
      $(block).children(":input").each(function(index,element){
        var filter = $(element).text();
        if($(element).is(":checked")) {
          if(filter.indexOf(">") >= 0) {
            listChecked.push(filter.substring(0));          
          }
          else {
            listChecked.push(filter);                 
          }     
        }        
      });
      if(listChecked.length > 0) {
        pictureFilter(listChecked);
      }
    });  
  }
  
  
}

//This method is used to add a product to the shopping cart.
function AddToShopCart(tr,product) {
  
  if($("#AssignShoppingCart tr."+product['id']).length) {
    
	var pQuantity = $("#shoppingCartQuantity"+product['id']).val()
    
	if($.isNumeric(pQuantity) && pQuantity >= 0) {  
      
	  pQuantity = parseInt(pQuantity,10) + parseInt(tr,10);
      $("#shoppingCartQuantity"+product['id']).val(pQuantity)
      
	  
	  var totalCost = (parseFloat(product['price'],10) * pQuantity).toFixed(2);
      $("#shoppingSubTotal"+product['id']).text(totalCost)
    }
	
	
  }
  
  

  else {
    var shoppingCartTr = $("<tr />").addClass(product['id'])
    var itemTd = $("<td />").attr("id","itemTd")
    var imageList = $("<div />")

    var imageSrc = $("<img />").attr("src","css/images/"+product['url']).addClass("cart_img")
    imageSrc.appendTo(imageList)
    imageList.appendTo(itemTd);
	
    var descList = $("<div />").text(product['author'])
    descList.appendTo(itemTd);
    itemTd.appendTo(shoppingCartTr);

    var priceTd = $("<td />").attr("id","priceTd").text(product['price']);
    priceTd.appendTo(shoppingCartTr);

    var quantityTd = $("<td />").attr("id","quan_td");
	
    var pQuantity = $("<input />").attr("id","shoppingCartQuantity"+product['id']).val(tr).attr("type","text");
    pQuantity.appendTo(quantityTd);
	
    quantityTd.appendTo(shoppingCartTr);

    var pSum = (parseFloat(tr,10) * parseFloat(product['price'],10)).toFixed(2)

    var subtotal = $("<td />").attr("id","shoppingSubTotal"+product['id']).text(pSum).addClass("amount");
    subtotal.appendTo(shoppingCartTr);

    var btnDeleteTd = $("<td />");
    var btnDelete = $("<input />").attr("type","button");
	
    btnDelete.attr("value","remove").attr("id","deleteFromCart").css("background-color","#F2F2F2");
    btnDelete.appendTo(btnDeleteTd);
	
    btnDeleteTd.appendTo(shoppingCartTr)
    shoppingCartTr.appendTo($("#AssignShoppingCart"))
  } 
  calculateTotal();
}

//This method is used to hide/show the products when the category is checked/unchecked.
function pictureFilter(filter) {
  var imgSet = $("#products img:visible");
  var divSet = $("#products div:visible");
  var divSet2 = $("#products div:visible");
  var inputSet = $("#products input:visible");
  var cartSet = $("#products input:visible");
  var filterSet = $(imgSet).each(function(i,image){
      $(image).removeClass("filtered")
  });
  var filterSet2 = $(divSet).each(function(i,image){
      $(image).removeClass("filtered")
  });
  var filterSet5 = $(divSet2).each(function(i,image){
      $(image).removeClass("filtered")
  });
  var filterSet3 = $(inputSet).each(function(i,image){
      $(image).removeClass("filtered")
  });
  var filterSet4 = $(cartSet).each(function(i,image){
      $(image).removeClass("filtered")
  });
  $.each(filter,function(index,element){
    $.each(filterSet,function(id,image){  
      if($(image).hasClass(element)){
        $(image).addClass("filtered");
      }
    });
$.each(filterSet2,function(id,image){  
      if($(image).hasClass(element)){
        $(image).addClass("filtered");
      }
    });  

$.each(filterSet3,function(id,image){  
      if($(image).hasClass(element)){
        $(image).addClass("filtered");
      }
    }); 

$.each(filterSet4,function(id,image){  
      if($(image).hasClass(element)){
        $(image).addClass("filtered");
      }
    });
$.each(filterSet5,function(id,image){  
      if($(image).hasClass(element)){
        $(image).addClass("filtered");
      }
    });  	
  });
  $("#products img").hide();
  $("#products img.filtered").show();
  $("#products div").hide();
  $("#products div.filtered").show();
  $("#products div").hide();
  $("#products div.filtered").show();
  $("#products input").hide();
  $("#products input.filtered").show();
  $("#products input").hide();
  $("#products input.filtered").show();
  $("#products hr").hide();
  $("#products hr.filtered").show();
  
}
 

//This is the main method that invokes the sub methods.
$(document).ready(function(){
	$("#tabs").tabs();
	$.ajax({
    url : "JSON/productstorage.json",
    type : "get",
    dataType : "json",
	
	cache : true,	
    success : function(json){

	  productDisplay(json);

      displayChecklistButton();	

	  $("#AssignShoppingCart").delegate('#deleteFromCart','click',function(){
        $(this).parents("tr").detach();
        calculateTotal();
      });
	  
	  $("#itemAddToCart :input").click(function(){
        productFilter($(this).text(),$(this).attr('id'))
      });
	  
	  
      $("*#buttonAddToCart").click(function(){
        var tableRow = $(this).parents("tr").attr("id")
        var pQuantity = $("#vaQuantity"+tableRow).val();
        if($.isNumeric(pQuantity) && pQuantity > 0) {
          AddToShopCart($("#vaQuantity"+tableRow).val(),json[tableRow]);
        }    
      });
	  

      $("#AssignShoppingCart ").delegate('#quan_td :input','focusout',function(){
        var pQuantity = $(this).val();
        if($.isNumeric(pQuantity) && pQuantity >= 0) {
          var pId = $(this).parents("tr").attr("class")        
          var pAmount = (pQuantity * parseFloat(json[pId]['price'],10)).toFixed(2)
          $("#shoppingSubTotal"+pId).text(pAmount)
          calculateTotal();
        }
      });
	  
	  

    },
    error : function(xhr,status){
      console.log(status)
    }    
  });
});
