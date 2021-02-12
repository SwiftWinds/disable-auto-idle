/**
 * @name DisableAutoIdle
 * @version 0.0.1
 * @description A simple plugin that disables auto-idle
 *
 * @website https://github.com/swiftwinds/disable-auto-idle
 */

class DisableAutoIdle {
  getName = () => 'Disable Auto Idle';

  getDescription = () => 'A simple plugin that disables auto-idle';

  getVersion = () => '0.0.1';

  getAuthor = () => 'SwiftWinds';

  start = () =>
    (BdApi.findModuleByProps('API_HOST').IDLE_DURATION = Number.MAX_VALUE);

  stop = () => (BdApi.findModuleByProps('API_HOST').IDLE_DURATION = 600000);
}

module.exports = DisableAutoIdle;
