#!/usr/bin/env nodejsscript
import { s, read, fetch, exit } from "nodejsscript";
(async function main(){
	const username= await read({ "-p": "What is your GitHub username?" });
	const token= await read({ "-p": 'Do you have GitHub token in env?', completions: Object.keys(process.env) });

	const headers= !Reflect.has(process.env, token) ? {} : { //not ideal, just because others Reflect.*
		Authorization: `token ${Reflect.get(process.env, token)}`,
	};

	const data= await fetch(`https://api.github.com/users/${username}/repos?per_page=1000`, { headers }).then(res=> res.json());
	const urls= data.map(x=> x.git_url.replace('git://github.com/', 'git@github.com:'));

	s.mkdir("-p", "backups");
	s.cd("./backups");
	for(const url of urls)
		s.exec(`git clone ${url}`);
	exit(0);
})();
