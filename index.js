function inputFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.onchange = () => {
        let files = Array.from(input.files);
        console.log(files);
    }
    input.click();
    
}