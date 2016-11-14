var spawn = require('cross-spawn');

var args = [
    '-t',
    'verbose',
    '--project',
    './tsconfig.json',
    '--type-check'
];
var proc = spawn('tslint', args, {
    stdio: 'inherit'
});
proc.on('exit', (code) => {
    process.exit(code);
});

// TODO also run eslint
