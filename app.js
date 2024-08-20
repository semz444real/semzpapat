
document.addEventListener('DOMContentLoaded', function() {
    const playerInventory = document.getElementById('player-inventory');
    const dropInventory = document.getElementById('drop-inventory');
    const capacityFill = document.getElementById('capacity-fill');
    const closeButton = document.getElementById('close-button');
    const amountPopup = document.getElementById('amount-popup');
    const confirmAmountButton = document.getElementById('confirm-amount');
    let selectedItemId = null;
    let capacity = 6;
    const maxCapacity = 12;

    // Function to update the capacity bar
    function updateCapacity() {
        const percentage = (capacity / maxCapacity) * 100;
        capacityFill.style.width = `${percentage}%`;
    }

    // Function to close the inventory
    function closeInventory() {
        const inventoryContainer = document.querySelector('.inventory-container');
        inventoryContainer.style.opacity = '0';
        setTimeout(() => inventoryContainer.style.display = 'none', 300);
        console.log("Inventory closed");
    }

    // Add close functionality
    closeButton.addEventListener('click', closeInventory);

    // Function to add an item to the inventory
    function addItem(itemName, itemCount, itemId, targetInventory) {
        if (capacity >= maxCapacity && targetInventory === playerInventory) {
            alert("Inventory Penuh!");
            return;
        }
        const itemElement = document.createElement('div');
        itemElement.classList.add('inventory-item');
        itemElement.setAttribute('id', itemId);
        itemElement.innerHTML = `
            <img src="https://via.placeholder.com/50" alt="${itemName}">
            <p>${itemName} x${itemCount}</p>
        `;
        itemElement.addEventListener('click', () => selectItem(itemId));
        targetInventory.appendChild(itemElement);
        if (targetInventory === playerInventory) {
            capacity += 1;
            updateCapacity();
        }
    }

    // Function to handle item selection
    function selectItem(itemId) {
        selectedItemId = itemId;
        console.log(`Selected item: ${itemId}`);
        amountPopup.style.display = 'flex';
    }

    // Confirm amount and perform action
    confirmAmountButton.addEventListener('click', () => {
        const amount = document.getElementById('amount').value;
        console.log(`Amount selected: ${amount} for item ${selectedItemId}`);
        amountPopup.style.display = 'none';
        // Further code to handle drop/give actions based on amount
    });

    // Example items in player inventory and drop inventory
    addItem('Pistol', 1, 'item-1', playerInventory);
    addItem('Medkit', 2, 'item-2', playerInventory);
    addItem('Water', 5, 'item-3', playerInventory);

    addItem('Ammo', 30, 'item-4', dropInventory);
    addItem('Bandage', 5, 'item-5', dropInventory);
});
