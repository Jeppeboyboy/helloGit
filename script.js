// Funktion för att visa/dölja sektioner
document.querySelectorAll('h2').forEach(header => {
    header.addEventListener('click', () => {
        const sectionContent = header.nextElementSibling;
        sectionContent.style.display = (sectionContent.style.display === 'none') ? 'block' : 'none';
    });
});

// Funktion för mörkt läge
const toggleDarkModeButton = document.createElement('button');
toggleDarkModeButton.textContent = 'Växla mörkt läge';
toggleDarkModeButton.style.position = 'fixed';
toggleDarkModeButton.style.bottom = '20px';
toggleDarkModeButton.style.right = '20px';
document.body.appendChild(toggleDarkModeButton);

toggleDarkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Funktion för dynamiska datum
document.querySelectorAll('.current-year').forEach(element => {
    element.textContent = new Date().getFullYear();
});