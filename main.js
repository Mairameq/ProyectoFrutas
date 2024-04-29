
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

fruta1.innerHTML = "<img src=" + imgFruta1 +">" +
                   "<h2>" + nombrefruta1 + "</h2>" + "<p>" + precioFruta1 + "</p>" + 
                   "<p>" + stockFruta1 +"</p>";
fruta2.innerHTML = `
                    <img src=${imgFruta2}/>
                    <h2>${nombrefruta2}</h2>
                    
                    
                    `

                   
                   
