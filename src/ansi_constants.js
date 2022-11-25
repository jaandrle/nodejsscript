import { inspect } from 'node:util';
const s= inspect.colors;

export const ansi_constants= {
	"unset:all": s.reset,
	"display:none": s.hidden,
	
	"font-weight:bold": s.bold,
	"font-style:italic": s.italic,
	"text-decoration:underline": s.underline,
	"text-decoration:line-through": s.strikethrough,
	
	"animation:blink": s.blink,
	
	"color:black": s.black,
	"color:red": s.red,
	"color:green": s.green,
	"color:yellow": s.yellow,
	"color:blue": s.blue,
	"color:magenta": s.magenta,
	"color:cyan": s.cyan,
	"color:white": s.white,
	"color:gray": s.gray,
	"color:lightred": s.redBright,
	"color:lightgreen": s.greenBright,
	"color:lightyellow": s.yellowBright,
	"color:lightblue": s.blueBright,
	"color:lightmagenta": s.magentaBright,
	"color:lightcyan": s.cyanBright,
	"color:whitesmoke": s.whiteBright,
	
	"background:black": s.bgBlack,
	"background:red": s.bgRed,
	"background:green": s.bgGreen,
	"background:yellow": s.bgYellow,
	"background:blue": s.bgBlue,
	"background:magenta": s.bgMagenta,
	"background:cyan": s.bgCyan,
	"background:white": s.bgWhite,
	"background:gray": s.bgGray,
	"background:lightred": s.bgRedBright,
	"background:lightgreen": s.bgGreenBright,
	"background:lightyellow": s.bgYellowBright,
	"background:lightblue": s.bgBlueBright,
	"background:lightmagenta": s.bgMagentaBright,
	"background:lightcyan": s.bgCyanBright,
	"background:whitesmoke": s.bgEsmokeBright

	//margin-left … special case
};
