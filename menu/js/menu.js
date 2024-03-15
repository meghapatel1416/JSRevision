const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./img/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./img/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./img/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./img/item-10.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./img/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./img/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./img/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./img/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./img/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "./img/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  
  let a = "all";
  let carts = [];

  const display = (data)=>{
    let display = data.map((v,index)=>{
      return `   <article class="menu-item">
      <img src="${v.img}" alt="menu item" class="photo" />
      <div class="item-info">
        <header>
          <h4>${v.title}</h4>
          <h4 class="price">${v.price}</h4>
        </header>
        <p class="item-text">
        ${v.desc}
        </p>
        <button type="button" class="filter-btn" onClick="addToCart(${index})" >add to cart</button>
      </div>
    </article>`

    })
    document.getElementById("menu").innerHTML = display.join("");

   
    const c = menu.reduce((pre,v)=>{
   if (pre.includes(v.category)== false){
    pre.push(v.category);
   }
   return pre;
    },[]);

    c.unshift(a);
    
  
   
    

    let button = c.map((value)=>{
      return `
      <button type="button" class="filter-btn" data-id="all" onclick="filterData('${value}')">${value}</button>`

    })
    document.getElementById("btn").innerHTML = button.join("");

  }
  display(menu);

  function filterData(category)
  {
    let filterData= menu.filter(function(value){
  
      return value.category == category || category == a;
    });
  
    display(filterData);
    console.log(filterData);
  };

function manageSort(sorttype)
{
  menu.sort(function(a,b){

  if(sorttype == "priceA")
  {
    return a.price - b.price
  }

  else if(sorttype == "priceD")
  {
    return b.price - a.price;
  }
  else if(sorttype == "nameA")
  {
      if(a.title > b.title)
      {
        return 1
      }
      else
      {
        return -1
      }
  }
  else if(sorttype == "nameZ")
  {
    if(b.title > a.title)
    {
      return 1
    }
    else
    {
      return -1
    }
  }
   
   })

   display(menu);

};

const addToCart = (index) => {
  let selectedItem = menu[index];

  let exit = carts.find((v)=>{
    return v.id == selectedItem.id;
  }) ;

  if (exit == undefined){
    selectedItem.qty = 1;
    carts.push(selectedItem);
  }

  console.log(carts);

}




