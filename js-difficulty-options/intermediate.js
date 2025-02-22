// Sample menu data
const menu = {
  Starters: ["Garlic Bread", "Bruschetta"],
  MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
  Desserts: ["Tiramisu", "Cheesecake"],
};

function displayMenuItems(menu) {
  const menuContainer = document.getElementById("menuContainer");

  for (const [category, items] of Object.entries(menu)) {
    const categoryHeading = document.createElement("h3");
    categoryHeading.textContent = category;

    menuContainer.appendChild(categoryHeading);

    const itemList = document.createElement("ul");

    items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;

      r;
      listItem.addEventListener("click", () => addToOrder(item));

      itemList.appendChild(listItem);
    });

    menuContainer.appendChild(itemList);
  }
}

function addToOrder(itemName) {
  const orderItemsList = document.getElementById("orderItemsList");
  const orderTotalElem = document.getElementById("orderTotal");

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
