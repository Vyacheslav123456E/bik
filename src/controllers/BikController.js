import services from '../services/index.js';

const url = 'http://www.cbr.ru/s/newbik';

class BikController {
    getBik(reg, res) {
        services.fetchData(url)
            .then(data => {
                res.json(data)
                // Здесь можно выполнить запись в БД
            })
            .catch(error => {
                console.error('Ошибка при выполнении операции:', error);
            });
    }
}
export default  new BikController();