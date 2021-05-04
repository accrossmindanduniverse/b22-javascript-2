const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  if (nilaiAwal > nilaiAkhir) {
    console.log('Nilai akhir harus lebih besar dari nilai awal')
  }
  const found = dataArray.filter(data => data < 6)
  const sort = found.sort()
  
  if (dataArray.length < 5) {
    console.log('Jumlah angka dalam dataArray harus lebih dari 5')
  }
  return sort
}
console.log(seleksiNilai(3, 9, [3, 4, 12, 8, 1, 6, 7, 9, 5]))

