//const { test, expect } = require("@jest/globals")

//const { expect } = require("@jest/globals")
//const { test, expect } = require("@jest/globals")

const { expect } = require("@jest/globals")
let app = require("./app.js")

test("should equal 4 when passed 2 add 2", () => {
    expect(app.add(2,2)).not.toBe(6) //matcher function .toBe(4)
})



test("should contain Stuart", () => {
    expect(app.myArray).toContain("Stuart")
})



test("to make sure what is returned is not zero", () => {
    expect(app.notZero(2,2)).not.toBe(0) //matcher function .not.toBe
})


test("should return an array with only words longer than 6 characters", () => {
    let testArray = ["spray", "limit", "elite", "destruction", "function"]

    expect(app.moreThanSix(testArray)).toEqual(expect.arrayContaining(["destruction"]))
})

test('should not contain sancho', ()=> {
    let testArray = ['fernandes', 'sancho', 'varane']
    expect(app.moreThanSix(testArray)).not.toContain('sancho')
    })


test("a value that is truthy", () => {
    expect(app.truthy)
})