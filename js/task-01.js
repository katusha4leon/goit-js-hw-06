const categories = document.querySelectorAll('.item');
console.log("Number of categories: ", [...categories].length);

[...categories].forEach(category => {
    const categoryItem = category.firstElementChild.textContent;
    console.log("Category: ", categoryItem);
    const categoryElement = category.querySelectorAll("li");
    console.log("Elements: ", [...categoryElement].length);
});