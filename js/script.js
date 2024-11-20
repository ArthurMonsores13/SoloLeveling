
const zoomableImages = document.querySelectorAll('.zoomable');


zoomableImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(0.9)'; // Amplia a imagem
        image.style.transition = 'transform 0.3s ease-in-out'; // Transição suave
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)'; // Retorna ao tamanho original
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Cria o popup dinamicamente
        const popup = document.createElement("div");
        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.backgroundColor = "#fff";
        popup.style.color = "#000";
        popup.style.padding = "20px";
        popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        popup.style.borderRadius = "10px";
        popup.style.zIndex = "1000";
        popup.style.textAlign = "center";

        
        popup.innerHTML = `
            <li>Mensagem enviada! Entraremos em contato em breve. Erga-se!</li>
            <button id="closePopup" style="
                margin-top: 10px;
                padding: 8px 16px;
                background-color: #28a745;
                color: #black;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            ">Fechar</button>
        `;

        // Adiciona o popup ao corpo da página
        document.body.appendChild(popup);

        // Fecha o popup quando o botão for clicado
        document.getElementById("closePopup").addEventListener("click", () => {
            popup.remove();
        });

        // Reseta o formulário
        form.reset();
    });
});

