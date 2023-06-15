function exibirHamburgueres(){
    document.getElementById('hambuergueres').classList.remove('oculta')
    document.getElementById('bebidas').classList.add('oculta')
    document.getElementById('acompanhamentos').classList.add('oculta')
}

function exibirAcompanhamentos(){
    document.getElementById('hambuergueres').classList.add('oculta')
    document.getElementById('bebidas').classList.add('oculta')
    document.getElementById('acompanhamentos').classList.remove('oculta')
}

function exibirBebidas(){
    document.getElementById('hambuergueres').classList.add('oculta')
    document.getElementById('bebidas').classList.remove('oculta')
    document.getElementById('acompanhamentos').classList.add('oculta')
}

