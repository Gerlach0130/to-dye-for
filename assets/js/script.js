const makeUpBtn = document.getElementById('makeupbtn');
const hairCareBtn = document.getElementById('haircarebtn');
const earringsBtn = document.getElementById('earringsbtn');
const allProductsBtn = document.getElementById('allproductsbtn');

function showMakeUp() {
    console.log('makeup');
};

function showHairCare() {
    console.log('hair care');
};

function showEarrings() {
    console.log('earrings');
};

function showAllProducts() {
    console.log('all products');
};

makeUpBtn.addEventListener('click', showMakeUp);
hairCareBtn.addEventListener('click', showHairCare);
earringsBtn.addEventListener('click', showEarrings);
allProductsBtn.addEventListener('click', showAllProducts);