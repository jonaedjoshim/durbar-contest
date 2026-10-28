interface Transaction {
  productId: string;
  type: "in" | "out";
  quantity: number;
}

function reconcileInventory(
  initialInventory: Record<string, number>,
  transactions: Transaction[],
): Record<string, number> {
  const inventory: Record<string, number> = { ...initialInventory };

  for (const { productId, type, quantity } of transactions) {
    if (!(productId in inventory)) {
      inventory[productId] = 0;
    }

    if (type === "in") {
      inventory[productId] += quantity;
    } else {
      inventory[productId] = Math.max(0, inventory[productId] - quantity);
    }
  }

  return inventory;
}

// ---------------------------------------------------------------
// LOCAL TESTING (ei part ta submit korar dorkar nai)
// ---------------------------------------------------------------

console.log(
  reconcileInventory({ apple: 10, banana: 5 }, [
    { productId: "apple", quantity: 3, type: "in" },
    { productId: "banana", quantity: 2, type: "out" },
  ]),
);

console.log(
  reconcileInventory({ orange: 2 }, [
    { productId: "orange", quantity: 2, type: "out" },
    { productId: "grape", quantity: 7, type: "in" },
  ]),
);

console.log(reconcileInventory({}, []));
console.log(
  reconcileInventory({ apple: 1 }, [
    { productId: "apple", quantity: 5, type: "out" },
  ]),
);
console.log(
  reconcileInventory({}, [
    { productId: "milk", quantity: 4, type: "out" },
    { productId: "milk", quantity: 2, type: "in" },
  ]),
);
