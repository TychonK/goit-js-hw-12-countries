import './sass/main.scss';

import { alert, notice, info, success, error, defaultModules } from'@pnotify/core';

import "@pnotify/core/dist/PNotify.css";

import '@pnotify/core/dist/BrightTheme.css';

import fetchCountries from "./js/fetchCountries"

import cardTemplate from "./templates/card.hbs"

var debounce = require('lodash.debounce');

const searchInput = document.querySelector("#country-search")
const list = document.querySelector("#country-list")
const cardBox = document.querySelector("#card-wrapper")


function onInputSearch(e) {

    fetchCountries(searchInput.value)
        
        .then(data => {

            if (data.length > 10) {
                
                checkIfFilled()

                alert({
                    text: "Specify your query man"
                })

            } else if ((data.length >= 2) && (data.length <= 10)) {
                
                checkIfFilled()

                appendCountryList(data)
                
            } else if (data.length = 1) {

                checkIfFilled()

                const markup = cardTemplate(data[0]);
                cardBox.innerHTML = markup;
                
            }

        })
        .catch(err => {
            error({ text: err })
            checkIfFilled()
        })
}

searchInput.addEventListener("input", debounce(onInputSearch, 500))



function checkIfFilled() {
    if (list.hasChildNodes()) {
                    list.innerHTML = ''
                } else if (cardBox.hasChildNodes()) {
                    cardBox.innerHTML = ''
                }
}

function appendCountryList(data) {
    data.map(function (currentValue, index) {
                    function createElement(data) {
                        var li = document.createElement("li")
                        li.textContent = currentValue.name;
                        return li;
                    }
                    list.appendChild(createElement())
                })
}




