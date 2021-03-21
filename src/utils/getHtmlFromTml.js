/**
 * Принимает шаблон разметки и данные для его заполнения
 * 
 * @param {string} temp - шаблон html в виде строки
 * @param {object} objData - объект с данными
 * @returns html разметка
 */

function getHtmlFromTml(temp, objData = undefined) {
    let template = Handlebars.compile(temp);
    let html = template(objData);
    let content = new DOMParser().parseFromString(html, "text/html").body.childNodes[0];

    return content;
}

module.exports = getHtmlFromTml;