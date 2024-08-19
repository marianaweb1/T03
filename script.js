
function mudarEstado(ambienteId, estadoId, novoEstado) {
    const ambiente = document.getElementById(ambienteId);
    const estadoTexto = document.getElementById(estadoId);
    
    ambiente.className = '';
    ambiente.classList.add(novoEstado);
    estadoTexto.textContent = novoEstado.charAt(0).toUpperCase() + novoEstado.slice(1);  // Atualiza o texto
}
