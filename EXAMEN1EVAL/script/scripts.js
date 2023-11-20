window.onload = function(params) {
    
    hombres = document.getElementById("hombres");
    mujeres = document.getElementById("mujeres");

        hombres.addEventListener('click', scale_up);
        mujeres.addEventListener('mouseover', scale_up);

        function scale_up(){
            this.classList.toggle("slide-fwd-center");
        }
}