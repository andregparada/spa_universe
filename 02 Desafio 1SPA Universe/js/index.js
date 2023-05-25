import { Router } from './router.js'

const router = new Router()
const buttonHome =  document.querySelector('.button-home')
const buttonUniverso =  document.querySelector('.button-universo')
const buttonExploracao = document.querySelector('.button-exploracao')
const buttonHomeOn =  document.querySelector('.button-home-on')
const buttonUniversoOn =  document.querySelector('.button-universo-on')
const buttonExploracaoOn = document.querySelector('.button-exploracao-on')

function homeOn() {
    buttonHomeOn.classList.remove('hide')
    buttonHome.classList.add('hide')
}
function homeOff() {
    buttonHomeOn.classList.add('hide')
    buttonHome.classList.remove('hide')
}
function universoOff() {
    buttonUniversoOn.classList.add('hide')
    buttonUniverso.classList.remove('hide')
}
function universoOn() {
    buttonUniversoOn.classList.remove('hide')
    buttonUniverso.classList.add('hide')
}
function exploracaoOff() {
    buttonExploracaoOn.classList.add('hide')
    buttonExploracao.classList.remove('hide')
}
function exploracaoOn() {
    buttonExploracaoOn.classList.remove('hide')
    buttonExploracao.classList.add('hide')
}

buttonHome.addEventListener('click', function() {
    homeOn()
    exploracaoOff()
    universoOff()
})

buttonUniverso.addEventListener('click', function() {
    universoOn()
    homeOff()
    exploracaoOff()
})
buttonExploracao.addEventListener('click', function() {
    exploracaoOn()
    homeOff()
    universoOff()
})

router.add('/', '/pages/home.html')
router.add('/universo', '/pages/universo.html')
router.add('/exploracao', '/pages/exploracao.html')

router.handle();

window.onpopstate = () => router.handle()
window.route = () => router.route()