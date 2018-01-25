const script = process.argv.length > 1 ? process.argv[2] : undefined;

switch (script) {
    case 'lint':
    case 'test': {
        require(`../scripts/${script}.js`);
        break;
    }
    case '--version': {
        const { version } = require('../package.json');
        console.log(version);
    }
    default: {
        console.error(`Unknwon script "${script}".`);

        process.exit(1);
    }
}
