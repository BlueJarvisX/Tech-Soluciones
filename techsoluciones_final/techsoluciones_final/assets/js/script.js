
document.addEventListener("DOMContentLoaded", function () {
    // BOTÓN HACIA ARRIBA
    const scrollTopButton = document.getElementById("scroll-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollTopButton.style.display = "block";
            scrollTopButton.style.opacity = "1";
        } else {
            scrollTopButton.style.opacity = "0";
            setTimeout(() => {
                scrollTopButton.style.display = "none";
            }, 300);
        }
    });

    if (scrollTopButton) {
        scrollTopButton.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // VALIDACIÓN DEL FORMULARIO DE CONTACTO
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("¡Mensaje enviado correctamente!");
            contactForm.reset();
        });
    }

    // FORMULARIO LOGIN Y REGISTRO
    const showLoginBtn = document.getElementById("show-login");
    const showRegisterBtn = document.getElementById("show-register");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    if (showLoginBtn && showRegisterBtn && loginForm && registerForm) {
        showLoginBtn.addEventListener("click", () => {
            loginForm.classList.add("active");
            registerForm.classList.remove("active");
            showLoginBtn.classList.add("active");
            showRegisterBtn.classList.remove("active");
        });

        showRegisterBtn.addEventListener("click", () => {
            registerForm.classList.add("active");
            loginForm.classList.remove("active");
            showRegisterBtn.classList.add("active");
            showLoginBtn.classList.remove("active");
        });
    }

    const rolSelect = document.getElementById("rol");
    const rolDisplay = document.getElementById("rol-seleccionado");

    if (rolSelect && rolDisplay) {
        rolSelect.addEventListener("change", function () {
            const rolTexto = rolSelect.options[rolSelect.selectedIndex].text;
            rolDisplay.textContent = rolTexto !== "Seleccione una opción" ? rolTexto : "Ninguno";
        });
    }

    const registroForm = document.getElementById("registro-form");
    if (registroForm) {
        registroForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("¡Registro exitoso!");
            registroForm.reset();
            if (rolDisplay) rolDisplay.textContent = "Ninguno";
            window.location.href = "proyectos.html";
        });
    }

    const loginFormReal = document.querySelector("#login-form form");
    if (loginFormReal) {
        loginFormReal.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("¡Inicio de sesión exitoso!");
            window.location.href = "proyectos.html";
        });
    }
});
