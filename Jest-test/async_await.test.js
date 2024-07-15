function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello");
        }), 100;
    })
}

test('getData is "jest test"', async () => {
    await getData().then(data => {
        console.log(data)
        expect(data).toBe('jest test');
    })
});