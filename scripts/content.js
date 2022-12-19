
// const article = document.querySelector("meta");
// console.log(article)

// class_name = document.getElementsByClassName("style-scope ytd-watch-metadata")

// console.log(class_name)


// THis should be executed after the whole window is loaded
window.addEventListener('load', function () {
    var eles = document.getElementsByClassName("style-scope ytd-watch-metadata");
    var array_eles = Array.from(eles);
    console.log(eles, array_eles);
    console.log(array_eles.length);
    console.log(array_eles[0]);
    console.log(eles.item(0));
})