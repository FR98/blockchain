# blockchain
Ethereum Smart Contracts


```shell
mkdir example
cd exmaple
truffle init
```

- Enable network configuration on truffle-config.js
  - Use localhost, port and network_id from Ganache

- Create/Add Contract on contracts
- Create Migration for contract

- Despues de editar el contrato
```shell
truffle compile
```

- Ejecutar migrations
```shell
truffle migrate
```

- Ejecutar todas las migraciones
```shell
truffle migrate --reset
```

```shell
truffle console
```
- Example of consulting accounts
```js
let accounts = await web3.eth.getAccounts()
accounts
```

- Example of using a contract
```js
let storage = await Storage.deployed() // Get instance of my contract: Storage
storage.store(10)
storage.retrieve()
```

```shell
truffle test
```
