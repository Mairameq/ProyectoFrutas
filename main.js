
let nombrefruta1 = "Manzana";
let nombrefruta2 = "Pera";
let nombrefruta3 = "Banana";

let precioFruta1 = "3000";
let precioFruta2 = "1800";
let precioFruta3 = "2400";

let stockFruta1 = "500";
let stockFruta2 = "100";
let stockFruta3 = "750";

let imgFruta1 = 'http://source.unsplash.com/150x150?apple';
let imgFruta2 = 'http://source.unsplash.com/150x150?pear';
let imgFruta3 = 'http://source.unsplash.com/150x150?banana';

let array = [[nombrefruta1, precioFruta1, stockFruta1, imgFruta1],
             [nombrefruta2, precioFruta2, stockFruta2, imgFruta2],
             [nombrefruta3, precioFruta3, stockFruta3, imgFruta3] ]

//array[0] = "Sandia"//
alert(array[0].length)

fruta1.innerHTML =
    "<img src=" + 
    array[0][3] +
    ">" +
    "<h2>" + 
    array[0][0]+
    "</h2>" + 
    "<p>Precio: " +
     array[0][1]
    "</p>" + 
    "<p>Stock: " + 
    array[0][2] +
    "</p>";
fruta2.innerHTML =
                   `<img src=${array[1][array-length-1]}/>
                    <h2>${array[1][0]} </h2>
                    <h2>${array[1][1]}</h2>
                    <h2>${array[1][2]}</h2>                   
                    `
fruta3.innerHTML =
                     `<img src=${array[2][3]}/>
                    <h2>${array[2][0]}</h2>
                    <h2>${array[2][1]}</h2>
                    <h2>${array[2][2]}</h2>
                    
                    `                    

                   
                   
