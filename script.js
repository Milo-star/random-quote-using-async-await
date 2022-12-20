const btn = document.getElementById('btn')
const quote = document.getElementById('qte')
const author = document.getElementById('author')
const image = document.getElementById('image')

btn.addEventListener('click', function () {

  const reqListener = response => {
    const temp = JSON.parse(response.currentTarget.response)

    quote.innerHTML = temp.quote
    author.textContent = temp.author
    image.src = temp.photo
  }

  const loadData = () => {
    const req = new XMLHttpRequest()
    req.onload = reqListener
    req.open('get', 'https://thatsthespir.it/api')
    req.send()
  }

  window.onload = () => {
    btn.onclick = loadData
  }
  loadData()
})
