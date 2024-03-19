# OWASP

Before you run the script please follow the step
1.install node.js
2.change directory path to this project // cd your/project/path
3.put this command in the terminal to install cypress // npm install cypress --save-dev
4.after you install cypress, now you can run the script in 2 way
    4.1. run by the ui // npx cypress open
        - after the ui show up click E2E Testing
        - select browser (i suggest Chrome, cause i was testing on chrome)
        - click Start E2E Testing in Chrome
        - then you will see the spec file, choose owasp_juice_shop.cy.js
    4.2. run by terminal // npx cypress run --spec "cypress/e2e/owasp_juice_shop.cy.js"


Description about each folder
1.e2e - store test script
2.fixture - store test data file as a JSON
3.support - store support file such as custom command, utils, database connection credential


