let url = "https://fakestoreapi.com/products";

async function api() {
  let data = await fetch(url);
  let res = await data.json();
  //   console.log(res);

  res.forEach((element) => {
    console.log(element.image);

    let title = document.createElement("h3");
    let img = document.createElement("img");

    let price = document.createElement("p");
    let div = document.createElement("div");

    title.innerText = element.title;
    price.innerText = `${element.price}$`;
    img.src = element.image;

    div.append(title);
    div.append(img);
    div.append(price);
    document.querySelector("section").append(div);
  });
}

api();
