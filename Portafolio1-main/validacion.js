// 1. Selección de elementos

document.addEventListener('DOMContentLoaded', function () {

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("modalCaption");
    const closeBtn = document.querySelector(".modal__close");


    const academicImages = document.querySelectorAll('.academic__courses__item__img img');


    academicImages.forEach(img => {
        img.addEventListener('click', function () {
            modal.style.display = "block";
            modalImg.src = this.src;


            const courseTitle = this.closest('.academic__courses__box')
                .querySelector('.academic__courses__item__title h4').textContent;

            captionText.textContent = courseTitle;
        });
    });


    closeBtn.addEventListener('click', function () {
        modal.style.display = "none";
    });


    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });


    document.addEventListener('keydown', function (event) {
        if (event.key === "Escape" && modal.style.display === "block") {
            modal.style.display = "none";
        }
    });
});





const dataMensaje = document.querySelector("#mensagem");


function enviar() {
    
   const mensaje =  encodeURIComponent(dataMensaje.value.trim());
   const telefono = 542235283872;

    if (mensaje) {
        const enlace = `https://api.whatsapp.com/send?phone=${telefono}&text=${mensaje}`;
        window.open(enlace, '_blank');
    } else {
        alert("Por favor escribe un mensaje antes de enviar.");
    }    
}




