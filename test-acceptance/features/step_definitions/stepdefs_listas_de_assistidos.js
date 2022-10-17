const assert = require("assert");
const { Given, When, Then } = require("cucumber");

require('chromedriver');
const seleniumWebdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');

let driver = new seleniumWebdriver.Builder()
                  .forBrowser('chrome')
                  .build();



Given("Eu estou logado com o usuário {string}", function(user){
    driver.get('http://localhost:3000/login').then(retorno=>{

    });
});


Given("Eu estou na página {string}", function(path){
    return "pending";
});

When("Eu vou para a página {string}", function(user, path) {
    //realizar ação descrita no When
    throw "nada criado ainda";
});

When("Eu clico para criar uma lista", function() {
    //realizar ação descrita no When
    throw "nada criado ainda";
});

When("Eu insiro o nome da lista {string}", function(listName) {
    //realizar ação descrita no When
    throw "nada criado ainda";
});

When("Eu clico para finalizar a criação da lista", function() {
    //realizar ação descrita no When
    throw "nada criado ainda";
});

When("Eu clico na lista {string}", function(listName) {
    //realizar ação descrita no When
    throw "nada criado ainda";
});

Then("O site mostra na tela a mensagem {string}", function(serverMsg) {
    //checar se os resultados do Then estão corretos
    throw "nada criado ainda";
});

Then("O site mostra uma tela para criação lista", function() {
    //checar se os resultados do Then estão corretos
    throw "nada criado ainda";
});

Then("O site mostra na tela as listas do usuário", function() {
    //checar se os resultados do Then estão corretos
    throw "nada criado ainda";
});

Then("O site mostra a lista {string}", function(listName) {
    //checar se os resultados do Then estão corretos
    throw "nada criado ainda";
});

