const products = [
    {
        id: 1,
        name: "Floral Summer Shirt",
        src: "products/f1.jpg",
        desc: "",
        price: 220,
        tags: ["new", "blue", "summer"]
    },

    {
        id: 2,
        name: "Summer Green",
        src: "products/f2.jpg",
        desc: "",
        price: 260,
        tags: ["new", "green", "beach"]
    },

    {
        id: 3,
        name: "Party Floral Shirt",
        src: "products/f3.jpg",
        desc: "",
        price: 399,
        tags: ["old", "red", "party"]
    },

    {
        id: 4,
        name: "Floral Summer Shirt",
        src: "products/f4.jpg",
        desc: "",
        price: 399,
        tags: ["old", "white", "beach"]
    },
    {
        id: 5,
        name: "Beach Shirt",
        src: "products/f5.jpg",
        desc: "",
        price: 579,
        tags: ["old", "white", "beach"]
    }
    ,
    {
        id: 6,
        name: "Shirt Party Red",
        src: "products/f6.jpg",
        desc: "",
        price: 579,
        tags: ["old", "red", "party"]
    },

    {
        id: 7,
        name: "Party Floral Shirt",
        src: "products/f3.jpg",
        desc: "",
        price: 399,
        tags: ["old", "red", "party"]
    },
    {
        id: 8,
        name: "Shirt Party Red",
        src: "products/f6.jpg",
        desc: "",
        price: 579,
        tags: ["old", "red", "party"]
    },
    {
        id: 9,
        name: "Floral Summer Shirt",
        src: "products/f1.jpg",
        desc: "",
        price: 220,
        tags: ["new", "blue", "summer"]
    },


]

var popup = document.querySelector(".popup")
var popclose = document.getElementById("pop-close")
popclose.addEventListener("click", function () {
    popup.style.display = "none"
    event.preventDefault()
})

// Sidebar navigation
var menuicon = document.getElementById("menu-icon")
var sidenavbar = document.querySelector(".sidebar-nav")
var navclose = document.getElementById("navclose")
menuicon.addEventListener("click", function () {
    sidenavbar.style.marginLeft = "0px"
    event.preventDefault()
})

document.getElementById("navclose").addEventListener("click", () => {
    document.querySelector(".sidebar-nav").style.marginLeft = "-60%"
    event.preventDefault()
})


var container = document.querySelector(".products")
products.forEach((product) => {
    var createItem = document.createElement("div")
    createItem.classList.add("product")
    createItem.innerHTML = ` <img src="img/${product.src}">
    <h1>${product.name}</h1>
    <p>₹${product.price}</p>
    <tags style="visibility:hidden;">${product.tags}</tags>`

    container.append(createItem)
})

// filter
var filterList = []
var tags = document.getElementsByName("tags")


tags.forEach((tag) => {
    tag.addEventListener("change", (e) => {

        if (e.target.checked) {
            filterList.push(e.target.value)
           
            update()

        }
        else {
            filterList = filterList.filter(item => item !== e.target.value);
            update()

        }



    })
})

// var searchInput = document.getElementById("searchInput")
// searchInput.addEventListener("keyup",function(){
//     update()
// })

function update() {






    var productList = document.querySelectorAll(".product")
    for (var i = 0; i < productList.length; i++) {
        var check = false
        var product = productList[i]

        var temp = product.querySelector("tags").innerHTML

        console.log("elemen" + temp)


        const tempFilterArray = temp.split(',');



        filterList.forEach((j) => {
            tempFilterArray.forEach((i) => {
                if (j == i) {
                    check = true
                }
            })
        })


        if (!check && filterList.length > 0) {
            product.style.display = "none"
        }
        else {
            product.style.display = "none"
        }


    };


}


