//let large = document.getElementById("large");

function Showbig(pic){
    large.src = pic;
}

const imgs = [
    "img/Galleri/618x824/DSC101.jpg",
    "img/Galleri/618x824/DSC101.jpg",
    "img/Galleri/618x824/DSC102.jpg",
    "img/Galleri/618x824/DSC103.jpg",
    "img/Galleri/618x824/DSC104.jpg",
    "img/Galleri/618x824/DSC105.jpg",
    "img/Galleri/618x824/DSC106.jpg",
    "img/Galleri/618x824/DSC107.jpg",
    "img/Galleri/618x824/DSC108.jpg",
    "img/Galleri/618x824/DSC109.jpg",
    "img/Galleri/618x824/DSC110.jpg",
    "img/Galleri/618x824/DSC111.jpg",
    "img/Galleri/618x824/DSC112.jpg",
    "img/Galleri/618x824/DSC113.jpg",
];

const imgtags = document.querySelectorAll("#grid-container img");

for (let i = 0; i < imgtags.length; i++) {
    imgtags[i].src = imgs[i];

    imgtags[i].addEventListener("click", (event) => {
        
         Showbig(event.target.src); 
    })
}