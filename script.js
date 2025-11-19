document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section, .item, ul.skills li");

    sections.forEach((el, i) => {
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, i * 80);
    });
});
