interface Offer {
  name: string;
  type: "flat" | "percent";
  value: number;
  minPrice: number;
}

function selectBestDiscount(price: number, offers: Offer[]): Offer | null {
  let bestOffer: Offer | null = null;
  let lowestPrice = price;

  for (const offer of offers) {
    if (price < offer.minPrice) continue;

    const discounted =
      offer.type === "flat"
        ? price - offer.value
        : price - price * (offer.value / 100);

    const finalPrice = Math.max(0, discounted);

    if (finalPrice < lowestPrice) {
      lowestPrice = finalPrice;
      bestOffer = offer;
    }
  }

  return bestOffer;
}

// ---------------------------------------------------------------
// LOCAL TESTING (ei part ta submit korar dorkar nai)
// ---------------------------------------------------------------

console.log(
  selectBestDiscount(100, [
    { name: "FLAT15", type: "flat", value: 15, minPrice: 50 },
    { name: "HALF", type: "percent", value: 50, minPrice: 150 },
  ]),
);

console.log(
  selectBestDiscount(200, [
    { name: "SAVE20", type: "flat", value: 20, minPrice: 100 },
    { name: "25PERCENT", type: "percent", value: 25, minPrice: 150 },
  ]),
);

console.log(selectBestDiscount(50, []));
console.log(
  selectBestDiscount(100, [
    { name: "BAD", type: "flat", value: 0, minPrice: 0 },
  ]),
);
console.log(
  selectBestDiscount(100, [
    { name: "FULL", type: "percent", value: 100, minPrice: 50 },
    { name: "FLAT50", type: "flat", value: 50, minPrice: 50 },
  ]),
);
