/* Don't put this code in production, only in tests and samples -
   sycn I/O would block */

var fs = require('fs');

function readList(path)
{
    var content = fs.readFileSync(path).toString();
    return content.split("\n");
}

module.exports = readList;
