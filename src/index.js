import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider, addLocaleData} from 'react-intl';
import esLocaleData from 'react-intl/locale-data/es';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobsList";

addLocaleData(esLocaleData);
var userLang = navigator.language ||  navigator.userLanguage;

function getLocale(){
	return userLang === 'es-ES' ? localeEsMessages : localeEnMessages;
}

ReactDOM.render(
	<IntlProvider locale="es-ES" messages= {localeEsMessages}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);
