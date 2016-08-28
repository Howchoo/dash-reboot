var dash_button = require('node-dash-button'),
    dash = dash_button('xx:xx:xx:xx:xx:xx'), // replace xx:xx:xx:xx:xx:xx with your Dash Button's hardware address
    exec = require('child_process').exec;

dash.on('detected', function() {
    exec('sh /usr/local/bin/reboot.sh', function(error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);
        }
    });
});