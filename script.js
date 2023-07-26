console.log('-----------------------1---------------------------');
function sum() {
    let cou = 0;
    return function plus(num) {
        cou = cou + num;
        console.log(cou);
    }
}
let add = sum();
add(3)
add(5)
add(228)
console.log('-----------------------2---------------------------');
/**----------------------------------------- */
import * as shop from './shop.js';

shop.printCasa();
shop.infoTovar();
shop.openChek();
shop.sell(1,12);
shop.sell(2,4);
shop.sell(3,8);
shop.closeChek();
shop.printCasa();
shop.infoTovar();

shop.openChek();
shop.sell(1,12);
shop.sell(2,4);
shop.sell(3,8);
shop.closeChek();
shop.printCasa();
shop.infoTovar();