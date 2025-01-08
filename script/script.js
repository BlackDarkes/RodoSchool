// const validate = (hasAccess) =>{
//     if(hasAccess){
//         return () => console.log("Open")
//     }


//     return  () => console.log("Close")
// }

// const result = validate(false)

// result()

// const nums = {
//     name: "Danil",
//     1: "one",
//     '2': "two",
//     "3": "tree",
//     age: 18,
// }

// for (const num in nums){
//     console.log(nums[num])
// }

// console.log(nums)



// const calculator = {
//     read() {
//         this.a = +prompt()
//         this.b = +prompt()
//     },

//     sum() {
//         return this.a + this.b
//     },

//     mul() {
//         return this.a * this.b
//     }
// }

// calculator.read()
// console.log(calculator.sum())
// console.log(calculator.mul())



// const ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this
//     },
//     down() {
//       this.step--;
//       return this
//     },
//     showStep() { // показывает текущую ступеньку
//       console.log( this.step );
//       return this
//     }
//   };

//   ladder.up().up().down().showStep().down().showStep();



// const fromButton = document.getElementById("fromButton")
// const toButton = document.getElementById("toButton")

// fromButton.scrollIntoView("scroll")
// toButton.scrollIntoView()



// const price = 50
// console.log(price.toPrecision(5))



// const list = [1,2,3,4,5,-6,20]

// console.log(Math.max(...list))



// const arr = [
//     'Привет',
//     100,
//     true,
// ]

// arr[0] = 'Hello'
// console.log("arr:", arr)
// console.log("typeof arr:", typeof arr)
// delete arr[1]
// console.log(arr[1])



// const list = [1,2,3,4,5,6]

// console.log(Math.max(...list))


// const list = [4,5,]

// const [first, next, last = 56] = list 

// console.log(first, next, last)



// const letter = ['A', 'Б', 'В', 'Г', 'Д']

// letter.forEach((letter, index, array) => {
//     console.log(`Буква "${letter}" по интексу "${index}"`)
//     console.log("array:", array)
// })



// const users = [
//     {
//         name: "Daniil",
//         age: 18,
//         city: "Ekat"
//     },
//     {
//         name: "Mixail",
//         age: 30,
//         city: "Moscow"
//     },
//     {
//         name: "Ivan",
//         age: 40,
//         city: "Ekat"
//     },
//     {
//         name: "Vasy",
//         age: 50,
//         city: "Moscow"
//     },
// ]

// const filter = users.filter(({city, age}) => {
//     return city === "Ekat" || age < 45
// })

// console.log(filter)




// const users = [
//     {
//         name: "Daniil",
//         age: 18,
//         city: "Ekat"
//     },
//     {
//         name: "Mixail",
//         age: 30,
//         city: "Moscow"
//     },
//     {
//         name: "Ivan",
//         age: 40,
//         city: "Ekat"
//     },
//     {
//         name: "Vasy",
//         age: 50,
//         city: "Moscow"
//     },
// ]


// let ageSum = 0

// for (let i = 0; i < users.length; i++) {
//     ageSum += users[i].age
// }

// console.log(
//     "Midle age: ",
//     ageSum / users.length
// )


const user = {
    name: "Daniil",
    age: 18,
    city: "Ekaterinburg",
}

const userEntries = Object.entries(user)

const userEntriesFormatted = userEntries.map(([key, value]) => {
    return [key.toUpperCase(), `~~${value}~~`]
})

console.log(userEntriesFormatted)

const userFornatted = Object.fromEntries(userEntriesFormatted)

console.log(userFornatted)