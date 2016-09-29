# dash-reboot
Reboot your Raspberry Pi using an Amazon Dash Button.

## Instructions
Basic setup instructions are below; I've also written a more detailed post on [restarting the Raspberry Pi using an Amazon Dash button](https://howchoo.com/g/ymy4nza0nzb/reboot-your-raspberry-pi-using-an-amazon-dash-button) which contains more detailed instructions.

1. Install Node.js
2. Install [node-dash-button](https://github.com/hortinstein/node-dash-button) and find your Dash Button's device/hardware address.
3. Create a reboot shell script containing `sudo reboot` and save as `/usr/local/bin/reboot.sh`.
4. Install dash-reboot into `node_modules/node-dash-button/dash-reboot.js`.
5. Install [Supervisor](https://github.com/Supervisor/supervisor) and configure it to run the node script at startup.
6. Use the Dash Button to reboot your Pi!