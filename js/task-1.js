const categories = document.getElementById("categories");
const item = categories.querySelectorAll(".item");

console.log('Number of categories:', item.length);

item.forEach(category => {
    const title = category.querySelector("h2").textContent; // Get the category title
    const itemCount = category.querySelectorAll("ul > li").length; // Count the number of items in the category
    console.log(`Category: ${title}  Elements: ${itemCount}`);
})

