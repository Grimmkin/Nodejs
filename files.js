const fs = require('fs');

// READING FILES

// The method below is asynchronous. It takes a path for the file to open and a callback function to run after the file has been opened. Yes, a synchronous version exists
fs.readFile('./docs/blogs.txt', (err, data) => {
    if (err){
        console.log(err);
    }
    console.log(data.toString()); //readFile returns a file buffer by default. Use the .toString metthod on the data to get the human readable string
})

// WRITING FILES
// This method takes the file, the stuff to write and a callback function cause it's also asychronous. If the file doesn't exist, it just creates it
fs.writeFile("./docs/blogs.txt", "Herding cats t-shaped individual, so face time, and show grit. Per my previous email value-added, but organic growth gain traction. Can you ballpark the cost per unit for me. I also believe it's important for every member to be involved and invested in our company and this is one way to do so crank this out we need to make the new version clean and sexy, for waste of resources, so hop on the bandwagon cc me on that i dont care if you got some copy, why you dont use officeipsumcom or something like that ?.", () => {
    console.log("Data Writing complete!")
})

// DIRECTORIES
// check if a folder exits
if (!fs.existsSync("./assets")) {
    fs.mkdir("./assets", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("File created!");
    })
} else {
    fs.rmdir("./assets");
}

// DELETING FILES
// make sure the file to be deleted exists
if (fs.existsSync("./docs/blogs.txt")){
    fs.unlink("./docs/blogs.txt"); // unlink is the method for deleting
}