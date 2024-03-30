
class Multimedia {
    constructor(url) {
        this._url = url; // este seria el src!!
    }
    get url() {
        return this._url;
    }
    setInicio() {
        return `Este metodo es para realizar un cambio en la URL de video`;
    }
}

const InsertarVideo = {
    // Función privada 
    datosVideo: (url, id) => {
        const iframe = document.getElementById(id);
        iframe.setAttribute('src', url);
    },

    // Función pública 
    cargarVideo: (url, id) => {
        InsertarVideo.datosVideo(url, id);
    }
};

class Reproductor extends Multimedia {
    constructor(url,id){
        super(url);
        this._id = id;
    }
    playMultimedia() {
        InsertarVideo.cargarVideo(this.url,this._id);
    }
    setInicio(tiempoInicio) {
        const iframe = document.getElementById(this._id);
        iframe.setAttribute('src', `${this.url}?start=${tiempoInicio}`);
    }
}

// Instanciamos las clases hijas

document.addEventListener("DOMContentLoaded", function() {
    // Instanciando clase hija
    let damevideoSeries = new Reproductor('https://www.youtube.com/embed/_2JdV6wAngE?si=_uGpeehf1CCTNvFv', 'series');
    let damevideoMusica = new Reproductor('https://www.youtube.com/embed/yFUSp_yqo1A?si=H8uMRbCP3N8Qtyl6', 'musica');
    let damevideoPeliculas = new Reproductor('https://www.youtube.com/embed/kxyyKU8rgaU?si=HUOmapGxlnVQxfTD', 'peliculas');
    damevideoSeries.setInicio(15);
    damevideoMusica.playMultimedia();
    damevideoSeries.playMultimedia();
    damevideoPeliculas.playMultimedia();
});