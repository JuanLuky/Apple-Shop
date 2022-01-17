const modal = document.querySelectorAll('.card-apple');
const span = document.getElementsByClassName("close")[0];
const modalFundo = document.getElementById("myModal");
const modalContent = document.querySelector('.modal-content');
const iphones = document.querySelector('.iphone-modal');
const modelosCell = document.querySelector('.modelos')

const modelos = ['iPhone 11', 'iPhone 11 Pro', 'iPhone 11 Pro Max','iPhone 12','iPhone 12 Pro','iPhone 12 Pro Max','iPhone 13 Mini','iPhone 13 Pro','iPhone 13 Pro Max'];

span.onclick = function() {
    modalFundo.style.display = "none";
}

modalFundo.onclick = function(event) {
  if (event.target == modalFundo) {
    modalFundo.style.display = "none";
  }
}


for (let i = 0; i < modal.length; i++) {
    modal[5].onclick = () => {
        modalFundo.style.display = "flex";
        modalContent.classList.add("mostrar")
        iphones.setAttribute('src', 'assets/img/apple/11.png');
        modelosCell.innerHTML = modelos[0]
    }
}
for (let i = 0; i < modal.length; i++) {
    modal[6].onclick = () => {
        modalFundo.style.display = "flex";
        modalContent.classList.add("mostrar")
        iphones.setAttribute('src', 'assets/img/apple/11-pro-rose.png');
        modelosCell.innerHTML = modelos[1]
    }
}
for (let i = 0; i < modal.length; i++) {
    modal[7].onclick = () => {
        modalFundo.style.display = "flex";
        modalContent.classList.add("mostrar")
        iphones.setAttribute('src', 'assets/img/apple/11pro.png');
        modelosCell.innerHTML = modelos[2]
        
    }
}
for (let i = 0; i < modal.length; i++) {
    modal[8].onclick = () => {
        modalFundo.style.display = "flex";
        modalContent.classList.add("mostrar")
        iphones.setAttribute('src', 'assets/img/apple/12ver.png');
        modelosCell.innerHTML = modelos[3]

    }
}
for (let i = 0; i < modal.length; i++) {
    modal[9].onclick = () => {
        modalFundo.style.display = "flex";
        modalContent.classList.add("mostrar")
        iphones.setAttribute('src', 'assets/img/apple/12-pro.png');
        modelosCell.innerHTML = modelos[4]

    }
}
for (let i = 0; i < modal.length; i++) {
    modal[10].onclick = () => {
        modalFundo.style.display = "flex";
        modalContent.classList.add("mostrar")
        iphones.setAttribute('src', 'assets/img/apple/12-pro-max.png');
        modelosCell.innerHTML = modelos[5]

    }
}
for (let i = 0; i < modal.length; i++) {
    modal[11].onclick = () => {
        modalFundo.style.display = "flex";
        modalContent.classList.add("mostrar")
        iphones.setAttribute('src', 'assets/img/apple/13mini.png');
        modelosCell.innerHTML = modelos[6]

    }
}
for (let i = 0; i < modal.length; i++) {
    modal[12].onclick = () => {
        modalFundo.style.display = "flex";
        modalContent.classList.add("mostrar")
        iphones.setAttribute('src', 'assets/img/apple/13white.png');
        modelosCell.innerHTML = modelos[7]

    }
}
for (let i = 0; i < modal.length; i++) {
    modal[13].onclick = () => {
        modalFundo.style.display = "flex";
        modalContent.classList.add("mostrar")
        iphones.setAttribute('src', 'assets/img/apple/13promax.png');
        modelosCell.innerHTML = modelos[8]

    }
}
for (let i = 0; i < modal.length; i++) {
    modal[14].onclick = () => {
        modalFundo.style.display = "flex";
        modalContent.classList.add("mostrar")
        iphones.setAttribute('src', 'assets/img/apple/11.png');
        modelosCell.innerHTML = modelos[0]

    }
}
for (let i = 0; i < modal.length; i++) {
    modal[15].onclick = () => {
        modalFundo.style.display = "flex";
        modalContent.classList.add("mostrar")
        iphones.setAttribute('src', 'assets/img/apple/11-pro-rose.png');
        modelosCell.innerHTML = modelos[1]

    }
}
for (let i = 0; i < modal.length; i++) {
    modal[16].onclick = () => {
        modalFundo.style.display = "flex";
        modalContent.classList.add("mostrar")
        iphones.setAttribute('src', 'assets/img/apple/11pro.png');
        modelosCell.innerHTML = modelos[2]
    }
}