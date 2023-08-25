//File compression
//render the file from the user
document.getElementById('upload-btn').addEventListener('click', function () {
    const input = document.createElement('input');
    input.type = 'file';
    input.addEventListener('change', function (event) {
        const files = event.target.files[0];
        if (files) {
            readText(files, function (data) {
                compression(data, files);
            })
        }
    });
    input.click();
});
// compression 
function compression(data, file) {
    const compressedData = pako.deflate(data, { to: 'string' });
    const compressedName = changeFileExtension(file.name, 'zip');
    console.log(compressedData);
    console.log(typeof (compressedData));
    saveAs(new Blob([compressedData]), compressedName);
    console.log(new Blob([compressedData]));
}
// reading the text.
function readText(file, callback) {
    const filereader = new FileReader();
    filereader.onload = function (event) {
        const data = event.target.result;
        callback(data);
    };
    filereader.readAsText(file);
}

// File decompression
// render the zip file to decompress it
document.getElementById('download-btn').addEventListener('click', function () {
    const input = document.createElement('input');
    input.type = 'file';
    input.addEventListener('change', function (event) {
        const file = event.target.files[0];
        console.log(file);
        console.log(file.name);
        if (file) {
            decomp(file, function (data) {
                const decompdata = new Uint8Array(data);
                saveDecompressedFile(decompdata, file.name); // Call a function to handle saving the decompressed file
            });
        }
    });
    input.click();
});
// decompression
function decomp(file, callback) {
    const fs = new FileReader();
    fs.onload = function (event) {
        const data = event.target.result;
        const uintdata = new Uint8Array(data);
        const decompdata = pako.inflate(uintdata, { to: 'uint8array' });
        callback(decompdata);
    };
    fs.readAsArrayBuffer(file);
}
// Saving decompressed file.
function saveDecompressedFile(data, originalFileName) {
    const newFileName = changeFileExtension(originalFileName, 'txt'); // Change the extension to 'txt'
    const blob = new Blob([data], { type: 'application/octet-stream' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = newFileName;
    link.click();
    URL.revokeObjectURL(link.href);
}
// change file extension.
function changeFileExtension(fileName, newExtension) {
    const parts = fileName.split('.');
    parts.pop(); // Remove the old extension
    parts.push(newExtension); // Add the new extension
    return parts.join('.');
}

// image file compression
document.getElementById('image').addEventListener('click', function () {
    const input = document.createElement('input');
    input.type = 'file';
    input.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            var options = {
                maxWidth: 800,
                maxHeight: 600,
                quality: 0.8,
                success(result) {
                    const link = document.createElement('a');
                    const blob = new Blob([result], { type: file.type });
                    const url = URL.createObjectURL(blob);
                    link.href = url;
                    link.download = "compressed_image." + file.type.split("/")[1]; // Preserve the original file extension
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    URL.revokeObjectURL(url);
                },
                error(err) {
                    console.error('Error compressing image:', err.message);
                },
            };
        
            new Compressor(file, options);
        }
        
    });
    input.click();
})
