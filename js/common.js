
// gallery
let imgBig = document.getElementById('imgBig');
let imgSmall = document.getElementsByClassName('imgSmall');


for (let i = 0; i < imgSmall.length; i++) {
    // console.log(imgSmall[i].src);
    imgSmall[i].onmouseover = () => {
        imgBig.src = imgSmall[i].src;
        imgSmall[i].style.borderColor = '#008000';
    };
    imgSmall[i].onmouseout = () => {
        imgSmall[i].style.borderColor = 'transparent';
    }
}


// quantity
let quantity = document.getElementById('quantity').value;
// console.log(quantity);

document.getElementById('plus').onclick = () => {
    quantity ++;
    document.getElementById('quantity').value = quantity;
};

document.getElementById('minus').onclick = () => {
    if (quantity  > 1) {
        quantity --;
    }
    else {
        quantity = 1;
    }
    document.getElementById('quantity').value = quantity;
};


// heart
let like = document.getElementById('like');
// console.log(like);

like.onclick = () => {
    like.className = (like.className == 'fa fa-heart-o') ? 'fa fa-heart' : 'fa fa-heart-o';
};










