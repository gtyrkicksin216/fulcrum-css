const chalk = require(`chalk`);

(() => {
  setTimeout(() => {
    console.warn(chalk.bold.yellow(`
    ======================================================================================
    |  ${chalk.red(`_ The the flex-grid module has been depricated and will be removed 2019-12-01.`)}    |
    | ${chalk.red(`| |`)}  If you are using:                                                             |
    | ${chalk.red(`| |`)}    - .u-flex-grid                                                              |
    | ${chalk.red(`| |`)}    - .u-flex-row                                                               |
    | ${chalk.red(`| |`)}    - .u-flex-column                                                            |
    | ${chalk.red(`| |`)}                                                                                |
    | ${chalk.red(`|_|`)}  You will need to migrate to using the new grid layout module's class          |
    |  ${chalk.red(`_`)}   names. To learn more aboout the new grid layout and it's class names          |
    | ${chalk.red(`(_)`)}  please visit view the docs.                                                   |
    ======================================================================================
    `));
  });
})();
