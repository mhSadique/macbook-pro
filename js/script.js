// Memory
const memory8GbBtn = document.getElementById('memory-8');
const memory16GbBtn = document.getElementById('memory-16');
const memoryBasePrice = 0;
const memory8GbAdditionalPrice = 0;
const memory16GbAdditionalPrice = 180;

// Storage
const storage256GbBtn = document.getElementById('storage-256');
const storage512GbBtn = document.getElementById('storage-512');
const storage1TbBtn = document.getElementById('storage-1tb');
const storageBasePrice = 0;
const storage256GbAdditionalPrice = 0;
const storage512GbAdditionalPrice = 100;
const storage1TbAdditionalPrice = 180;

// Delivery Options
const freeDeliveryBtn = document.getElementById('free-delivery');
const quickDeliveryBtn = document.getElementById('quick-delivery');
const baseDeliveryCharge = 0;
const freeDeliveryCharge = 0;
const quickDeliveryCharge = 25;

// Price Calculation
const computerBasePrice = document.getElementById('base-price');
const memoryExtraCharge = document.getElementById('memory-extra');
const storageExtraCharge = document.getElementById('storage-extra');
const deliveryCharge = document.getElementById('delivery-charge');
const totalPrice = document.getElementById('total-price');

// Promo
const promoCodeField = document.getElementById('promo-code');
const promoApplyBtn = document.getElementById('promo-button');
const promoCodeDiscount = 30;
const promoCode = 'stevekaku';

// Grand Total
const grandTotal = document.getElementById("grand-total");

// Footer
const footer = document.querySelector('footer');
// Event Listeners
memory16GbBtn.addEventListener('click', () => {
    modifyPrice(memoryBasePrice, memory16GbAdditionalPrice, memoryExtraCharge);
});

memory8GbBtn.addEventListener('click', () => {
    modifyPrice(memoryBasePrice, memory8GbAdditionalPrice, memoryExtraCharge);
});

storage256GbBtn.addEventListener('click', () => {
    modifyPrice(storageBasePrice, storage256GbAdditionalPrice, storageExtraCharge);
});

storage512GbBtn.addEventListener('click', () => {
    modifyPrice(storageBasePrice, storage512GbAdditionalPrice, storageExtraCharge);
});

storage1TbBtn.addEventListener('click', () => {
    modifyPrice(storageBasePrice, storage1TbAdditionalPrice, storageExtraCharge);
});

freeDeliveryBtn.addEventListener('click', () => {
    modifyPrice(baseDeliveryCharge, freeDeliveryCharge, deliveryCharge);
});

quickDeliveryBtn.addEventListener('click', () => {
    modifyPrice(baseDeliveryCharge, quickDeliveryCharge, deliveryCharge);
});

promoApplyBtn.addEventListener('click', () => {
    handlePromoCode();
});

function modifyPrice(partBasePrice, partExtraPrice, extraPriceOutput) {
    let basePrice = partBasePrice;
    basePrice += partExtraPrice;
    extraPriceOutput.innerText = basePrice;
    calculateTotalPrice();
}

function calculateTotalPrice() {
    let basePrice = parseInt(computerBasePrice.innerText);
    let extraMemoryPrice = parseInt(memoryExtraCharge.innerText);
    let extraStoragePrice = parseInt(storageExtraCharge.innerText);
    let deliveryPrice = parseInt(deliveryCharge.innerText);
    let total = basePrice + extraMemoryPrice + extraStoragePrice + deliveryPrice;
    totalPrice.innerText = total;
}

function handlePromoCode() {
    if (promoCodeField.value === promoCode) {
        const totalPri = totalPrice.innerText;
        const discount = (parseInt(totalPrice.innerText) * promoCodeDiscount) / 100
        const discountedAmount = totalPri - discount;
        grandTotal.innerText = discountedAmount;
        promoCodeField.value = '';
        const p = document.createElement('p');
        p.innerHTML = '<b>You got a discount</b>';
        p.classList.add('success');
        footer.prepend(p);
    } else {
        promoCodeField.value = '';
        const p = document.createElement('p');
        p.innerHTML = '<b>Your promocode is not valid.</b>';
        p.classList.add('alert');
        footer.prepend(p);
    }
}