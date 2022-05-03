const Storage = artifacts.require("Storage");

contract("Storage", async accounts => {
    it("should store correct num", async () => {
        const num = 10;
        const storage = await Storage.deployed();
        const stored = await storage.store(num);
        const retrieved = await storage.retrieve();

        assert.equal(retrieved, num);
    });
});
