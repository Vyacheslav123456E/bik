import services from '../services/index.js';

const url = 'http://www.cbr.ru/s/newbik';

class BikController {
    getBik(reg, res) {
        services.fetchData(url)
            .then(data => {
                //console.log(data)
                res.json(data)
             //   console.log('Данные:', data);
                // Здесь можно выполнить запись в БД
            })
            .catch(error => {
                console.error('Ошибка при выполнении операции:', error);
            });
    }
}
export default  new BikController();