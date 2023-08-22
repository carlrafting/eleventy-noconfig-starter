#!/usr/bin/env node

import meow from "meow";
import getStdin from 'get-stdin';
import process, { argv0 } from "node:process"
import path from "node:path";

async function main(dirPath=".") {
    console.log(`Create new project at ${path.resolve(dirPath)}?`, '[yes/no]');
    const answer = await getStdin();
    setTimeout(() => console.log(answer), 5 * 1000);
}

const cli = meow(`M E O W !`, {
    importMeta: import.meta
});

await main(cli.input.at(0));

/* 
const argv = process.argv;
console.log('argv0', argv0);
for (const a of argv) {
     console.log(JSON.stringify(path.resolve(a)));
}
*/
