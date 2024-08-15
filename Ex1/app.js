"use strict"

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials = userNames.map(function(name) {
    return name.split(' ').map(word => word[0]).join('.');
}
);
initials.sort();

console.log(initials); // ["Г.П.А.", "П.О.І.", "Р.А.О."]



