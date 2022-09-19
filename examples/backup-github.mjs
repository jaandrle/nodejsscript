#!/usr/bin/env nodejsscript
import { s, echo, question, fetch } from "/home/jaandrle/.nvm/versions/node/v17.0.1/lib/node_modules/nodejsscript/index.js";

const username= await question('What is your GitHub username?');
const token= await question('Do you have GitHub token in env?', {
	completions: Object.keys(process.env),
});

let headers= {};
if (process.env[token]) {
  headers= {
    Authorization: `token ${process.env[token]}`,
  };
}
const data= await fetch(`https://api.github.com/users/${username}/repos?per_page=1000`, { headers }).then(res=> res.json());
const urls= data.map(x=> x.git_url.replace('git://github.com/', 'git@github.com:'));

s.mkdir("-p", "backups");
s.cd("./backups");

for(const url of urls)
	s.exec(`git clone ${url}`);
