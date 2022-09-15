#!/usr/bin/env node
// import { dirname, basename } from 'node:path';
// import { existsSync, readFile } from "node:fs";
import { resolve } from "node:path";
import { argv } from "node:process";
import url from "node:url";

const candidate= argv.splice(2, 1)[0];
const filepath= candidate.startsWith('/') ? candidate : ( candidate.startsWith('file:///') ? url.fileURLToPath(candidate) : resolve(candidate) );
argv[1]= filepath;
await import(url.pathToFileURL(filepath).toString());
