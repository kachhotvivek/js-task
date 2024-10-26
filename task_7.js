function calculateInventory(warehouseData) {
    const inventory = {};
  
    warehouseData.forEach(section => {
      section.forEach(itemData => {
        const [itemname, quantity] = itemData;
  
        // Add quantity to existing or initialize if item is new
        inventory[itemname] = (inventory[itemname] || 0) + quantity;
      });
    });
  
    return inventory;
}
  
const warehouseData = [
    [["Storageequipment", 10], ["Pallets", 5], ["Shelving", 7]],
    [["Storageequipment", 3], ["Pallets", 2], ["Firextinguishers", 4]],
    [["Shelving", 6], ["Fireextinguishers", 8]]
];
  
console.log(calculateInventory(warehouseData));
  