import { Vacancy } from "../types"

const salaryFormater = (vacancy: Vacancy):string => {
    let salary = `з/п `;

    if(vacancy.payment) {
        salary += `${vacancy.payment}`;
    }else if (vacancy.payment_from && vacancy.payment_to) {
        salary += `${vacancy.payment_from} - ${vacancy.payment_to} ${vacancy.currency}`;
    } else if(vacancy.payment_from) {
        salary += ` от ${vacancy.payment_from} ${vacancy.currency}`;
    } else if(vacancy.payment_to) {
        salary += ` до ${vacancy.payment_to} ${vacancy.currency}`;
    } else {
        salary +=`не указана`;
    }

    return salary;
}

export default salaryFormater;