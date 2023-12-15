const bars_btn = document.querySelector("header nav .icon");
const header = document.querySelector("header");
const features_taps = document.querySelectorAll(".features .features-taps li");
const questions_list_li = document.querySelectorAll(".questions-list li");
const form = document.querySelector("#email-form");
let email = document.querySelector("#email");
let feature = document.querySelector("#feature");
bars_btn.onclick = () => {
  header.classList.toggle("show-drop-list");
  bars_btn.classList.toggle("fa-close");
};
const featureArray = [
  {
    name: "featuer-Bookmark",
    title: "Bookmark in one click",
    desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    imgSrc: "assets/images/illustration-features-tab-1.svg",
  },
  {
    name: "featuer-Intelligent",
    title: "Intelligent search",
    desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    imgSrc: "assets/images/illustration-features-tab-2.svg",
  },
  {
    name: "featuer-Share",
    title: "Share your bookmarks",
    desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    imgSrc: "assets/images/illustration-features-tab-3.svg",
  },
];
for (let i = 0; i < features_taps.length; i++) {
  features_taps[i].addEventListener("click", () => {
    features_taps.forEach((el) => el.classList.remove("active"));
    features_taps[i].classList.add("active");
    let title = featureArray[i].title,
      desc = featureArray[i].desc,
      imgSrc = featureArray[i].imgSrc,
      name = featureArray[i].name;
    addFeatureInfo(title, desc, imgSrc, name);
  });
}

function addFeatureInfo(title, desc, imgSrc, name) {
  feature.setAttribute("id", name);
  feature.querySelector("h1").textContent = title;
  feature.querySelector("p").textContent = desc;
  feature.querySelector(".image img").src = imgSrc;
}

questions_list_li.forEach((el) =>
  el.addEventListener("click", () => {
    el.classList.toggle("active");
  })
);

form.onsubmit = (e) => {
  e.preventDefault();
  let val = email.value.trim();

  let rgx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/gi;
  if (rgx.test(val)) {
    email.parentElement.classList.remove("error");
  } else email.parentElement.classList.add("error");
};
