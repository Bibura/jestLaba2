const some = require('./args_check');

const mockFun = jest.fn(x => "Yaroslav", y => "Trotskyi");

test('Mock test', () => {
    some.someAction("Yaroslav", "Trotskyi", mockFun);
    expect(mockFun.mock.calls[0][0]).toEqual("Yaroslav");
    expect(mockFun.mock.calls[0][1]).toEqual("Trotskyi");
});
test('Mock test FAILED', () => {
    some.someAction("Yaroslav", "Trotskyi", mockFun);
    expect(mockFun.mock.calls[0][0]).not.toEqual("Dima");
    expect(mockFun.mock.calls[0][1]).not.toEqual("Koval");
});

test('test callbacks', () => {
    expect(some.someAction("Yaroslav", "Trotskyi", some.calc)).toEqual("Yaroslav Trotskyi");
});