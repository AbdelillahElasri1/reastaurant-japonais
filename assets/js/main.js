let produits=[
    {
        "id":"1",
        "img" : "menu2.jfif",
        "nom" : "sushi tsunada",
        "prix" :"120",
    },
    {
        "id":"2",
        "img" : "menu3.jfif",
        "nom" : "sushi nagato",
        "prix" :"120",
    },
    {
        "id":"3",
        "img" : "menu4.png",
        "nom" : "sushi sasuki",
        "prix" :"120",
    },
    {
        "id":"4",
        "img" : "menu5.jfif",
        "nom" : "sushi obito",
        "prix" :"120",
    },
    {
        "id":"5",
        "img" : "menu6.jfif",
        "nom" : "sushi roger",
        "prix" :"120",
    },
    {
        "id":"6",
        "img" : "menu7.jpg",
        "nom" : "sushi gara",
        "prix" :"120",
    },
    {
        "id":"7",
        "img" : "menu8.jpg",
        "nom" : "sushi naruto",
        "prix" :"120",
    },{
        "id":"8",
        "img" : "menu9.jfif",
        "nom" : "sushi itachi",
        "prix" :"120",
    },
    {
        "id":"9",
        "img" : "menu10.png",
        "nom" : "sushi madar",
        "prix" :"120",
    },
    {
        "id":"10",
        "img" : "menu11.jfif",
        "nom" : "sushi luffy",
        "prix" :"120",
    },
    {
        "id":"11",
        "nom" : "Ramen tokyo",
        "prix" :"120",
    },
    {
        "id":"12",
        "nom" : "Ramen dalhi",
        "prix" :"120",
    }, 
    {
        "id":"13",
        "nom" : "Ramen ushi",
        "prix" :"120",
    },
    {
        "id":"14",
        "nom" : "Ramen dragon",
        "prix" :"120",
    },
    {
        "id":"15",
        "nom" : "Jus manga",
        "prix" :"120",
    },
    {
        "id":"16",
        "nom" : "Jus yusu",
        "prix" :"120",
    },
    {
        "id":"17",
        "nom" : "Jus sauce ponzp",
        "prix" :"120",
    },
    {
        "id":"18",
        "nom" : "Jus paudre",
        "prix" :"120",
    }
];

let btnss=document.querySelectorAll(".btns");
let cart=document.querySelector(".cart");
let total=document.getElementById("total-prix");
let valid =document.querySelector(".btnxxx");

let container=00;


btnss.forEach(btns=>{
    btns.addEventListener('click',()=>{
        let id=btns.value;
        for(let i=0;i<produits.length;i++){
            if(produits[i].id==id){
                container++;
                // prompt("Enter Quantiy ");
                // alert("valid product numebr ");
                cart.innerHTML+=`
                <div class="product">
                <img src="assets/menu/${produits[i].img}" alt="">
                <p>${produits[i].nom}</p>
                <span>${produits[i].prix}</span>
            </div>
                `;
                container += parseInt(produits[i].prix);
            }
        }
            console.log(container);
            
        //     total.innerHTML += `
        //     <div class="tootal">
        //     <h4 id="total-prix" style="color: black; text-align:center;">this opertaion is valid </h4>
        // </div>
        //     `;

            
        // total.innerHTML+= container+' $';
            // console.log("total = " ,container);
            // total.innerHTML = `
            //     <div class="total">
            //     <h4 id="total-prix" style="text-align: left;">Total = ${container}</h4>
            //     </div>
            //     `;
            // total.innerHTML+= container+' $';
            
            
    })
})
valid.addEventListener('click',()=>{
                // alert("operation is valid");
                total.innerHTML += `
                <div class="tootal">
                <h4 id="total-prix" style="color: black; text-align:center;">this opertaion is valid </h4>
            </div>
                `;
            })



            




filterObject("all");
function filterObject(c){
    var x,i;
    x = document.getElementsByClassName("test");
    if(c == "all") {
        c = "";
    }
    for( i = 0 ; i< x.length ; i++){
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c)>-1) {
            addClass(x[i] , "show");
        }
    }
}

function addClass(element,name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for ( i = 0; i < arr2.length; i++) {
        if(arr1.indexOf(arr2[i]) == -1){
            element.className += " " + arr2[i];
        }
        
    }
}
function removeClass(element,name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for ( i = 0; i < arr2.length; i++) {
        while(arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
}
    element.className = arr1.join(" ");
}


