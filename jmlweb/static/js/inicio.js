const vermas_btn = document.querySelector('#vermas_btn');
const container_empresa_oculto = document.querySelector('#empresa_container_body_item1_sub_item1_list');
vermas_btn.addEventListener('click', ()=>{
    container_empresa_oculto.classList.toggle('vermas_btn--ver');
    if (vermas_btn.innerHTML == 'Ver mas') {
        vermas_btn.innerHTML='Ocultar';
    }
    else{
        vermas_btn.innerHTML='Ver mas';
    }
    
});


////FUNCIONES MODAL ////

const modal = document.querySelector('#modal');
const modal_container = document.querySelector('#modal_container');
const construccion_btn = document.querySelector('#contruccion_btn');
const extintores_btn = document.querySelector('#extintores_btn');
const seguridad_btn = document.querySelector('#seguridad_btn');
const btn_cerrar_modal = document.querySelector('#btn_cerrar_modal');
const agregarCerrarListener = () => {
    const btn_cerrar_modal = document.querySelector('#btn_cerrar_modal');
    btn_cerrar_modal.addEventListener('click', () => {
        modal.setAttribute('hidden', 'true');
        permitirScroll();
        modal_container.innerHTML = "";
    });
};
// Bloquear el scroll con estilos en línea
const bloquearScroll = () => {
    document.body.style.overflow = "hidden";
};

// Permitir el scroll con estilos en línea
const permitirScroll = () => {
    document.body.style.overflow = "";  // Elimina el estilo inline de overflow
    document.body.style.position = "";  // Elimina el estilo inline de position
    document.body.style.width = "";  // Elimina el estilo inline de width
};

construccion_btn.addEventListener('click', ()=>{
    modal.removeAttribute('hidden');
    bloquearScroll();
    const imageUrl = "/static/img/construccion.jpg";
    modal_container.innerHTML =`
        <div class='modal-container-header'>
        Construcción
        </div>
        <div class='modal-container-body'>
            <div class="modal-container-body-img">
                <img src="/static/img/construccion.jpg" alt="">
            </div>
            <div class="modal-container-body--title">Servicios viales</div>
            <ul class="modal-container-body--content">
                <li class="modal-container-body--content item">Encauces de rio</li>
                <li class="modal-container-body--content item">Movimiento de suelos</li>
                <li class="modal-container-body--content item">Represas</li>
                <li class="modal-container-body--content item">Canales</li>
            </ul>
            <div class="modal-container-body--title">Obras civiles</div>
            <ul class="modal-container-body--content">
                <li class="modal-container-body--content item">Excavadoras</li>
                <li class="modal-container-body--content item">Pala cargadoras</li>
                <li class="modal-container-body--content item">Camiones</li>
            </ul>
        </div>  
        <div class='modal-container-footer'>
            <div class='modal-container-footer-button boton' id='btn_cerrar_modal'>Cerrar
        </div>
    
`;      
agregarCerrarListener();
});

extintores_btn.addEventListener('click', ()=>{
    modal.removeAttribute('hidden');
    bloquearScroll();
    modal_container.innerHTML =`
    <div class='modal-container-header'>
    Extintores
    </div>
    <div class='modal-container-body'>
        <div class="modal-container-body-img">
            <img src="/static/img/IMG-20190612-WA0090.jpg" alt="">
        </div>
        <div class="modal-container-body--title">Matafuegos – Red de incendio</div>
        <ul class="modal-container-body--content">
            <li class="modal-container-body--content item">Venta, reparación y mantenimiento de Matafuegos (Extintores) de todo tipo y capacidad.</li>
            <li class="modal-container-body--content item">Retiros a domicilio sin cargo.</li>
            <li class="modal-container-body--content item">servicios a consorcios</li>
            <li class="modal-container-body--content item">Atecion especializada en clinicas y sanatorios.</li>
            <li class="modal-container-body--content item">Mantenimientos en oficinas publicas y organismos del Estado.</li>
            <li class="modal-container-body--content item">comercios y pymes en general.</li>
        </ul>
    </div>
    <div class='modal-container-footer'>
        <div class='modal-container-footer-button boton' id='btn_cerrar_modal'>Cerrar
        </div>
    </div>
`;
agregarCerrarListener();
});
seguridad_btn.addEventListener('click', ()=>{
    modal.removeAttribute('hidden');
    bloquearScroll();
    modal_container.innerHTML =`
    <div class='modal-container-header'>
    Seguridad
    </div>
    <div class='modal-container-body'>
        <div class="modal-container-body-img">
            <img src="/static/img/EPP-en-Seguridad-Industrial.jpg" alt="">
        </div>
        <div class="modal-container-body--title">accesorios</div>
        <ul class="modal-container-body--content">
            <li class="modal-container-body--content item">Ropa de trabajo</li>
            <li class="modal-container-body--content item">Calzados de seguridad.</li>
            <li class="modal-container-body--content item">Productos EPP</li>
            <li class="modal-container-body--content item">Señaletica</li>
            <li class="modal-container-body--content item">kit vehiculares</li>
            <li class="modal-container-body--content item">Seguridad industrial</li>
        </ul>
    </div>
    <div class='modal-container-footer' id='btn_cerrar_modal'>
        <div class='modal-container-footer-button boton'>Cerrar
        </div>
    </div>
`;
agregarCerrarListener();
});
btn_cerrar_modal.addEventListener('click', ()=>{
    modal.setAttribute('hidden', 'true');
    permitirScroll();
    modal_container.innerHTML=" "
});