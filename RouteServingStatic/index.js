const fs = require("fs");
const { resolve } = require("path");
const { promises } = require("stream");

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if(err){
            reject('File does not exist');
            return;
        }
        resolve(data);
    });
  });
};

const writeFile = (path, content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, content, (err) => {
            if(err){
                reject('Error in creating a new File');
                return;
            }
            resolve('File written Successfully');
        });
    });
}





