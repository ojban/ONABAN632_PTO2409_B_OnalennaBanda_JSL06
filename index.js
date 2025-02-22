// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
  Starters: ["Garlic Bread", "Bruschetta"],
  MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
  Desserts: ["Tiramisu", "Cheesecake"],
};

function displayMenuItems(menu) {
  const menuContainer = document.getElementById("menu");

  for (const [category, items] of Object.entries(menu)) {
    const categoryElement = document.createElement("h3");

    categoryElement.textContent = category;

    menuContainer.appendChild(categoryElement);

    const itemList = document.createElement("ul");

    menuContainer.appendChild(itemList);

    items.forEach((item) => {
      const listItem = document.createElement("li");

      listItem.textContent = item;

      listItem.addEventListener("click", () => addToOrder(item));

      itemList.appendChild(listItem);
    });
  }
}

function addToOrder(itemName) {
  const orderItemsList = document.getElementById("order-items");
  const orderTotalElem = document.getElementById("order-total");

  const orderListItem = document.createElement("li");

  orderListItem.textContent = itemName;

  orderItemsList.appendChild(orderListItem);

  const currentTotal = parseFloat(orderTotalElem.textContent) || 0;
  const itemPrice = 60;
  const newTotal = currentTotal + itemPrice;

  orderTotalElem.textContent = newTotal.toFixed(2);
}

function initMenuSystem(menu) {
  displayMenuItems(menu);
}

initMenuSystem(menu);
