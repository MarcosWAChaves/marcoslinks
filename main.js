let state = false

function expand() {
  if (state == false) {
    document.getElementById('items').style.transform = 'scaleY(1)'
    state = true
  } else {
    document.getElementById('items').style.transform = 'scaleY(0)'
    state = false
  }
}