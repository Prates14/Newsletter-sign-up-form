class EnivoDoEmail {
    constructor() {
        this.btn = document.querySelector('button');
        this.input = document.querySelector('#sub-email');
        this.evento();
    }

    evento() {
        this.btn.addEventListener('click', event => {
            event.preventDefault();
            const validaEmail = this.validaEmail(this.input.value);
            
            if(validaEmail === true) {
                window.location.href = 'success.html';
                const page = window.successPage(this.input);
            } else {
                
            }
        });
    }

    validaEmail(valor) {
        let resultado = true;
        const usuario = valor.substring(0, valor.indexOf('@'));
        const dominio = valor.substring(valor.indexOf("@") + 1, valor.length);

        if ((usuario.length >= 1) && 
            (dominio.length >= 3) && 
            (usuario.search("@") == -1) && 
            (dominio.search("@") == -1) && 
            (usuario.search(" ") == -1) && 
            (dominio.search(" ") == -1) && 
            (dominio.search(".") !== -1) && 
            (dominio.indexOf(".") >= 1) && 
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
            resultado = true;
        } else {
            resultado = false;
        }

        return resultado;
    }

    successPage(nomeEmail) {
        const email = document.querySelector('b');
        email.innerHTML = nomeEmail.value;
    }
}
const validandoEmail = new EnivoDoEmail();
