function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        const yOffset = -50;
        const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}


window.addEventListener("scroll", function () {
    var footer = document.getElementById("footer");
    var scrollPosition = window.scrollY + window.innerHeight;
    var bodyHeight = document.body.scrollHeight;

    if (scrollPosition >= bodyHeight) {
        footer.style.display = "flex";
    } else {
        footer.style.display = "none";
    }
});


function ConnectWallet() {
    pass
}