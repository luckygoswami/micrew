# Micrew Chrome Extension

**Micrew** is a Chrome extension designed to automatically search for random stock prices on Bing, helping you earn daily Microsoft Rewards points. Ensure you are logged into your Microsoft account on Bing before running the script to receive points.

## Features

- Automatically searches for random stock prices on Bing.
- Configurable search count and delay interval through the extension popup.
- Provides a count of executed searches.

## Screenshots

![Micrew overview](https://github.com/luckygoswami/assets/blob/main/Micrew/demoVideo.gif?raw=true)

## Files

1. **`manifest.json`**

   - Defines the extension's metadata and settings.
   - Permissions: `tabs`
   - Content scripts: `content-script.js`

2. **`content-script.js`**

   - Listens for messages to run the search script.
   - Contains a function to generate two random letters.
   - This file is currently not in use.

3. **`popup.html`**

   - The HTML structure of the popup interface.
   - Includes controls for search count and interval, and a button to start the script.

4. **`popup.css`**

   - Styles the popup interface, including layout and hover effects.

5. **`popup.js`**
   - Handles the functionality of the popup.
   - Updates Bing search URL and executes searches based on user settings.
   - Dynamically adjusts the search count and interval values.

## Installation

1. [Download Micrew](https://github.com/luckygoswami/Micrew/archive/refs/heads/main.zip) repository in compressed format.
2. Extract the downloaded compressed file using archivers e.g. Winrar.
3. Open Chrome and navigate to `chrome://extensions/`.
4. Enable "Developer mode" using the toggle in the top right corner.
5. Click "Load unpacked" and select the directory containing the extension files.
6. The extension should now appear in your list of extensions.

## Usage

1. Click on the Micrew extension icon in your Chrome toolbar.
2. Adjust the search count and interval using the sliders.
3. Click the "Run Script" button to start the automatic search process.
4. To stop the script, click on the extension icon or click outside the popup.

## Notes

- This extension can be used in any browser with same setup/installation process.
- Make sure you are logged into your Microsoft account on Bing to receive points.
- The script currently does not use the `content-script.js` file but is designed to run the functionality through browser DOM (if needed in future).

## Troubleshooting

- **If the extension is not working:** Ensure that you are logged into your Microsoft account on Bing before running the script.
- **Searches are not being executed:** Check if there are any errors in the console of the extension by opening the Chrome Developer Tools of extension and navigating to the "Console" tab.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any issues or questions, please open an issue on the [GitHub repository](https://github.com/luckygoswami/micrew).

---

_Made with 🧠 by LuckyGoswami_
