// import fs from 'fs'
import { error } from 'console';
import fs from 'fs/promises';
// readFile() - callback
// fs.readFile('./text.txt', isUtf8, (err, data) =>{
// if(err) throw err;
// console.log(data);
// })

//readFileSync() - Synchronous version

// const data = fs.readFileSync('./test.txt', 'utf8')
// console.log(data);

//readFile() - promise .then()

// fs.readFile('./test.txt', 'utf8')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//readFile() -async/await

const readFile = async () => {
  try {
    const data = await fs.readFile('./test.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
// writeFile()
const writeFile = async () => {
  try {
    await fs.writeFile('./test.txt', 'Hello , I am writing this file');
    console.log('File written to....');
  } catch (error) {
    console.log(error);
  }
};

//append file

const appendFile = async () => {
  try {
    await fs.appendFile('./test.txt', '\nThis is appended text');
    console.log('file appended to...');
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();
