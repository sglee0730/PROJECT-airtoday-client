class getStateColor {
  superFD = (data) => {
    if (data < 15) {
      return 'green'
    }
    else if (data < 35) {
      return '#ffe259'
    }
    else if (data < 75) {
      return 'red'
    }
    else {
      return '#9B0000'
    }
  }
  FD = (data) => {
    if (data < 31) {
      return 'green'
    }
    else if (data < 81) {
      return '#ffe259'
    }
    else if (data < 151) {
      return 'red'
    }
    else {
      return '#9B0000'
    }
  }
  noise = (data) => {
    if (data < 0.7) {
      return 'green'
    }
    else if (data < 1.4) {
      return '#ffe259'
    }
    else if (data < 2) {
      return 'red'
    }
    else {
      return '#9B0000'
    }
  }
  temp = (data) => {
    if (data < 6) {
      return '#0089FF'
    }
    else if (data < 17) {
      return '#FF9D08'
    }
    else if (data < 29) {
      return '#00FF1A'
    }
    else {
      return '#FFFB00'
    }
  }
  humi = (data) => {
    if (data < 31) {
      return '#00DAFF'
    }
    else if (data < 71) {
      return '#00FF1A'
    }
    else {
      return '#FF5500'
    }
  }
}

module.exports = { getStateColor }