// Streams are used for working with large data files. They fill up buffers with small chunks of data and these buffers are sent down a stream. This is used in stuff like netflix and youtube videos
// These buffers can then start to be used

const fs = require("fs");

const blogsReadStream = fs.createReadStream("./docs/heavyblogs.txt", { encoding: "utf8" }); // create a stream to a heavy file. Takes a path and optionally, a bunch of options to modify the data passing through, like encoding string for example
const blogsWriteStream = fs.createWriteStream("./docs/blogs4.txt"); // takes a file to write to

// event listener on blogsReadStream has a "on" method with a 'data' event marker(there's possibly other events that can go through a stream) and a callback with an argument. The callback executes on each buffer(chunk) of data
blogsReadStream.on('data', (chunk) => {
    console.log("--- NEW CHUNK ---");
    console.log(chunk);
    blogsWriteStream.write("\nNEW CHUNK \n");
    blogsWriteStream.write(chunk)
})

// PIPING
// If you want to read from a source and write directly into a destination, you can pipe the stream like so
blogsReadStream.pipe(blogsWriteStream);

// a duplet stream allows both read and write operations