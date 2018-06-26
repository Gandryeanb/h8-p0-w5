function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  
  var res = []
  var objRes = {
    penumpang:"",
    naikDari:"",
    tujuan:"",
    bayar:0
  }
  
  for (var i = 0; i < arrPenumpang.length; i++) {
    var jarak = []

    for (var k = 0; k < rute.length; k++) {
      if (arrPenumpang[i][1] === rute[k]) {
        jarak.push(k)
      }
      if (arrPenumpang[i][2] === rute[k]) {
        jarak.push(k)
      }
    }

    if (jarak[0] > jarak[1]) {
      jarak.push(jarak[0] - jarak[1])
    } else {
      jarak.push(jarak[1] - jarak[0])
    }
  
    objRes.penumpang = arrPenumpang[i][0]
    objRes.naikDari = arrPenumpang[i][1]
    objRes.tujuan = arrPenumpang[i][2]
    objRes.bayar = jarak[2] * 2000

    res.push(objRes)
    objRes = {
    penumpang:"",
    naikDari:"",
    tujuan:"",
    bayar:0
    } 
  }
  return res
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
