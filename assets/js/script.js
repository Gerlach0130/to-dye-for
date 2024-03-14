const makeUpBtn = document.getElementById('makeupbtn');
const hairCareBtn = document.getElementById('haircarebtn');
const earringsBtn = document.getElementById('earringsbtn');
const allProductsBtn = document.getElementById('allproductsbtn');
const header = document.getElementById('productheader');
const container = document.getElementById('container');

function showMakeUp() {
    header.innerHTML = `Showing Make Up Products`;
    container.innerHTML = `<style>
    img {
        height: 200px;
        width: 50px;
        margin: auto;
    }
    h4, p {
        text-align: center;
    }
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        align-items: center;
    }
    p {
        font-size: 25px;
    }
    </style>
        <div class="card">
            <img src="./assets/images/amikatheshield.jpg" style="width:100px">
            <div class="innercard">
                <h3><b>Amika The Shield</b></h3>
                <p><strong>$30</strong></p>
            </div>
        </div>`
};

function showHairCare() {
    header.innerHTML = `Showing Hair Care Products`;
    container.innerHTML = `<style>
    img {
        height: 200px;
        width: 50px;
        margin: auto;
    }
    h4, p {
        text-align: center;
    }
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        align-items: center;
    }
    p {
        font-size: 25px;
    }
    </style>
        <div class="card">
            <img src="./assets/images/amikatheshield.jpg" style="width:100px">
            <div class="innercard">
                <h3><b>Amika The Shield</b></h3>
                <p><strong>$30</strong></p>
            </div>
        </div>
        <div class="card">
            <img src="./assets/images/brazilianblowoutantifrizzconditioner.png" style="width:100px">
            <div class="innercard">
                <h3><b>Brazilian Blowout Anti Frizz Conditioner</b></h3>
                <p><strong>$36</strong></p>
            </div>
        </div>
        <div class="card">
            <img src="./assets/images/brazilianblowoutantifrizzshampoo.png" style="width:100px">
            <div class="innercard">
                <h3><b>Brazilian Blowout Anti Frizz Shampoo</b></h3>
                <p><strong>$35</strong></p>
            </div>
        </div>
        <div class="card">
            <img src="./assets/images/brazilianblowoutinstantvolumerootthermallift.jpg" style="width:100px">
            <div class="innercard">
                <h3><b>Brazilian Blowout Instant Volume Root Thermal Lift</b></h3>
                <p><strong>$30</strong></p>
            </div>
        </div>
        <div class="card">
            <img src="./assets/images/celebluxurycolordepositingshampoo.jpg" style="width:100px">
            <div class="innercard">
                <h3><b>Celeb Luxury Color Depositing Shampoo</b></h3>
                <p><strong>$30</strong></p>
            </div>
        </div>
        <div class="card">
            <img src="./assets/images/clenditionercolordepositingconditioner.jpg" style="width:100px">
            <div class="innercard">
                <h3><b>Clenditioner Color Depositing Conditioner</b></h3>
                <p><strong>$25</strong></p>
            </div>
        </div>
        <div class="card">
            <img src="./assets/images/joicoblondelifeliterduos.png" style="width:100px">
            <div class="innercard">
                <h3><b>Joico Blonde Life Liter Duos</b></h3>
                <p><strong>$75</strong></p>
            </div>
        </div>
        <div class="card">
            <img src="./assets/images/joicocolorbalanceliterduo.jpg" style="width:100px">
            <div class="innercard">
                <h3><b>Joico Color Balance Liter Duo</b></h3>
                <p><strong>$75</strong></p>
            </div>
        </div>
        <div class="card">
            <img src="./assets/images/joicocolorfulantifadeserum.jpg" style="width:100px">
            <div class="innercard">
                <h3><b>Joico Colorful Anti-Fade Serum</b></h3>
                <p><strong>$20</strong></p>
            </div>
        </div>
        <div class="card">
            <img src="./assets/images/joicoholidaygiftset.jpeg" style="width:100px">
            <div class="innercard">
                <h3><b>Joico Holiday Gift Set</b></h3>
                <p><strong>$30</strong></p>
            </div>
        </div>
        <div class="card">
            <img src="./assets/images/kenrablowdryspraysmall.jpeg" style="width:100px">
            <div class="innercard">
                <h3><b>Kenra Blow Dry Spray - Small</b></h3>
                <p><strong>$25</strong></p>
            </div>
        </div>
        <div class="card">
            <img src="./assets/images/kenracolormaintenancehairspray.png" style="width:100px">
            <div class="innercard">
                <h3><b>Kenra Color Maintenance Hair Spray</b></h3>
                <p><strong>$15</strong></p>
            </div>
        </div>
        <div class="card">
            <img src="./assets/images/kenraplatinumblowoutspray.png" style="width:100px">
            <div class="innercard">
                <h3><b>Kenra Platinum Blowout Spray</b></h3>
                <p><strong>$30</strong></p>
            </div>
        </div>
        <div class="card">
            <img src="./assets/images/redkenblondagebrighteningconditioner.png" style="width:100px">
            <div class="innercard">
                <h3><b>Redken Blondage Brightening Conditioner</b></h3>
                <p><strong>$30</strong></p>
            </div>
        </div>
        <div class="card">
            <img src="./assets/images/redkenblondagebrighteningshampoo.png" style="width:100px">
            <div class="innercard">
                <h3><b>Redken Blondage Brightening Shampoo</b></h3>
                <p><strong>$30</strong></p>
            </div>
        </div>
        <div class="card">
            <img src="./assets/images/redkencolormagneticallyconditioner.jpg" style="width:100px">
            <div class="innercard">
                <h3><b>Redken Color Magnetically Conditioner</b></h3>
                <p><strong>$30</strong></p>
            </div>
        </div>
        <div class="card">
            <img src="./assets/images/redkencolormagneticallyshampoo.jpg" style="width:100px">
            <div class="innercard">
                <h3><b>Redken Color Magnetically Shampoo</b></h3>
                <p><strong>$30</strong></p>
            </div>
        </div>
        <div class="card">
            <img src="./assets/images/redkenextremelengthconditioner.png" style="width:100px">
            <div class="innercard">
                <h3><b>Redken Extreme Length Conditioner</b></h3>
                <p><strong>$30</strong></p>
            </div>
        </div>
        <div class="card">
            <img src="./assets/images/redkenextremelengthshampoo.png" style="width:100px">
            <div class="innercard">
                <h3><b>Redken Extreme Length Shampoo</b></h3>
                <p><strong>$30</strong></p>
            </div>
        </div>`;
};

function showEarrings() {
    header.innerHTML = `Showing Current Earrings`;
    container.innerHTML = `<style>
    img {
        height: 200px;
        width: 50px;
        margin: auto;
    }
    h4, p {
        text-align: center;
    }
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        align-items: center;
    }
    p {
        font-size: 25px;
    }
    </style>
        <div class="card">
            <img src="./assets/images/amikatheshield.jpg" style="width:100px">
            <div class="innercard">
                <h3><b>Amika The Shield</b></h3>
                <p><strong>$30</strong></p>
            </div>
        </div>`
};

function showAllProducts() {
    header.innerHTML = `Showing All Products`;
    container.innerHTML = `<style>
    img {
        height: 200px;
        width: 50px;
        margin: auto;
    }
    h4, p {
        text-align: center;
    }
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        align-items: center;
    }
    p {
        font-size: 25px;
    }
    </style>
        <div class="card">
            <img src="./assets/images/amikatheshield.jpg" style="width:100px">
            <div class="innercard">
                <h3><b>Amika The Shield</b></h3>
                <p><strong>$30</strong></p>
            </div>
        </div>`
};

makeUpBtn.addEventListener('click', showMakeUp);
hairCareBtn.addEventListener('click', showHairCare);
earringsBtn.addEventListener('click', showEarrings);
allProductsBtn.addEventListener('click', showAllProducts);