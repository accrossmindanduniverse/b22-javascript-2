//1.

//a. Array.sort()
const arr = [1, 7, 2, 3]
const sort = arr.sort()
console.log(sort)

//b. Array.filter()
const arr2 = [3, 9, 5, 12, 4, 2, 1]
const filter = arr2.filter(array => array < 5)
console.log(filter)

//c. Array.join()
const arr3 = [2, 3, 1, 8, 2, 9]
console.log(arr3.join(', '))


//d. String.concat()
const str1 = 'Hey'
const str2 = 'You'
console.log(str1.concat(' ', str2))

//e. String.replace()
const text1 = 'Kucing di kota ini sudah tidak suka tikus'
console.log(text1.replace('tikus', 'anjing'))

//f.String.indexOf()
const text2 = 'Kalau sore tiba burung-burung kembali ke sarang'
const search = 'sarang'
const indexOf = text2.indexOf(search)
console.log(`Jumlah karakter dari awal hingga akhir berjumlah ${indexOf}`)

//g. Date.getDate()
const birthday = new Date ('January 6, 1944')
const date = birthday.getDate()
console.log(date)

//h. Date.getFullYear()
const birthday2 = new Date ('January 6, 1944')
const date2 = birthday.getFullYear()
console.log(date2)

//i. Date.getMonth()
const eidFitri2021 = new Date ('May 13, 2021')
const getDate = eidFitri2021.getMonth()
console.log(getDate)

//j. String.split()
const string = 'Harimau adalah hewan langka'
const words = string.split(' ')
console.log(words[2])


//2.

const name = 
[
'Abigail','Alexandra','Alison',
'Amanda', 'Angela', 'Bella',
'Carol', 'Caroline', 'Carolyn',
'Deirdre', 'Diana', 'Elizabeth',
'Ella', 'Faith', 'Olivia', 'Penelope'
]
const searchName = (nama, limit, callback) => {
  const searchResult = []
  name.filter((data) => {
    if (data.toLowerCase().match(nama.toLowerCase())) {
      searchResult.push(data)
    }
  })
  return callback(searchResult.slice(0, limit))
}

const main = () => {
  const handleCallback = (data) => {
    console.log(data)
  }
  searchName('an', 3, handleCallback)
}
main()
