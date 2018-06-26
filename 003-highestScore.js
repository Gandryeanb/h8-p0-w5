function highestScore (students) {
  var kelasAcak = []
  var nilai = []
  
  for (var i = 0; i < students.length; i++) {
    kelasAcak.push(students[i].class)
    nilai.push(students[i].score)
  }

  nilai = nilai.sort(function(value1, value2) { return value1 > value2 })

  // kelas = [ 'foxes', 'wolves', 'foxes', 'wolves', 'tigers' ]
  // nilai = [ 71, 76, 80, 92, 100 ]
  
  //mencari jumlah dan ragam kelas
  function ragamKelas(arr) {
    var kelas = []
    var trigger = 0
    
    for (var i = 1; i < arr.length; i++) {
      if (kelas.length === 0) {
        kelas.push(arr[0])
      }
      for (var j = 0; j < kelas.length; j++) {
        if (arr[i] === kelas[j]) {
          trigger++
        }
      }
      if (trigger === 0) {
        kelas.push(arr[i])
      }
      trigger = 0
    }
    return kelas
  }
 
  var kelas = ragamKelas(kelasAcak)
  // [ 'foxes', 'wolves', 'tigers' ]

  //menyusun data siswa susai kelas
  function sesuaiKelas(arrKelas,arrNilai,students) {
    var res = []
    
    for (var i = 0; i < arrKelas.length; i++) {
      res.push([])
      for (var j = arrNilai.length; j >= 0; j--) {
        for (var k = 0; k < students.length; k++) {
          if (arrNilai[j] === students[k].score && arrKelas[i] === students[k].class) {
            res[res.length - 1].push({name:students[k].name,score:students[k].score})
          } 
        }
      }
    }
    return res
  }

  var kelasFix = sesuaiKelas(kelas,nilai,students)
  // [ [ { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 } ],
  //   [ { name: 'Alisa', score: 76 }, { name: 'Albert', score: 71 } ],
  //   [ { name: 'Viktor', score: 80 } ] ]

  function output(dataArr,kelasArr) {
    var res = {}

    for (var i = 0; i < kelas.length; i++) {
      res[kelasArr[i]] = dataArr[i][0]
    }
    return res
  }

  var res = output(kelasFix,kelas) 

  // console.log(kelasFix)
  // console.log(kelasAcak)
  // console.log(kelas)
  // console.log(nilai)
  return res
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// // {
// //   foxes: { name: 'Alexander', score: 100 },
// //   wolves: { name: 'Alisa', score: 76 },
// //   tigers: { name: 'Viktor', score: 80 }
// // }


// console.log(highestScore([])); //{}
