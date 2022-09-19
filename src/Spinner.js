/* jshint esversion: 7,-W097, -W040, node: true, expr: true, undef: true */
const store= new WeakMap();
export class Spinner{
	static get spinner(){ return 'win32' == process.platform ? ['|','/','-','\\'] : "⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏".split(""); }
	constructor(template= " ${spinner} ${message}", params= { message: " Working…" }, spinner= this.constructor.spinner){
		store.set(this, { template, params, spinner });
		return this;
	}
	start(){
		const { spinner, template }= store.get(this);
		const { length }= spinner;
		let i= 0;
		this.interval= setInterval(()=> {
			const { params }= store.get(this);
			const message= template.replace(/\$\{([^}]*)}/g, (_, name)=> {
				if(name==="spinner") return spinner[i];
				return params[name];
			});
			process.stderr.write("\u001b[0G"+message);
			i+= 1;
			if(i===length) i= 0;
		}, 750);
		return this;
	}
	params(params){
		Object.assign(store.get(this).params, params);
		return this;
	}
	end(message){
		//process.stderr.write('\u001b[0G\u001b[2K');
		if(typeof message === "string")
			process.stderr.write("\u001b[0G"+message);
		clearInterval(this.interval);
		process.stderr.write(' '.repeat(process.stdout.columns - 1) + '\r');
	}
}
