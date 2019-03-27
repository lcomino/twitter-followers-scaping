const users = () => document.querySelectorAll('.ProfileCard')

const jsonUsers = () => Array.prototype.reduce.call(users(), (acc, user) => {
  let obj = {}  
  let bgImage = user.children[0].style.backgroundImage
  let bg = bgImage ? bgImage.slice(4, -1).replace(/"/g, '') : ''
  bg = bg.replace('600x200', '1500x500')
  let src = user.children[1].children[0].children[0].src
  let profilePhoto = src ? src.replace('bigger', '400x400') : ''
  let content = user.children[1].children[2]
  let c = Array.prototype.map.call(content.children, (c) => c.innerText)
  obj.photo = profilePhoto
  obj.capa = bg
  obj.nome = c[0]
  obj.user = c[1]
  obj.bio = c[2]
  acc.push(obj)
  return acc
}, [])

console.log(JSON.stringify(jsonUsers()))
