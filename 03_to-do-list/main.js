// TO DO
window.addEventListener('DOMContentLoaded', function(){
  let listItem = document.querySelectorAll('li')
  let spanItem = document.getElementsByClassName('close')
  let list = document.querySelector('ul')

    // for (let i = 0; i < listItem.length; i++) {
    //   listItem[i].addEventListener('click', function(){
    //     listItem[i].classList.toggle('checked')
    //   }) 
    // }

    listItem.forEach(
      item =>item.addEventListener('click', function(){
        item.classList.toggle('checked')
      })
    )

    for (let i = 0; i < spanItem.length; i++) {
      spanItem[i].addEventListener('click', function(){
        listItem[i].remove()
      }) 
    } 
  

  document.getElementById('addBtn').addEventListener('click', function(){
    // let listfirst = document.querySelector('li')
    // var newList = document.importNode(listfirst.content, true)
    const newListItem = document.createElement('li')
    const newSpan = document.createElement('span')
    newSpan.classList.add('close')
    newSpan.textContent = "x"
    newListItem.textContent = document.getElementById('input').value
    newListItem.appendChild(newSpan)
    document.querySelector('ul').appendChild(newListItem)

    newListItem.addEventListener('click', function(){
      newListItem.classList.toggle('checked')
    }) 
    newSpan.addEventListener('click', function(){
      newListItem.remove()
    })
  })


  let circle = document.querySelector('li')
  let target = document.querySelectorAll('li')[1]
  let target3 = document.querySelectorAll('li')[1]

  listItem.forEach(
    item => item.setAttribute('draggable', true),
    // item => item.addEventListener('dragenter', function(e){
    //   e.target.insertAdjacentElement('afterend', item)
    // })
  )

  
  circle.addEventListener('drag', function(e){
    // e.dataTransfer.setData('text/plain', index)
    // console.log(e.screenX)
  })

  listItem.forEach(
    item => item.addEventListener('dragenter', function(e){
      // console.log('dragenter target')
      if (e.screenY < item.screenY) {
        item.insertAdjacentElement('afterend', circle)
      } else {
        item.insertAdjacentElement('beforebegin', circle)
      }
    })
  )

  // target.addEventListener('dragenter', function(e){
  //   console.log('dragenter target')
  //   target.insertAdjacentElement('afterend', circle)
  // })

  // target3.addEventListener('dragenter', function(){
  //   console.log('dragenter target')
    
  //   target3.insertAdjacentElement('afterend', circle)
  // })

})

