const assert = request('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

//You need to change the provider depends on the network you want to access
const web3 = new Web3(ganache.provider());

class Car {
    park() {
        return 'stopped';
    }
    drive() {
        return 'vroom';
    }
}

describe('Car', () => {
    it('can park', () => {
        const car = new Car();
        assert.equal(car.park(), 'stopped');
    });
});

 