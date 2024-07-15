function getData(fn) {
    setTimeout(() => {
        fn("Hello");
    }), 100;
}

test('getData is "jest test"', (done) => {
    function callback(data) {
        console.log(data)
        expect(data).toBe('jest test');
        done;
    }
    getData(callback);
});