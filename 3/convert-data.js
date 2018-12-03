const fs = require('fs');

const fileName = 'example-data';

const rawData = fs.readFileSync(`${fileName}.text`, 'utf8');

const output = {};

rawData.split('\n').forEach(line => {
  const parts = line.split(' ');
  const inches = parts[2].replace(':', '').split(',');
  const size = parts[3].split('x');

  output[parts[0]] = {
    left: parseInt(inches[0]),
    top: parseInt(inches[1]),
    width: parseInt(size[0]),
    height: parseInt(size[1])
  };
});

fs.writeFileSync(`${fileName}.json`, JSON.stringify(output));
