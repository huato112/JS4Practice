class Person {
    constructor(idCard, firstName){
        this._idCard = idCard;
        this._firstName = firstName;
    }
}

class BankAccount {
    constructor(accountId, Person, balance){
        this._accountId = accountId;
        this._accountOwners = [];
        this._accountOwners[0] = Person;
        this._balance = balance;
        this._accountOwnerCounting = 1;
    }
    
    addAccountOwner(Person) {
        this._accountOwners[this._accountOwnerCounting] = Person;
        this._accountOwnerCounting += 1;
    }

    transfer(money,BankAccount){
        this._balance -= money;
        BankAccount.balance += money;
    }

    addMoney(money){
        this._balance += money;
    }

    get balance(){
        return this._balance;
    }
    
    set balance(balance){
        return this._balance = balance;
    }
}

let amorn = new Person(1,'amornpong');
let amornn = new Person(2,'amornpongg');
let tus = new Person(3,'tus');

let bacc = new BankAccount(001,amorn,0);
let bacc2 = new BankAccount(002,tus,0);


bacc.addAccountOwner(amornn);
bacc.addMoney(50);

bacc.transfer(10,bacc2);

console.log(bacc);
console.log(bacc2);

