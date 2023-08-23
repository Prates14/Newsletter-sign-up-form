class EnivoDoEmail {
    constructor() {
        this.btn = document.querySelector('button');
        this.input = document.querySelector('.sub-email');
        this.evento();
    }

    evento() {
        this.btn.addEventListener('click', event => {
            event.preventDefault();
            const validaEmail = this.validaEmail(this.input.value);

            if (validaEmail === true) {
                window.location.href = 'success.html';
                localStorage.setItem('email', JSON.stringify(this.input.value));
            } else {
                this.erroDetectado();
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

    erroDetectado() {
        const span = document.querySelector('span')
        this.input.classList.add('error-email')
        document.querySelector('.erro-msg').classList.add('error-content')
        span.innerHTML = 'Valid email required'
    }

}
const validandoEmail = new EnivoDoEmail();

function page2() {
    const frase = JSON.parse(localStorage.getItem('email'));
    document.querySelector('.text').innerHTML = `A confirmation email has been sent to <b>${frase}</b>. Please open it and click the button inside to confirm your subscription.`
}