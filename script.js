let ImgArray = [];
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll('.album_picture')
    images.forEach((img, index) => {
        ImgArray.push(img.src);

        img.addEventListener('click', () =>{
            openModal(index);
        });
    });
});

function openModal(index){
    currentIndex = index;
    const modal = document.getElementById("img_modal");
    const modalimg = document.getElementById("modal_image");

    modalimg.src = ImgArray[currentIndex];
    modal.style.display = "flex";

}

function closeModal(){
    const modal = document.getElementById("img_modal");
    modal.style.display = "none";
}

function changeImage(step){
    currentIndex += step;
    
    if(currentIndex >= ImgArray.length){
        currentIndex = 0;
    }
    else if(currentIndex < 0 ){
        currentIndex = ImgArray.length - 1;
    }

    const modalimg = document.getElementById("modal_image");
    modalimg.src = ImgArray[currentIndex];
    

}

document.getElementById("img_modal").addEventListener('click', function(e){
    if(e.target === this ){
        closeModal();
    }
});