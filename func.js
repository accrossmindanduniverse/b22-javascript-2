
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
