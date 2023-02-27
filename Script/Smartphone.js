let apiProduct = document.getElementById("apiProduct");
let dataArray = [];
let paginationData = [];
let categoryData = [];
let Page = 1;
let ApiUrl=`https://mockapi-nr5i.onrender.com/Smartphones`

fetch(`${ApiUrl}`)
  .then((request) => {
    return request.json();
  })
  .then((data) => {
    dataArray = data;
    paginationData=data
    display(data)
   
  });



function display(data) {
  apiProduct.innerHTML = "";
  let arr = [];
  data.forEach((element) => {
    let CardList = getCard(
      element.id,
      element.name,
      element.price,
      element.description,
      element.image
    );
    arr.push(CardList);
  });

  apiProduct.innerHTML = arr.join("");
}

function getCard(id, name, price, description, image) {
  let card = `
     <div class="Card" id=${id}>
     <img src=${image}>
     <h4>${name}</h4>
     <p>${description}</p>
     <h4> ₹${price}</h4>
     <div>
     <button class="AddToCart" value=${id}>Add to Cart</button>
     <button>Add to Wishlist</button>
     </div>
   

     </div>
    `;
  return card;
}



function getButton(text, id) {
  return `<button class="pagination-btn" data-page-Number=${id}>${text}</button>`;
}

let GO = document.querySelector(".GO");
let min = document.querySelector(".min");
  let max = document.querySelector(".max");
GO.addEventListener("click", function () {
  

  if (min && max) {
    let filterData = paginationData.filter((el) => {
      if (el.price >= +min.value && el.price <= +max.value) {
        return true;
      }
    });
    display(filterData);
  }
});

let product = document.querySelector(".titleproduct");

let Cable = document.getElementById("Cable&Cards");

Cable.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.category == Cable.value) {
        return true;
      }
    });
    display(filterData);
    product.innerText = Cable.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let Headpone = document.getElementById("Headphone");

Headpone.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.category == Headpone.value) {
        return true;
      }
    });
    if(filterData[0]==undefined){
      apiProduct.innerHTML=`<h2 style="text-align:center;">OOps!! ${Headpone.value} is not available</h2>`
      
    }else{
   display(filterData);
    }
    product.innerText = Headpone.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let Smartphones = document.getElementById("Smartphone");

Smartphones.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.category == Smartphones.value) {
        return true;
      }
    });
    display(filterData);
    product.innerText = Smartphones.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let Computer = document.getElementById("Computer");

Computer.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.category == Computer.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = Computer.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let Apple = document.getElementById("Apple");

Apple.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.name == Apple.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = Apple.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let Google = document.getElementById("Google");

Google.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.name == Google.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = Google.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let Nothing= document.getElementById("Nothing");

Nothing.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.name == Nothing.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = Nothing.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let Realme = document.getElementById("Realme");

Realme.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.name == Realme.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = Realme.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let Samsung=document.getElementById("Samsung")

Samsung.addEventListener("change", function () {
  if (this.checked) {
    let filterData = dataArray.filter((el) => {
      if (el.name == Samsung.value) {
        return true;
      }
    });
    display(filterData);

    product.innerText = Samsung.value;
  } else {
    display(paginationData);
    product.innerText = "Product";
  }
});

let asc = document.querySelector(".asc");

asc.addEventListener("click", function () {
  for (let i = 0; i < paginationData.length - 1; i++) {
    for (let j = 0; j < paginationData.length - i - 1; j++) {
      if (paginationData[j].price > paginationData[j + 1].price) {
        temp = paginationData[j];
        paginationData[j] = paginationData[j + 1];
        paginationData[j + 1] = temp;
      }
    }
  }
  display(paginationData);
});

let desc = document.querySelector(".desc");

desc.addEventListener("click", function () {
  for (let i = 0; i < paginationData.length - 1; i++) {
    for (let j = 0; j < paginationData.length - i - 1; j++) {
      if (paginationData[j].price < paginationData[j + 1].price) {
        temp = paginationData[j];
        paginationData[j] = paginationData[j + 1];
        paginationData[j + 1] = temp;
      }
    }
  }
  display(paginationData);
});

// ADD to cart functionality

let logedUser = JSON.parse(localStorage.getItem('loged-user')) || {}
let cartarr = JSON.parse(localStorage.getItem(`${logedUser.name}-cart`)) || [];
let cartCount = document.querySelector("#cart-count");
cartCount.textContent = cartarr.length

setTimeout(() => {
  let addToCart = document.querySelectorAll(".AddToCart");

  addToCart.forEach((Btn) => {
    Btn.addEventListener("click", () => {
      btnClicked(Btn);
    });
  });
}, 2000);

function btnClicked(Btn) {
  addToCart(Btn.value);
}

function addToCart(Btn) {
  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i].id == Btn && checkProduct(dataArray[i]) && checkUserLoging()) {
      cartarr.push({ ...dataArray[i], quantity: 1 });
      localStorage.setItem(`${logedUser.name}-cart`, JSON.stringify(cartarr));
      cartCount.textContent = cartarr.length
      alert("Product Added To The Cart");
      break;
    }
  }
}

function checkUserLoging(){
    if(logedUser.name){
      return true
    }else{
      alert("First Login on Website")
    }
}

function checkProduct(element) {
  for (let i = 0; i < cartarr.length; i++) {
    if (cartarr[i].id === element.id) {
      alert("Product Already Exist In The Cart");
      return false;
    }
  }
  return true;
}

let range=document.getElementById("volume")
let rangeMin=document.querySelector(".rangeMin")

range.addEventListener("change",function(){
  let filterData = dataArray.filter((el) => {
    if (el.price>=15000 && el.price<=range.value) {
      return true;
    }
  });
 
  display(filterData);

   rangeMin.innerText=`₹${range.value}`
  
})


// user login checked
let userInfo = document.querySelectorAll(".user-info");
let navBtns = document.querySelectorAll(".nav-btns");

let navbarBtns = document.querySelector("#navabar-btns")
console.log(navbarBtns)

let name = document.querySelector("#name")
let email = document.querySelector("#email")
let number = document.querySelector("#no")
let userName = document.querySelector("#user-name")

if(logedUser.name){
  userInfo.forEach((el)=>{
      el.style.display = "block"
  })
  navBtns.forEach((el)=>{
      el.style.display = "none"
  })
 name.textContent = logedUser.name
 userName.textContent = `Hi, ${logedUser.name.substr(0,6)}`
 email.textContent = logedUser.email
 number.textContent = logedUser.phone
 navbarBtns.style.marginLeft = "32%"
}else{
  navbarBtns.style.marginLeft = "43%"
}


// logout out 

let logout = document.querySelector("#logout")

logout.addEventListener("click",()=>{
    localStorage.removeItem('loged-user');
    location.reload()
})

// user info box
let userInfoBtn = document.querySelector("#dropdownMenuUser")
let userDiv = document.querySelector("#user-div")
let btnClose = document.querySelector("#btn-close")

userInfoBtn.addEventListener("click",()=>{
    userDiv.style.display = "block"
    
})
btnClose.addEventListener("click",()=>{
    userDiv.style.display = "none"
})



function loginUser(){
  let login = false;
  let login_form = document.querySelector("#log-in")
  let login_modal= document.querySelector("#login-modal")
  login_modal.setAttribute("data-bs-dismiss",'modal')
  login_form.addEventListener('submit',(e)=>{
       e.preventDefault();
       let email = login_form.loginEmail.value;
       let password = login_form.loginPassword.value;
       for(let i=0;i<usersData.length;i++){
          if(usersData[i].email == email && usersData[i].password == password){
              logedUser = usersData[i];
              localStorage.setItem('loged-user',JSON.stringify(logedUser))
              login = true
              break;
          }
       }
       if(login){
          alert("Successs");
          userInfo.forEach((el)=>{
              el.style.display = "block"
          })
          navBtns.forEach((el)=>{
              el.style.display = "none"
          })
          location.reload()
      }else{
          alert("wrong credential")
      }
     
  })

}

loginUser()

getUserData()

function getUserData(){
    let signin_form = document.querySelector("#sign-in");
    signin_form.addEventListener("submit",(e)=>{
        e.preventDefault()
        let formData = {
            name : signin_form.name.value,
            email : signin_form.email.value,
            phone : signin_form.number.value,
            password : signin_form.password.value,
        }
        usersData.push(formData)
        localStorage.setItem("users",JSON.stringify(usersData));
        console.log(formData)
        let signin = document.querySelector("#signin-modal")
        signin.setAttribute("data-bs-dismiss",'modal')
        alert("Account Created");
    })
    

}