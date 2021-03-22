import tmp from '../templates/profile.tmp'

import getHtmlFromTml from '../utils/getHtmlFromTml';

const formProfile = document.getElementsByClassName('profilePage')[0];
let dataObj = JSON.parse(localStorage.getItem("authorizationData"))
formProfile.appendChild(getHtmlFromTml(tmp, dataObj));