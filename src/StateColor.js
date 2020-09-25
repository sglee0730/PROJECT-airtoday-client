class getStateColor {
    superFD =  (data) => {
        if (data < 15) {
            return '#00FF1A'
          }
          else if (data < 35) {
            return '#FBFA0B'
          }
          else if (data < 75) {
            return '#FF0000'
          }
          else {
            return '#9800FF'
          }
    }
    FD = (data) =>{
        if (data < 31) {
            return '#00FF1A'
          }
          else if (data < 81) {
            return '#FBFA0B'
          }
          else if (data < 151) {
            return '#FF0000'
          }
          else {
            return '#9800FF'
          }
    }
    noise = (data) => {
        if (data < 0.7) {
            return '#00FF1A'
          }
          else if (data < 1.4) {
            return '#FBFA0B'
          }
          else if (data < 2) {
            return '#FF0000'
          }
          else {
            return '#9800FF'
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

module.exports = {getStateColor}