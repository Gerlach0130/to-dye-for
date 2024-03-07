const makeUpBtn = document.getElementById('makeupbtn');
const hairCareBtn = document.getElementById('haircarebtn');
const earringsBtn = document.getElementById('earringsbtn');
const allProductsBtn = document.getElementById('allproductsbtn');
const header = document.getElementById('productheader');
const container = document.getElementById('container');
const card = `<style>
            img {
                height: 200px;
                width: 50px;
            }
            h4, p {
                text-align: center;
            }
            .card {
                margin: auto;
            }
            </style>
            <div class="card">
            <img src="./assets/images/amikatheshield.jpg" style="width:100%">
            <div class="innercard">
            <h4><b>Amika The Shield</b></h4>
            <p>$30</p>
            </div>
            </div>
            <div class="card">
            <img src="./assets/images/brazilianblowoutantifrizzconditioner.png" style="width:100%">
            <div class="innercard">
            <h4><b>Brazilian Blowout Anti Frizz Conditioner</b></h4>
            <p>$36</p>
            </div>
            </div>`


function showMakeUp() {
    header.innerHTML = `Showing Make Up Products`;
    container.innerHTML = "";
};

function showHairCare() {
    header.innerHTML = `Showing Hair Care Products`;
    container.innerHTML = card;
};

function showEarrings() {
    header.innerHTML = `Showing Current Earrings`;
};

function showAllProducts() {
    header.innerHTML = `Showing All Products`;
};

makeUpBtn.addEventListener('click', showMakeUp);
hairCareBtn.addEventListener('click', showHairCare);
earringsBtn.addEventListener('click', showEarrings);
allProductsBtn.addEventListener('click', showAllProducts);