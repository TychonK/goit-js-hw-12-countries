import './sass/main.scss';

import { alert, notice, info, success, error, defaultModules } from'@pnotify/core';

import "@pnotify/core/dist/PNotify.css";

import '@pnotify/core/dist/BrightTheme.css';

import fetchCountries from "./js/fetchCountries"

var debounce = require('lodash.debounce');

const searchInput = document.querySelector("#country-search")

function onInputSearch(e) {
    fetchCountries(searchInput.value)
        .then(r => r.json())
        .then(r => {
            if (r.length > 10) {
                alert({
                    text: "Specify your query man"
                })
            } else if ((r.length >= 2) && (r.length < 10)) {
                console.log(r)
            } else {
                console.log("final function")
            }
        })
}

searchInput.addEventListener("input", debounce(onInputSearch, 500))




