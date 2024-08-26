const cosmeticProducts = {
    Maybelline: {
        Lipstick: {
            image: "https://cdnvb4.haiper.ai/jobs/66cc12164196b1fc5e022b61/66cc125b7a94d1b27b25e36f/0.png",
            price: "$10"
        },
        Mascara: {
            image: "./Images/brownmascara.jfif",
            price: "$15"
        },
        Foundation: {
            image: "./Images/Foundation.jpg",
            price: "$20"
        }
    },
    Loreal: {
        Foundation: {
            image: "./Images/foundation.jfif",
            price: "$20"
        },
        Blush: {
            image: "./Images/blush.jfif",
            price: "$12"
        },
        Eyeliner: {
            image: "./Images/blackeyeliner.jpg",
            price: "$10"
        },
    },
    MAC: {
        Lipstick: {
            image: "https://mariashakeel10.github.io/Makeup-web/images/mac%20red%20lip.jfif",
            price: "$20"
        },
        Foundation: {
            image: "https://mariashakeel10.github.io/Makeup-web/images/mac%20fair%20foundation.jfif",
            price: "$12"
        },
        Blush: {
            image: "https://mariashakeel10.github.io/Makeup-web/images/mac%20pink%20blush.jfif",
            price: "$10"
        },
    },
    "Estee Lauder": {
        Lipgloss: {
            image: "https://mariashakeel10.github.io/Makeup-web/images/est%20lip%20pink.jfif",
            price: "$20"
        },
        Concealer: {
            image: "https://mariashakeel10.github.io/Makeup-web/images/est%20conc%20fair.jfif",
            price: "$12"
        },
        "Eye Shadow": {
            image: "https://mariashakeel10.github.io/Makeup-web/images/est%20eyes.jfif",
            price: "$10"
        },
    },
    CLINIQUE: {
        "Nail Polish": {
            image: "https://mariashakeel10.github.io/Makeup-web/images/clini%20nail.jfif",
            price: "$20"
        },
        "Lip Balm": {
            image: "https://mariashakeel10.github.io/Makeup-web/images/clini%20lipblam.jfif",
            price: "$12"
        },
        "Setting Spray": {
            image: "https://mariashakeel10.github.io/Makeup-web/images/clini%20settt.jfif",
            price: "$10"
        },
    },
    NARS: {
        "Lip liner": {
            image: "https://mariashakeel10.github.io/Makeup-web/images/nars%20red%20lip.jfif",
            price: "$20"
        },
        "Face Powder": {
            image: "https://mariashakeel10.github.io/Makeup-web/images/nars%20face%20powder%20fair.jfif",
            price: "$12"
        },
        "Setting Powder": {
            image: "https://mariashakeel10.github.io/Makeup-web/images/nars%20settin%20sp.jfif",
            price: "$10"
        },
    },
    "Charlotte Tilbury": {
        Mascara: {
            image: "https://mariashakeel10.github.io/Makeup-web/images/char%20mascar.jfif",
            price: "$20"
        },
        "Eye Liner": {
            image: "https://mariashakeel10.github.io/Makeup-web/images/charlo%20eyeliner.jfif",
            price: "$12"
        },
        Lipstick: {
            image: "https://mariashakeel10.github.io/Makeup-web/images/charlo%20red%20lipstick.jfif",
            price: "$10"
        },
    },
    Benefit: {
        Foundation: {
            image: "https://mariashakeel10.github.io/Makeup-web/images/bene%20foundat.jfif",
            price: "$20"
        },
        "Lip Gloss": {
            image: "https://mariashakeel10.github.io/Makeup-web/images/bene%20lipgloss.jfif",
            price: "$12"
        },
        "Eye Shadow": {
            image: "https://mariashakeel10.github.io/Makeup-web/images/bene%20eyeshadow.jfif",
            price: "$10"
        },
    },
    "Urban Decay": {
        "Lip Balm": {
            image: "https://mariashakeel10.github.io/Makeup-web/images/urban%20lip%20blam.jfif",
            price: "$20"
        },
        "Face Mist": {
            image: "https://mariashakeel10.github.io/Makeup-web/images/urban%20face%20mist.jfif",
            price: "$12"
        },
        Blush: {
            image: "https://mariashakeel10.github.io/Makeup-web/images/urbam%20blush.jfif",
            price: "$10"
        },
    },
    "Bobbi Brown": {
        Lipstick: {
            image: "https://mariashakeel10.github.io/Makeup-web/images/bobbi%20lipstick.jfif",
            price: "$20"
        },
        Mascara: {
            image: "https://mariashakeel10.github.io/Makeup-web/images/bobii%20mascara.jfif",
            price: "$12"
        },
        Foundation: {
            image: "https://mariashakeel10.github.io/Makeup-web/images/bobbi%20founda.jfif",
            price: "$10"
        },
    },
    "Too faced": {
        "Eye Shadow Palette": {
            image: "./Images/eyeshadow.jfif",
            price: "$20"
        },
        "Lip Gloss": {
            image: "https://mariashakeel10.github.io/Makeup-web/images/too%20lipbalm.jfif",
            price: "$12"
        },
        "Face powder": {
            image: "https://mariashakeel10.github.io/Makeup-web/images/too%20face%20powder.jfif",
            price: "$10"
        },
    },
    Tarte: {
        Lipstick: {
            image: "https://mariashakeel10.github.io/Makeup-web/images/tarte%20lipstick.jfif",
            price: "$20"
        },
        Highlighter: {
            image: "https://mariashakeel10.github.io/Makeup-web/images/tarte%20hihglighter.jfif",
            price: "$10"
        },
        Foundation: {
            image: "https://mariashakeel10.github.io/Makeup-web/images/tarte%20foundat.jfif",
            price: "$12"
        }
    },
    "Huda Beauty": {
        Blush: {
            image: "https://mariashakeel10.github.io/Makeup-web/images/huda%20blush.jfif",
            price: "$20"
        },
        "Lip Gloss": {
            image: "https://mariashakeel10.github.io/Makeup-web/images/huda%20gloss.jfif",
            price: "$10"
        },
        Foundation: {
            image: "https://mariashakeel10.github.io/Makeup-web/images/huda%20foundat.jfif",
            price: "$12"
        }
    },
    "Make Up For Ever": {
        Concealer: {
            image: "https://mariashakeel10.github.io/Makeup-web/images/makeu%20conceal.jfif",
            price: "$20"
        },
        "Setting Spray": {
            image: "https://mariashakeel10.github.io/Makeup-web/images/makeu%20setting.jfif",
            price: "$10"
        },
        "Lip Liner": {
            image: "https://mariashakeel10.github.io/Makeup-web/images/makeup%20lip%20liner.jfif",
            price: "$12"
        }
    },
    "Fenty Beauty": {
        Foundation: {
            image: "https://mariashakeel10.github.io/Makeup-web/images/fent%20found.jfif",
            price: "$20"
        },
        "Lip Gloss": {
            image: "https://mariashakeel10.github.io/Makeup-web/images/fenty%20gloss.jfif",
            price: "$10"
        },
        "Face Serum": {
            image: "https://mariashakeel10.github.io/Makeup-web/images/char%20face%20serum.jfif",
            price: "$12"
        }
    },
};

const main = document.querySelector("#main");
const brandDropdown = document.querySelector("#brand");
const productDropdown = document.querySelector("#product");

function populateDropdowns() {
    const brands = Object.keys(cosmeticProducts);
    brandDropdown.innerHTML += brands.map(b => `<option value="${b}">${b}</option>`).join('');
    productDropdown.innerHTML = `<option value="">Select Product</option>`;
}

function updateProductDropdown() {
    const selectedBrand = brandDropdown.value;
    if (selectedBrand) {
        const products = Object.keys(cosmeticProducts[selectedBrand]);
        productDropdown.innerHTML = `<option value="">Select Product</option>`;
        productDropdown.innerHTML += products.map(p => `<option value="${p}">${p}</option>`).join('');
    } else {
        productDropdown.innerHTML = `<option value="">Select Product</option>`;
    }
}

function renderProducts() {
    main.innerHTML = '';
    for (const brand in cosmeticProducts) {
        for (const product in cosmeticProducts[brand]) {
            const { image, price } = cosmeticProducts[brand][product];
            main.innerHTML += `
                <div class="card text-center" style="width: 18rem;" data-brand="${brand}" data-product="${product}">
                    <img src="${image}" class="card-img-top" alt="${product}">
                    <div class="card-body">
                        <h5 class="card-title">${product}</h5>
                        <p class="card-text">${price}</p>
                    </div>
                </div>`;
        }
    }
}

function searchProduct() {
    const selectedBrand = brandDropdown.value;
    const selectedProduct = productDropdown.value;

    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        const cardBrand = card.getAttribute('data-brand');
        const cardProduct = card.getAttribute('data-product');
        const matches = (!selectedBrand || cardBrand === selectedBrand) &&
            (!selectedProduct || cardProduct === selectedProduct);

        card.style.display = matches ? 'block' : 'none';
    });
}

function clearProduct() {
    brandDropdown.value = '';
    productDropdown.innerHTML = `<option value="">Select Product</option>`;
    renderProducts();
}

brandDropdown.addEventListener('change', updateProductDropdown);
populateDropdowns();
renderProducts();
