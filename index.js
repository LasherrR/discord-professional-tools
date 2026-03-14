const readline = require("readline").createInterface({ input: process.stdin, output: process.stdout });


const colors = {
    red: "\x1b[31m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    gray: "\x1b[90m",
    reset: "\x1b[0m",
    bold: "\x1b[1m"
};

const logo = `
    __      ___   _____ __ __  ___  ___       _____  ____   ____  _      ___ 
   / /     / _ | / __ // // / / __// _ \\     /_  _/ / __ \\ / __ \\/ /    / __/
  / /__   / __ |_\\ \\  / _  / / _/ / , _/      / /  / /_/ // /_/ / /__  _\\ \\  
 /____/  /_/ |_/___/ /_//_/ /___//_/|_|      /_/   \\____/ \\____/____/ /___/  
`;

console.clear();
console.log(colors.red + colors.bold + logo + colors.reset);
console.log(`    ${colors.gray}»${colors.reset} ${colors.cyan}Developed by Lasher Tools${colors.reset}`);
console.log(`    ${colors.gray}»${colors.reset} ${colors.cyan}Multi Discord Tool | Premium Edition${colors.reset}\n`);

console.log(`${colors.magenta}  ╭───────────────────────────────────┬───────────────────────────────────╮${colors.reset}`);
console.log(`${colors.magenta}  │ ${colors.reset}${colors.bold}${colors.red}[1]${colors.reset} ${colors.white}Tokens join a server${colors.magenta}          │ ${colors.reset}${colors.bold}${colors.red}[2]${colors.reset} ${colors.white}Tokens check${colors.magenta}                  │${colors.reset}`);
console.log(`${colors.magenta}  │ ${colors.reset}${colors.bold}${colors.red}[3]${colors.reset} ${colors.white}Account Nuker${colors.magenta}                 │ ${colors.reset}${colors.bold}${colors.red}[4]${colors.reset} ${colors.white}Token onliner${colors.magenta}                 │${colors.reset}`);
console.log(`${colors.magenta}  │ ${colors.reset}${colors.bold}${colors.red}[5]${colors.reset} ${colors.white}Webhook Spammer${colors.magenta}               │ ${colors.reset}${colors.bold}${colors.red}[6]${colors.reset} ${colors.white}Token voice join${colors.magenta}              │${colors.reset}`);
console.log(`${colors.magenta}  │ ${colors.reset}${colors.bold}${colors.red}[7]${colors.reset} ${colors.white}Server Nuker${colors.magenta}                  │ ${colors.reset}${colors.bold}${colors.red}[8]${colors.reset} ${colors.white}Token dm message${colors.magenta}              │${colors.reset}`);
console.log(`${colors.magenta}  ╰───────────────────────────────────┴───────────────────────────────────╯${colors.reset}`);
console.log(`${colors.magenta}                            ╭─────────────────╮${colors.reset}`);
console.log(`${colors.magenta}                            │ ${colors.reset}${colors.bold}${colors.red}[9]${colors.reset} ${colors.white}Dm cleaner  ${colors.magenta}│${colors.reset}`);
console.log(`${colors.magenta}                            ╰─────────────────╯${colors.reset}\n`);

readline.question(`  ${colors.bold}${colors.red}Lasher${colors.reset}${colors.gray}@${colors.reset}${colors.bold}${colors.red}Tools${colors.white} ~ ${colors.reset}`, async (reply) => {
if(reply == 1) {
readline.close();
console.clear();
require("./tools/server-joiner.js");
} else if(reply == 2) {
readline.close();
console.clear();
require("./tools/tokens-check.js");
}else if(reply == 3) {
readline.close();
console.clear();
require("./tools/account-nuker.js");
} else if(reply == 4) {
readline.close();
console.clear();
require("./tools/tokens-onliner.js");
} else if(reply == 5) {
readline.close();
console.clear();
require("./tools/webhook-spammer.js");
}else if(reply == 6) {
readline.close();
console.clear();
require("./tools/tokens-voice-join.js");
}else if(reply == 7) {
readline.close();
console.clear();
require("./tools/server-nuker.js");
}else if(reply == 8) {
readline.close();
console.clear();
require("./tools/tokens-dm-message.js");
} else if(reply == 9) {
readline.close();
console.clear();
require("./tools/dm-cleaner.js");
}else {
console.log("[!] Error...");
process.exit();
}

})
