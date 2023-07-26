let casa = 1000;
let newChek=false;
let pos = [];
let tovar = [
    { id: 1, name: 'Beer', count: 100, price: 20 },
    { id: 2, name: 'Wine', count: 50, price: 100 },
    { id: 3, name: 'Pepsi', count: 80, price: 10 }
];

class chekPos {
    constructor(id, count) {
        this.id = id;
        this.count = count;
    }
    savePos() {
        pos.push(this);
    }
}

function getTovar(id) {
    for (const t of tovar)
        if (t.id == id) return t
}

function setTovar(id, count) {
    for (const t of tovar)
        if (t.id == id) t.count -= count
}

function infoTovar() {
    console.log('Залишок товарів:');
    for (const t of tovar)
        console.log(`${t.id} : ${t.name} ${t.count} шт. х ${t.price} грн `);
}

function printCasa() {
    console.log(`Грошей в касі: ${casa} грн.`);
}

function sell(id, count) {
    if(!newChek){console.log('ЧЕК НЕ ВІДКРИТО');return}
    let curPos = getTovar(id);
    if (curPos.count < count) { alert(`Недостатня к-ть товару ${curPos.name}, в наявності ${curPos.count} шт.`); return }
    let p = new chekPos(id, count);
    p.savePos();
    console.log(`${curPos.name} ${count} шт.*${curPos.price} грн.=${count * curPos.price} грн.`);
}

function openChek(){
    console.log('Продажа:');
    newChek=true;
}

function closeChek() {
    console.log('-----------------');
    let total = 0;
    let curPos;
    for (const a of pos) {
        curPos = getTovar(a.id);
        casa = casa + (a.count * curPos.price);
        total += a.count * curPos.price;
        setTovar(a.id, a.count);
    }
    pos = [];
    console.log(`Всього: ${total} грн.`);
    newChek=false;
}

export { sell, printCasa, openChek,closeChek, infoTovar };