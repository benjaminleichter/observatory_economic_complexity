$(document).ready(function(){

// Defines Placeholder Varialbes for Help Box

  var h3_holder ="Help Box";
  var p_holder = "Welcome to the Atlas of Economic Complexity. Hover over an element to see it's function.";

// Replaces displayed text with placeholder text

  function exit(){
    $("#helpBoxInner h3").html(h3_holder);
    $("#helpBoxInner p").html(p_holder);
  }

// Inserts text on mouseenter and replaces it on mouseleave

  $("#country1").mouseenter(function(){
    $("#helpBoxInner h3").html("Country Selection Menu");
    $("#helpBoxInner p").html("Select the country you want to explore.");
  });
  $("#country1").mouseleave(function(){
    exit();
  });

  $("#viz").mouseenter(function(){
    $("#helpBoxInner h3").html("Visualization");
    $("#helpBoxInner p").html("The visualization displays the query you have selected.");
  });
  $("#viz").mouseleave(function(e){
    exit();
  });

  $("#trade_flow").mouseenter(function(){
    $("#helpBoxInner h3").html("Flow Type Menu");
    $("#helpBoxInner p").html("Choose whether you would like to explore import or export data.");
  });
  $("#trade_flow").mouseleave(function(e){
    exit();
  });

  $("#country-product").mouseenter(function(){
    $("#helpBoxInner h3").html("Product Selection Menu");
    $("#helpBoxInner p").html("Select which product you would like to explore.");
  });
  $("#country-product").mouseleave(function(e){
    exit();
  });

  $("#country-trade-partner").mouseenter(function(){
    $("#helpBoxInner h3").html("Trade Partner Menu");
    $("#helpBoxInner p").html("Choose if you would like to explore the trade relationship with a specific partner.");
  });
  $("#country-trade-partner").mouseleave(function(e){
    exit();
  });

  $("#detLev").mouseenter(function(){
    $("#helpBoxInner h3").html("Level of Detail");
    $("#helpBoxInner p").html("Select which level of product aggregation you would like to see displayed.");
  });
  $("#detLev").mouseleave(function(e){
    exit();
  });


  $("#shareThisPlaceholder").mouseenter(function(){
    $("#helpBoxInner h3").html("Sharing Buttons");
    $("#helpBoxInner p").html("Found something interesting? Share it with others on Facebook, Twitter, Google+ or via email.");
  });
  $("#shareThisPlaceholder").mouseleave(function(e){
    exit();
  });

  $("#createStoryPlaceHolder").mouseenter(function(){
    $("#helpBoxInner h3").html("Story Creation Button");
    $("#helpBoxInner p").html("Begin a story and add this visualization to the story you want to tell.");
  });
  $("#createStoryPlaceHolder").mouseleave(function(e){
    exit();
  });

$(".prodClass").mouseenter(function(){
    $("#helpBoxInner h3").html("Product Classification");
    $("#helpBoxInner p").html("You can select the type of data you want to be displayed. For an explanation of the difference between SITC4 and HS4, see the glossary.");
  });
$(".ProdClass").mouseleave(function(e){
    exit();
  }); 
$("#tMapBtn").mouseenter(function(){
    $("#helpBoxInner h3").html("Treemap");
    $("#helpBoxInner p").html("The Treemap visualization depicts the composition of a country’s import or export basket, both by products and trading partners.");
  });
$("#tMapBtn").mouseleave(function(e){
    exit();
  }); 
$("#mapBtn").mouseenter(function(){
    $("#helpBoxInner h3").html("Map");
    $("#helpBoxInner p").html("The Map visualization shows a country’s trade relationships on a map of the world.");
  });
$("#mapBtn").mouseleave(function(e){
    exit();
  }); 
$("#stackedBtn").mouseenter(function(){
    $("#helpBoxInner h3").html("Stacked Graph");
    $("#helpBoxInner p").html("The Stacked Graph visualization shows how the composition of a country’s trade both by product and trading partner changes over time.");
  });
$("#stackedBtn").mouseleave(function(e){
    exit();
  });
  $("#feedbackPlaceholder").mouseenter(function(){
    $("#helpBoxInner h3").html("Feedback Button");
    $("#helpBoxInner p").html("Let us know how we can improve the Atlas (bug fixes, content layout, etc.)");
  });
  $("#feedbackPlaceholder").mouseleave(function(e){
    exit();
  });   
});