function graduates (students) {
  var res = {}
  var lulus = []

  //milih yg lulus
  for (var i = 0; i < students.length; i++) {
    if (students[i].score > 75) {
      lulus.push(students[i])
    }
  }

  //mencari jumlah kelas dan nama kelas
  
  var kelas = [[]]

  for (var i = 0; i < lulus.length; i++) {
    kelas[0].push(lulus[i].class)
  }
  kelas[0].sort()
  for (var i = 0; i < kelas[0].length; i++) {
    if (kelas.length === 1) {
      kelas.push(kelas[0][i])
    } else if (kelas[0][i] !== kelas[kelas.length -1]) {
      kelas.push(kelas[0][i])
    }
  }
  kelas.shift()

  //membuat output perkelas

  var output = []

  for (var i = 0; i < kelas.length; i++) {
    output.push([])
    for (var j = 0; j < lulus.length; j++) {
      if (lulus[j].class === kelas[i]) {
        delete lulus[j].class
        output[output.length - 1].push(lulus[j])
      }
    }
  }

  //memasukan output ke result

  for (var i = 0; i < kelas.length; i++) {
    res[kelas[i]] = output[i]
  }
  
  // console.log(lulus)
  // console.log(kelas)
  // console.log(output)
  return res
}

console.log(graduates([
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
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
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

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}
