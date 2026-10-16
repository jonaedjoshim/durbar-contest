function calculateRemainingMoney(totalMoney: number, cakeCost: number, donutCost: number): number {
    const afterCake = totalMoney - cakeCost;
    if (afterCake <= 0) {
        return afterCake;
    }
    const donuts = Math.floor(afterCake / donutCost);
    return afterCake - donuts * donutCost;
}