// kwlist.txt file can be generated with `prowin -zgenkwlist > kwlist.txt`
const fs = require('fs');

let lineReader = require('readline').createInterface({
  input: fs.createReadStream('kwlist.txt')
});

 
let output = 'grammar.json';
let result = {};
let grammarBlocks2 = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
const re = /(?:\w|-|\()+(?=\s|$)/g

let srcKw = [];

lineReader.on('line', line => {
    let results;
    line = line.toLowerCase();

    while ((results = re.exec(line)) !== null) {
      srcKw.push(results[0]);
    }
});

lineReader.on('close', () => {
  for (const kkw of srcKw.sort()) {
    let kw = kkw;
    if (kw.indexOf('(') !== -1) {
        let kwParts = kw.split('(');
        kw = kwParts[0];
        let tmp = [];
        tmp.push(kw);
        let kwComplete = kwParts[1];
        for (const element of kwComplete) {
            kw += element;
            tmp.push(kw);
        }
        for (const e of tmp.reverse()) {
          grammarBlocks2[e.charCodeAt(0) - 97].push(e);
        }
    } else {
        grammarBlocks2[kw.charCodeAt(0) - 97].push(kw);
    }
  }
  
  
    for (var zz = 0; zz < 26; zz++) {
        result['keywords-' + String.fromCharCode(97 + zz)] = 
         {
            match: "(?i)(?<![\\w-])(" + grammarBlocks2[zz].join('|') + ")(?![\\w-])",
            name: "keyword.other.abl"
        }
    }
    fs.writeFileSync(output, JSON.stringify(result, undefined, 4));
})
