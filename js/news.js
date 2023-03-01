const fetchCategories = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => showCategories(data.data));
};

const showCategories = (data) => {
  // console.log(data.news_category);
  // capture categories container to append all the captegory links
  const categoriesContainer = document.getElementById("categories-container");
  data.news_category.forEach((singleCategory) => {
    // console.log(singleCategory);
    // categoriesContainer.innerHTML += `<a class="nav-link" href="#">${singleCategory.category_name}</a>`
    let linkContainer = document.createElement("p");
    linkContainer.innerHTML = `<a class="nav-link" href="#" onclick="fetchCategoriesNews('${singleCategory.category_id}','${singleCategory.category_name}' )">${singleCategory.category_name}</a>`;
    categoriesContainer.appendChild(linkContainer);
  });
};

const fetchCategoriesNews = (category_id , captegory_name) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showAllNews(data.data , captegory_name));
};

const showAllNews = (data, captegory_name)=>{
  console.log(data, captegory_name)
  document.getElementById('news-count').innerText = data.length;
  document.getElementById('category-name').innerText = captegory_name;
}
