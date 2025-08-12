const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://kanban-dusky-five.vercel.app/",
    supportFile: "cypress/support/e2e.js"
    },
});
