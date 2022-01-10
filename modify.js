let basicname = [];
let basiclevel = [];
let j = 1;
let k = 1;
let listlength;

for(;;){
    basicname[k-1] = document.querySelector("body > div.wrapper > div.container.content > div.row > div:nth-child(3) > div > table > tbody > tr:nth-child("+k+") > td:nth-child(2) > a");
    if(!basicname[k-1]) break;
    k++;
}

listlength = k;

for(let l = 1; l < listlength; l++){
    basiclevel[l-1] = document.querySelector("body > div.wrapper > div.container.content > div.row > div:nth-child(3) > div > table > tbody > tr:nth-child("+l+") > td:nth-child(2) > img");
}

let parselevel = [];
parselevel = basiclevel.map(v => v.src.substr(43));

let parselevel2 = []
parselevel2 = parselevel.map(v => v.replace(".svg",""));