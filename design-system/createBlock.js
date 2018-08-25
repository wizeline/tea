const fs = require('fs-extra');

const createEmptyFile = path => fs.outputFile(path, '');

const extensions = ['tsx', 'scss', 'test.tsx'];

const prompt = (question, callback) => {
  const stdin = process.stdin,
    stdout = process.stdout;

  stdin.resume();
  stdout.write(question);

  stdin.once('data', function(data) {
    callback(data.toString().trim());
  });
};

prompt('Block name: ', async input => {
  const fileName = input.toLowerCase();
  const path = `${process.cwd()}/src/components/${fileName}/`;
  const files = extensions.map(extension =>
    createEmptyFile(`${path}/${fileName}.${extension}`),
  );

  const results = await Promise.all([...files]);

  const message = results.length
    ? `Block ${fileName} created successfully`
    : 'Uh oh, something failed';
  console.log(message);

  process.exit();
});
