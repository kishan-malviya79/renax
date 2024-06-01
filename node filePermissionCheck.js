const fs = require('fs');

// Path to the file
const filePath = 'F:/kishan photos/Project/Brainwave/renax/.next/trace';

// Check if the file exists and if we have permission to access it
fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    // If there's an error, it means either the file doesn't exist or we don't have permission
    console.error(`Error accessing the file: ${err}`);
    return;
  }

  // If we have access, read the file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // If there's an error reading the file, log the error
      console.error(`Error reading file: ${err}`);
      return;
    }
    // If successful, log the content of the file
    console.log(`File content: ${data}`);
  });
});
    