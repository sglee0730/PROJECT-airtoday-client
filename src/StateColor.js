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
    if (data < 1.3) {
      return 'green'
    }
    else if (data < 2.7) {
      return '#ffe259'
    }
    else {
      return 'red'
    }
  }
  temp = (data) => {
    if (data < 6) {
      return 'cornflowerblue'
    }
    else if (data < 17) {
      return '#ffe259'
    }
    else if (data < 29) {
      return 'green'
    }
    else {
      return 'red'
    }
  }
  humi = (data) => {
    if (data < 31) {
      return '#ffe259'
    }
    else if (data < 71) {
      return 'green'
    }
    else {
      return '#ffe259'
    }
  }
}

module.exports = { getStateColor }