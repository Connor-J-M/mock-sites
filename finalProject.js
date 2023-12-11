//MAKE SURE EACH ITEM IS IN THE SAME ORDER HERE AS ON THE WEBSITE
items  = { "items": [
    {"Name":"Stank Tee Black","Price": "30$","Style": "T-Shirt", "img": "Images/shirtCart1.png", "itemNum":"1"},
    {"Name":"Stank Mound White","Price": "30$","Style": "T-Shirt", "img": "Images/shirt2.png", "itemNum":"2"}, //NO CART IMG
    {"Name":"Stank Pocket Grey","Price": "30$","Style": "T-Shirt", "img": "Images/shirt3.png", "itemNum":"3"}, //NO CART IMG
    {"Name":"Stank Line Sweats","Price": "20$","Style": "Pants", "img": "Images/shirtCart2.png", "itemNum":"4"}, //NO CART IMG
    {"Name":"Stank Hat","Price": "25$","Style": "Hat", "img": "Images/stankHat1.png", "itemNum":"5"}, //NO CART IMG
    {"Name":"Stank Line Sweatshirt","Price": "40$","Style": "Oversized Sweatshirt", "img": "Images/shirtCart3.png", "itemNum":"6"}
]}

itemsAdded = [];

window.addEventListener("DOMContentLoaded", function() {
    //Gives every item on front page a click listener
    htmlItems = document.getElementsByClassName("itemCool")
    for(let i = 0; i < htmlItems.length; i++)
    {
        htmlItems[i].addEventListener("click", function() {
            console.log("Item clicked!")
            itemIdL = htmlItems[i].id
            //Adds item ID to itemsAdded 
            itemsAdded.push(itemIdL)
            stringItems = itemsAdded.toString()
            localStorage.setItem("items", stringItems);
        })
    }

    //adds event listener for clear button (may need to add this. ??)
    document.getElementById("clear").addEventListener("click", function() {
        localStorage.removeItem("items");
        document.querySelector("#cart1").innerHTML =  " ";
        console.log("Clear button clicked!")
    });

    //Loads clicked items into cart
    loadItemsCart();
});

function addCartItem(itemNum)
 {
    document.querySelector("#cart1").innerHTML += ("<img src=\"" + items.items[itemNum - 1].img + "\"></img>")
    console.log("Item added!")
 }

 function loadItemsCart()
 {
    if(localStorage.getItem("items"))
    {
        console.log("Retrieved items!")
        itemsAdded = localStorage.getItem("items").split(",")
        console.log(itemsAdded)
    }
    if(itemsAdded.length > 0)
    {
        for (let i = 0; i <= itemsAdded.length; i++)
        {
            addCartItem(itemsAdded[i]);
        }
    }

 }

