const ok=document.querySelector('.okk')
const p=document.getElementById('inputproduit')
const sup=document.getElementById('sup')
const info=document.querySelector('.info')


let produits=[]

function afficherproduit(){
    let list=document.querySelector('.list')
    list.innerHTML=``
    produits.forEach((produit,index) => {
         let li =document.createElement('div')
        let label=document.createElement('label')
        
         let input=document.createElement('input')
        input.type='checkbox'
        input.id='sup'+index

        li.appendChild(input)
        li.appendChild(label)

      
    label.appendChild(document.createTextNode(produit))
    list.appendChild(li)
    
    })
}

function supprimerproduit() {
    for (let i = produits.length - 1; i >= 0; i--) {
        let input= document.getElementById('sup'+i);
        if (input && input.checked) {
            console.log('b')
            produits.splice(i, 1);
        }
    }
    afficherproduit();
}


ok.addEventListener('click',(e)=>{
    e.preventDefault()
    let produit=p.value
    if(produit){
        produits.push(produit) 
        afficherproduit()
        p.value=''
    }
   
})

sup.addEventListener('click',(e)=>{
    e.preventDefault()
    confirm('vous voulez supprimer ce produit')
    supprimerproduit()
})
