let produits=[
    {
        "id":"1",
        "img" : "menu2",
        "nom" : "sushi tsunada",
        "prix" :"120",
    },
    {
        "id":"2",
        "img" : "menu3",
        "nom" : "sushi nagato",
        "prix" :"130",
    },
    {
        "id":"3",
        "img" : "sushi sasuki",
        "nom" : "menu4",
        "prix" :"60",
    },
    {
        "id":"4",
        "img" : "menu5",
        "nom" : "sushi obito",
        "prix" :"80",
    },
    {
        "id":"5",
        "img" : "menu6",
        "nom" : "sushi roger",
        "prix" :"200",
    },
    {
        "id":"6",
        "img" : "menu7",
        "nom" : "sushi gara",
        "prix" :"180",
    },
    {
        "id":"7",
        "img" : "menu8",
        "nom" : "sushi naruto",
        "prix" :"220",
    },{
        "id":"8",
        "img" : "menu9",
        "nom" : "sushi itachi",
        "prix" :"320",
    },
    {
        "id":"9",
        "img" : "menu10",
        "nom" : "sushi madar",
        "prix" :"20",
    },
    {
        "id":"10",
        "img" : "menu11",
        "nom" : "sushi luffy",
        "prix" :"170",
    },
    {
        "id":"11",
        "nom" : "Ramen tokyo",
        "prix" :"120.20",
    },
    {
        "id":"12",
        "nom" : "Ramen dalhi",
        "prix" :"120.20",
    }, 
    {
        "id":"13",
        "nom" : "Ramen ushi",
        "prix" :"120.20",
    },
    {
        "id":"14",
        "nom" : "Ramen dragon",
        "prix" :"120.20",
    },
    {
        "id":"15",
        "nom" : "Jus manga",
        "prix" :"120.50",
    },
    {
        "id":"16",
        "nom" : "Jus yusu",
        "prix" :"120.50",
    },
    {
        "id":"17",
        "nom" : "Jus sauce ponzp",
        "prix" :"120.50",
    },
    {
        "id":"18",
        "nom" : "Jus paudre",
        "prix" :"120.50",
    }
];

let btns=document.querySelectorAll(".btn");
let cart=document.getElementById("cart");
btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        let id=btn.value;
        for(let i=0;i<produits.length;i++){
            if(produits[i].id==id){
                cart.innerHTML+="<div class="price_test><strong>$170.00</strong><button class="btn" value="10">Select</button></div>";
            }
        }
    })
})
