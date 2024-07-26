document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            const rows = content.split('\n').map(row => row.split(','));

            displayCSV(rows);
        };
        reader.readAsText(file);
    }
});

function displayCSV(rows) {
    const output = document.getElementById('output');
    output.textContent = JSON.stringify(rows, null, 2);
}