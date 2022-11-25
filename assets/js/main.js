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
        "prix" :"130",
    },
    {
        "id":"3",
        "img" : "menu4.png",
        "nom" : "sushi sasuki",
        "prix" :"60",
    },
    {
        "id":"4",
        "img" : "menu5.jfif",
        "nom" : "sushi obito",
        "prix" :"80",
    },
    {
        "id":"5",
        "img" : "menu6.jfif",
        "nom" : "sushi roger",
        "prix" :"200",
    },
    {
        "id":"6",
        "img" : "menu7.jpg",
        "nom" : "sushi gara",
        "prix" :"180",
    },
    {
        "id":"7",
        "img" : "menu8.jpg",
        "nom" : "sushi naruto",
        "prix" :"220",
    },{
        "id":"8",
        "img" : "menu9.jfif",
        "nom" : "sushi itachi",
        "prix" :"320",
    },
    {
        "id":"9",
        "img" : "menu10.png",
        "nom" : "sushi madar",
        "prix" :"20",
    },
    {
        "id":"10",
        "img" : "menu11.jfif",
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
let total=document.getElementById("total-prix");

let container=00;

btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        let id=btn.value;
        for(let i=0;i<produits.length;i++){
            if(produits[i].id==id){
                cart.innerHTML+=`
            <div class="test_produit">
                <div class="test_produit-image">
                    <img class="pann-image" width="80" height="80" src="assets/menu/${produits[i].img}" alt="">
                </div>
                <div class="test_produit-name-prix">
                    <h4 style="color: black;">${produits[i].nom}</h4>
                    <strong style="color: black;">$${produits[i].prix}</strong>
                </div>
            </div>
                `;
                container += parseInt(produits[i].prix);
            }
        } 
        // total.innerHTML+= container+' $';
            console.log("total = " ,container);
            total.innerHTML = `
                <div class="total">
                <h4 id="total-prix" style="text-align: left;">Total = ${container}</h4>
                </div>
                `;
            // total.innerHTML+= container+' $';
    })
})


