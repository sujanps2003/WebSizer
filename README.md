# WebSizer
# File Compression and Decompression

This is a simple JavaScript code snippet for file compression and decompression using the `pako` library. It provides a basic interface for users to upload files, compress them, and then download the compressed or decompressed files. Additionally, it includes an image file compression feature using the `Compressor` library.

## Features

### File Compression
- Users can upload a file of their choice.
- The selected file is compressed using the `pako` library.
- The compressed file is made available for download with a `.zip` extension.

### File Decompression
- Users can upload a compressed (`.zip`) file.
- The selected compressed file is decompressed using the `pako` library.
- The decompressed file is made available for download with a `.txt` extension.

### Image File Compression
- Users can upload an image file.
- The image file is resized, and its quality is reduced to compress it.
- The compressed image is made available for download while preserving the original file extension.

## Usage

1. Include the necessary libraries in your HTML file:
   ```html
   <script src="pako.min.js"></script>
   <script src="compressor.js"></script>
   ```

2. Copy and paste the JavaScript code provided into your HTML file or link to an external JavaScript file.

3. Create HTML buttons or elements with the following IDs to trigger the functionality:
   - `upload-btn`: For file compression.
   - `download-btn`: For file decompression.
   - `image`: For image file compression.

4. Open the HTML file in a web browser to use the file compression and decompression features.

## Dependencies

- [pako](https://github.com/nodeca/pako): A fast and efficient JavaScript library to perform data compression and decompression.
- [compressor.js](https://github.com/fengyuanchen/compressorjs): A JavaScript image compression library for resizing and optimizing images.

## License

This code is provided under an open-source license and can be used, modified, and distributed as needed. Please refer to the individual libraries' licenses for more information.

**Note**: This code is a basic demonstration of file compression and decompression and may require further customization and integration into a larger application for practical use.
