#!/usr/bin/env nodejsscript
import { cd, echo, exec, mkdir, question } from "nodejsscript";

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

mkdir("-p", "backups");
cd("./backups");

for(const url of urls)
	exec(`git clone ${url}`);
