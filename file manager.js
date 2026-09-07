const fs=require('fs')


console.log("Creating File...");

fs.writeFile('node.txt', "Hello Node.js", (err) => {
    if (err) {
        console.error("Error creating file:", err.message);
        return;
    }
    console.log("File Created");

    console.log("Reading file");
    fs.readFile('node.txt', "utf8", (err, data) => {
        if (err) {
            console.error("Error in reading file:", err.message);
            return;
        }
        console.log(data);

        console.log("File updated");
        fs.appendFile('node.txt', '\nLearn fs module', (err) => {
            if (err) {
                console.error("Error in updating file:", err.message);
                return;
            }
            console.log('Learn fs module');

            fs.unlink('node.txt', (err) => {
                if (err) {
                    console.error("Error in deleting:", err.message);
                    return;
                }
                console.log("File deleted");

                fs.readFile('node.txt',(err)=>{
                    if (err){
                        console.error("error: file does not exist")
                        return
                    }
                    console.log(data)
                })
            });
        });
    });
});
