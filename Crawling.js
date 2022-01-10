let basicname = [];
let basiclevel = [];
let j = 1;
let k = 1;
let listlength;
let parselevel = [];
let parselevel2 = [];
let sourcename = [];
let sourcelevel = [];
let result = [];
let sortedname = [];
let resultname = [];

for(;;){
    if(!(document.querySelector("body > div.wrapper > div.container.content > div.row > div:nth-child(3) > div > table > tbody > tr:nth-child("+k+") > td:nth-child(2) > a"))) break;
    else{
        basicname[k-1] = document.querySelector("body > div.wrapper > div.container.content > div.row > div:nth-child(3) > div > table > tbody > tr:nth-child("+k+") > td:nth-child(2) > a");
        k++;
    }
}
listlength = k;

for(let l = 1; l < listlength; l++){
    basiclevel[l-1] = document.querySelector("body > div.wrapper > div.container.content > div.row > div:nth-child(3) > div > table > tbody > tr:nth-child("+l+") > td:nth-child(2) > img");
}

parselevel = basiclevel.map(v => v.src.substr(43));
parselevel2 = parselevel.map(v => v.replace(".svg",""));

for(let l = 1; l < listlength; l++){
    sourcename = basicname.map(v => v.innerText);
}

for(let l = 1; l < listlength; l++){
    sourcelevel = parselevel2.map(v => v);
}

for(let l = 1; l < listlength; l++){
    result[l-1] = {name: sourcename[l-1], level: sourcelevel[l-1]};
}

result.sort(function(a, b) {
    return a.level - b.level;
});

sortedname = result.map(v => v.name);
resultname = sortedname.join('\n');
console.log(resultname);