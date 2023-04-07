const addCartItem = function(itemIndex) {
    const item = document.querySelectorAll('.cards')[itemIndex];
    const itemName = item.querySelector('h5').textContent;
    const itemPrice = item.querySelector('.price').getAttribute('data-price'); // get the price 
  
    //li cart
    const cartItem = document.createElement('li');
    const itemText = document.createTextNode(`${itemName} - ${itemPrice}`);
    cartItem.style.listStyle = 'none';
    cartItem.style.fontFamily = 'Calibri';

    
    // del btn on each item
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
    //style
    deleteButton.style.border = "none";
    deleteButton.style.marginLeft = '20px';
    deleteButton.style.color = 'rgb(3, 22, 87)';
    deleteButton.style.background = 'none';
    
    deleteButton.addEventListener('click', function() {
      cartItem.remove();
      const total = document.querySelector('#total');
      const totalPrice = Number(total.textContent.slice(13)) - parseFloat(itemPrice);
      total.textContent = `Total Price: ${totalPrice.toFixed(2)}`;
    });
  
    cartItem.appendChild(itemText);
    cartItem.appendChild(deleteButton);
    document.querySelector('#cart').appendChild(cartItem);
  
    // total
    const total = document.querySelector('#total');
    const totalPrice = Number(total.textContent.slice(13)) + parseFloat(itemPrice);
    total.textContent = `Total Price: ${totalPrice.toFixed(2)}`;
    total.style.fontSize ='20px';
    total.style.fontStyle = 'italic';
};
  
  const buttons = document.querySelectorAll('.addCart');
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => addCartItem(index));
    button.addEventListener('click', () => alert("Successfully! Add to Cart"))
  });
  

const category = document.querySelector('.innerCategory');

const dragging = function(e){
  category.scrollLeft = e.pageX;
}

category.addEventListener('mousemove', dragging);
