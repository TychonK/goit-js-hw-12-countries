import './sass/main.scss';

import { alert, notice, info, success, error, defaultModules } from'@pnotify/core';

import "@pnotify/core/dist/PNotify.css";

import '@pnotify/core/dist/BrightTheme.css';

import fetchCountries from "./js/fetchCountries"

var debounce = require('lodash.debounce');

const searchInput = document.querySelector("#country-search")
const list = document.querySelector("#country-list")

function onInputSearch(e) {
    fetchCountries(searchInput.value)
        .then(r => r.json())
        .then(data => {
            if (data.length > 10) {
                alert({
                    text: "Specify your query man"
                })
            } else if ((data.length >= 2) && (data.length < 10)) {
                
                if (list.hasChildNodes()) {
                    list.innerHTML = ''
                }

                data.map(function (currentValue, index) {
                    function createElement() {
                        var li = document.createElement("li")
                        li.textContent = currentValue.name;
                        return li;
                    }
                    list.appendChild(createElement())
                })
            } else if (data.length = 1) {
                console.log("final function")
                if (list.hasChildNodes()) {
                    list.innerHTML = ''
                }
            }
        })
}

searchInput.addEventListener("input", debounce(onInputSearch, 500))




