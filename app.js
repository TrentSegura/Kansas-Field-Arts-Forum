const container = document.querySelector(".container");

function generateGrid(posts) {
  // container.innerHTML = "";
  posts.forEach((image, index) => {
    const img = document.createElement("img");
    img.src = `images/autotone/` + image.image;
    img.id = `post-0${index}`;

    container.appendChild(img);
  });
}

generateGrid(posts);
