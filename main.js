function AboutTab() {
    return (
        <div>
            <a href="https://discord.gg/cBRbkCvEm7" target="_blank"><i class="bi bi-discord"></i></a>
            <a href="https://www.instagram.com/tecnic8000/" target="_blank"><i class="bi bi-instagram"></i></a>
            <a href="https://youtube.com/@tecnic8000" target="_blank"><i class="bi bi-youtube"></i></a>
        </div>
        )
}

const about1 = ReactDOM.createRoot(document.getElementById('about1'));
about1.render(<AboutTab />);



console.log('pass4')