#!/usr/bin/env nodejsscript
import { s, cli, fetch } from "nodejsscript";

const username= await cli.question('What is your GitHub username?');
const token= await cli.question('Do you have GitHub token in env?', {
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
