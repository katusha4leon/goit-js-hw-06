const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
console.log(list);
const listItem = ingredients.map(itemText => {
  const listTag = document.createElement("li");
  listTag.classList.add("item");
  listTag.textContent = itemText;
  return listTag;
})
list.append(...listItem);