'use stript';
const cmd = require('node-cmd');

module.exports = commandInit


function commandInit(yargs) {

    return yargs
    .command('push <name> [loc]', '将修改项全部提交', (yargs) => {
        return yargs.options({
            'all': {
                alias: 'a',
                type: 'boolean',
                describe: 'Submit type'
            },
            'partly': {
                alias: 'p',
                type: 'boolean',
                describe: 'partly submit'
            },
            'branch': {
                alias: 'b',
                type: 'string',
                describe: 'submit branch'
            },
            'commit' : {
                alias: 'c',
                type: 'string',
                describe: 'submit describe',
                default: 'cli  默认语句'
            }
        })
    }, (argv)=> {
        // cmd.runSync('git status')
        if (argv.all) {
            //全部提交
            cmd.runSync('git add .');
        } else if(argv.partly) {
            //用户选中提交

        }
        const syncClone = cmd.runSync("git commit -m '测试提交'");
        // const syncClone = cmd.runSync('git status');
        // console.log(syncClone.data);
        console.log('\x1B[32m%s\x1B[0m', syncClone.data)
    })
}