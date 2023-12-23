//localStorage.clear();
let bagItems;
onload();
function onload(){
  let bagItemStr = localStorage.getItem('bagItems');
  console.log(bagItemStr);
  bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
  console.log(bagItems);
  displayItemOnHomepage();
  displaybagItem();
}

function addToBag(itemId){
  console.log(itemId);
  bagItems.push(itemId);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
  displaybagItem();
 }
 

function displaybagItem(){
    let bagItemElement = document.querySelector('.bag-item-count');

    if(bagItems.length > 0){
      bagItemElement.style.visibility = 'visible';
      bagItemElement.innerText = bagItems.length;
    }
    else{
      bagItemElement.style.visibility = 'hidden';
    }

}


function displayItemOnHomepage(){
  let itemContainerElement = document.querySelector(".items-container");
  if(!itemContainerElement){
    return;
  }
let innerHtml='';
items.forEach(item =>{
   innerHtml += `
  <div class="item-container">
   <img src=${item.image} alt="" class="item-image">
   <div class="rating"> ${item.rating.stars}⭐ | ${item.rating.count} </div>
   <div class="company-name">${item.company}</div>
   <div class="item-name">${item.item_name}</div>
   <div class="price">
      <span class="current-price">Rs ${item.current_price}</span>
      <span class="original-price">Rs ${item.original_price}</span>
      <span class="discount">(${item.discount_percentage}% OFF)</span>
   </div>
   <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
  </div>`
});


itemContainerElement.innerHTML = innerHtml;
}
