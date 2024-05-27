import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name"
        }
    ])
    .then((answers) => {
        const name = answers.name;
        const filepath = './message-text.txt'

        var qr_svg = qr.image('image', { type: 'png' });
        qr_svg.pipe(fs.createWriteStream('image.png'));
        console.log("The QR image has been created!");
        
        fs.writeFile(filepath, name, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          }); 
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment");
        } else {
            console.log("Something else went wrong");
        }
    });

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
