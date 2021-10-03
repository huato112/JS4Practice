class MoneyExchanger {
    constructor(yourMoney) {
        this._yourMoney = yourMoney;
    }
    get yourMoney() { return `Your Money = ${this._yourMoney}` }

    foreignUnits = [
        { exchangeRate: 0.029, foreignUnits: 'dollars' }, { exchangeRate: 35.12, foreignUnits: 'won' },
        { exchangeRate: 45.53, foreignUnits: 'pounds' }
    ]

    exchanger(to) {
        // for (let a of this.foreignUnits) {
        //     if (to == a.foreignUnits) {
        //         let result = this._yourMoney * a.exchangeRate
        //         return result;
        //     }
        // }

        // let result = []
        // this.foreignUnits.forEach((value) => {
        //     if (to == value.foreignUnits)
        //         result = [this._yourMoney * value.exchangeRate, value.foreignUnits]
        // })
        // return result;

        let result = this.foreignUnits.find((value) => to == value.foreignUnits)
        return [this._yourMoney * result.exchangeRate, result.foreignUnits]
    }
}

let p1 = new MoneyExchanger(1000);
console.log(`Your money is ${p1.exchanger("dollars")[0]} ${p1.exchanger("dollars")[1]}`);
console.log(`Your money is ${p1.exchanger("won")[0]} ${p1.exchanger("won")[1]}`);
console.log(`Your money is ${p1.exchanger("pounds")[0]} ${p1.exchanger("pounds")[1]}`);