async function getCock1(){
    const api_url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const response = await fetch(api_url);
    const data = await response.json();
    document.getElementById("daydrink1img1").src = data.drinks[0]["strDrinkThumb"];
    document.getElementById("daydrink1img2").src = data.drinks[0]["strDrinkThumb"];
    document.getElementById("daydrink1d1").innerText = data.drinks[0]["strAlcoholic"];
    document.getElementById("daydrink1f").innerText = data.drinks[0]["strDrink"]; 
    document.getElementById("daydrink1d2").innerText = data.drinks[0]["strGlass"];
    document.getElementById("daydrink1d3").innerText = data.drinks[0]["strCategory"];
    document.getElementById("daydrink1d4").innerText = data.drinks[0]["idDrink"];
}
  async function getCock2(){
    const api_url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const response = await fetch(api_url);
    const data = await response.json();
    document.getElementById("daydrink2img1").src = data.drinks[0]["strDrinkThumb"];
    document.getElementById("daydrink2img2").src = data.drinks[0]["strDrinkThumb"];
    document.getElementById("daydrink2d1").innerText = data.drinks[0]["strAlcoholic"];
    document.getElementById("daydrink2f").innerText = data.drinks[0]["strDrink"]; 
    document.getElementById("daydrink2d2").innerText = data.drinks[0]["strGlass"];
    document.getElementById("daydrink2d3").innerText = data.drinks[0]["strCategory"];
    document.getElementById("daydrink2d4").innerText = data.drinks[0]["idDrink"];
  }
  async function getCock3(){
    const api_url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const response = await fetch(api_url);
    const data = await response.json();
    document.getElementById("daydrink3img1").src = data.drinks[0]["strDrinkThumb"];
    document.getElementById("daydrink3img2").src = data.drinks[0]["strDrinkThumb"];
    document.getElementById("daydrink3d1").innerText = data.drinks[0]["strAlcoholic"];
    document.getElementById("daydrink3f").innerText = data.drinks[0]["strDrink"]; 
    document.getElementById("daydrink3d2").innerText = data.drinks[0]["strGlass"];
    document.getElementById("daydrink3d3").innerText = data.drinks[0]["strCategory"];
    document.getElementById("daydrink3d4").innerText = data.drinks[0]["idDrink"];
  }
  async function getCock4(){
    const api_url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const response = await fetch(api_url);
    const data = await response.json();
    document.getElementById("daydrink4img1").src = data.drinks[0]["strDrinkThumb"];
    document.getElementById("daydrink4img2").src = data.drinks[0]["strDrinkThumb"];
    document.getElementById("daydrink4d1").innerText = data.drinks[0]["strAlcoholic"];
    document.getElementById("daydrink4f").innerText = data.drinks[0]["strDrink"]; 
    document.getElementById("daydrink4d2").innerText = data.drinks[0]["strGlass"];
    document.getElementById("daydrink4d3").innerText = data.drinks[0]["strCategory"];
    document.getElementById("daydrink4d4").innerText = data.drinks[0]["idDrink"];
  }
  async function getCock5(){
    const api_url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const response = await fetch(api_url);
    const data = await response.json();
    document.getElementById("daydrink5img1").src = data.drinks[0]["strDrinkThumb"];
    document.getElementById("daydrink5img2").src = data.drinks[0]["strDrinkThumb"];
    document.getElementById("daydrink5d1").innerText = data.drinks[0]["strAlcoholic"];
    document.getElementById("daydrink5f").innerText = data.drinks[0]["strDrink"]; 
    document.getElementById("daydrink5d2").innerText = data.drinks[0]["strGlass"];
    document.getElementById("daydrink5d3").innerText = data.drinks[0]["strCategory"];
    document.getElementById("daydrink5d4").innerText = data.drinks[0]["idDrink"];
  }
  async function getCock6(){
    const api_url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    const response = await fetch(api_url);
    const data = await response.json();
    document.getElementById("daydrink6img1").src = data.drinks[0]["strDrinkThumb"];
    document.getElementById("daydrink6img2").src = data.drinks[0]["strDrinkThumb"];
    document.getElementById("daydrink6d1").innerText = data.drinks[0]["strAlcoholic"];
    document.getElementById("daydrink6f").innerText = data.drinks[0]["strDrink"]; 
    document.getElementById("daydrink6d2").innerText = data.drinks[0]["strGlass"];
    document.getElementById("daydrink6d3").innerText = data.drinks[0]["strCategory"];
    document.getElementById("daydrink6d4").innerText = data.drinks[0]["idDrink"];
  }
  async function getData1(){
    localStorage.clear();
    localStorage.setItem('idDrink', document.getElementById("daydrink1d4").innerText);
  }
  async function getData2(){
    localStorage.clear();
    localStorage.setItem('idDrink', document.getElementById("daydrink2d4").innerText);
  }
  async function getData3(){
    localStorage.clear();
    localStorage.setItem('idDrink', document.getElementById("daydrink3d4").innerText);
  }
  async function getData4(){
    localStorage.clear();
    localStorage.setItem('idDrink', document.getElementById("daydrink4d4").innerText);
  }
  async function getData5(){
    localStorage.clear();
    localStorage.setItem('idDrink', document.getElementById("daydrink5d4").innerText);
  }
  async function getData6(){
    localStorage.clear();
    localStorage.setItem('idDrink', document.getElementById("daydrink6d4").innerText);
  }
  async function getDrinkById(){
    if(localStorage.key(0) == "idDrink"){
      api_url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+localStorage.getItem('idDrink');
      const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    document.getElementById("recipeName").innerText = data.drinks[0]["strDrink"];
    document.getElementById("recipeEN").innerText = data.drinks[0]["strInstructions"];
    document.getElementById("recipeThumb").src = data.drinks[0]["strDrinkThumb"];
    var obj = data.drinks[0];
    var i = 0;
    for (var key in obj){
      if(key.includes("strIngredient")){
        i = i +1;
        var value = obj[key];
        if(value != null){
          if(i == 1){
            if(obj["strMeasure"+i] != null){
              var quantity = obj["strMeasure"+i];
            }
            else{
              var quantity = "";
            }
            var html2 = `
            <h2 style="text-align:center;">Ingredients</h2>
            <p style="text-align:center;">-${value} ${quantity}</p>`;
            var html = `
          <div class="carousel-item active">
          <img style="width:200px;" src="https://www.thecocktaildb.com/images/ingredients/${value}-Medium.png" alt="."/> 
          <p style="text-align:center;">${value} ${quantity}</p>
          </div>
          `;
          document.getElementById("ingredientsCheck").innerHTML = document.getElementById("ingredientsCheck").innerHTML + html;
          document.getElementById("ingList").innerHTML = document.getElementById("ingList").innerHTML + html2;
          }
          else{
            if(obj["strMeasure"+i] != null){
              var quantity = obj["strMeasure"+i];
            }
            else{
              var quantity = "";
            }
            var html2 = `<p style="text-align:center;">-${value} ${quantity}</p>`;
            var html = `
          <div class="carousel-item">
          <img style="width:200px;" src="https://www.thecocktaildb.com/images/ingredients/${value}-Medium.png" alt="."/> 
          <p style="text-align:center;">${value} ${quantity}</p>
          </div>
          `;
          document.getElementById("ingredientsCheck").innerHTML = document.getElementById("ingredientsCheck").innerHTML + html;
          document.getElementById("ingList").innerHTML = document.getElementById("ingList").innerHTML + html2;
          }
        }
      }
    }
    }
    else
    {
      api_url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+localStorage.getItem('nameDrink');
      console.log(api_url);
      const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    document.getElementById("recipeName").innerText = data.drinks[0]["strDrink"];
    document.getElementById("recipeEN").innerText = data.drinks[0]["strInstructions"];
    document.getElementById("recipeThumb").src = data.drinks[0]["strDrinkThumb"];
    var obj = data.drinks[0];
    var i = 0;
    for (var key in obj){
      if(key.includes("strIngredient")){
        i = i +1;
        var value = obj[key];
        if(value != null){
          if(i == 1){
            if(obj["strMeasure"+i] != null){
              var quantity = obj["strMeasure"+i];
            }
            else{
              var quantity = "";
            }
            var html2 = `
            <h2 style="text-align:center;">Ingredients</h2>
            <p style="text-align:center;">-${value} ${quantity}</p>`;
            var html = `
          <div class="carousel-item active">
          <img style="width:200px;" src="https://www.thecocktaildb.com/images/ingredients/${value}-Medium.png" alt="."/> 
          <p style="text-align:center;">${value} ${quantity}</p>
          </div>
          `;
          document.getElementById("ingredientsCheck").innerHTML = document.getElementById("ingredientsCheck").innerHTML + html;
          document.getElementById("ingList").innerHTML = document.getElementById("ingList").innerHTML + html2;
          }
          else{
            if(obj["strMeasure"+i] != null){
              var quantity = obj["strMeasure"+i];
            }
            else{
              var quantity = "";
            }
            var html2 = `<p style="text-align:center;">-${value} ${quantity}</p>`;
            var html = `
          <div class="carousel-item">
          <img style="width:200px;" src="https://www.thecocktaildb.com/images/ingredients/${value}-Medium.png" alt="."/> 
          <p style="text-align:center;">${value} ${quantity}</p>
          </div>
          `;
          document.getElementById("ingredientsCheck").innerHTML = document.getElementById("ingredientsCheck").innerHTML + html;
          document.getElementById("ingList").innerHTML = document.getElementById("ingList").innerHTML + html2;
          }
        }
      }
    }
    }
    
  }
  // async function getYeQuote(){
  //   const api_url = 'https://api.kanye.rest/';
  //   const response = await fetch(api_url);
  //   const data = await response.json();
  //   document.getElementById("yeQuote").innerText = data["quote"];
  // }
  
  async function getDrinkList(){
    document.getElementById("datalistOptions").innerHTML = "";
    const api_url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${document.getElementById("exampleDataList").value}`;
    if(api_url != "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="){
      const response = await fetch(api_url);
      const data = await response.json();
      var o = data["drinks"];
      if(o != null){
        o.forEach(element => {
          var n = element["strDrink"]
          document.getElementById("datalistOptions").innerHTML = document.getElementById("datalistOptions").innerHTML + `<option>${n}</option>`;
        });
      }
    }
  }
  async function getDrinkByName(){
    localStorage.clear();
    localStorage.setItem('nameDrink', document.getElementById("exampleDataList").value);
  }
  async function getEmail(){
    document.getElementById("form5Example21").value = "";
  }
  var isBelow1000 = false;
  async function getPage(){ 
    if (window.innerWidth < 1000) {
      document.getElementById("culo33").innerHTML=`
        <div class="col-lg-4 col-md-12 mb-4" style="display: flex; justify-content: center;">
        <div class="flip-card-container" style="--hue: 350">
          <div class="flip-card">
        
            <div class="card-front">
              <figure>
                <div class="img-bg"></div>
                <img id="daydrink1img1" src="">
                <figcaption id="daydrink1f"></figcaption>
              </figure>
        
              <ul class="boh">
                <li class="boh2" id="daydrink1d1"></li>
                <li class="boh2" id="daydrink1d2"></li>
                <li class="boh2" id="daydrink1d3"></li>
                <li class="boh2" id="daydrink1d4"></li>
                <li class="boh2" id="daydrink1d5"></li>
              </ul>
            </div>
        
            <div class="card-back">
              <figure>
                <div class="img-bg"></div>
                <img id="daydrink1img2" src="">
              </figure>
              
              <a href="recipe.html" class="buttan"><button class="boh3" onclick="getData1()">Learn</button></a>
        
              <div class="design-container">
                <span class="design design--1"></span>
                <span class="design design--2"></span>
                <span class="design design--3"></span>
                <span class="design design--4"></span>
                <span class="design design--5"></span>
                <span class="design design--6"></span>
                <span class="design design--7"></span>
                <span class="design design--8"></span>
              </div>
            </div>
        
          </div>
        </div>
      </div>
      `;
      getCock1();
    }
    if (innerWidth >= 1000) {
      document.getElementById("culo33").innerHTML=`
      <div class="row" style="display: flex;">
      <div class="col-lg-4 col-md-12 mb-4" style="display: flex; justify-content: center;">
          <div class="flip-card-container" style="--hue: 350">
            <div class="flip-card">
          
              <div class="card-front">
                <figure>
                  <div class="img-bg"></div>
                  <img id="daydrink1img1" src="">
                  <figcaption id="daydrink1f"></figcaption>
                </figure>
          
                <ul class="boh">
                  <li class="boh2" id="daydrink1d1"></li>
                  <li class="boh2" id="daydrink1d2"></li>
                  <li class="boh2" id="daydrink1d3"></li>
                  <li class="boh2" id="daydrink1d4"></li>
                  <li class="boh2" id="daydrink1d5"></li>
                </ul>
              </div>
          
              <div class="card-back">
                <figure>
                  <div class="img-bg"></div>
                  <img id="daydrink1img2" src="">
                </figure>
                
                <a href="recipe.html" class="buttan"><button class="boh3" onclick="getData1()">Learn</button></a>
          
                <div class="design-container">
                  <span class="design design--1"></span>
                  <span class="design design--2"></span>
                  <span class="design design--3"></span>
                  <span class="design design--4"></span>
                  <span class="design design--5"></span>
                  <span class="design design--6"></span>
                  <span class="design design--7"></span>
                  <span class="design design--8"></span>
                </div>
              </div>
          
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-12 mb-4" style="display: flex; justify-content: center;">
          <div class="flip-card-container" style="--hue: 220">
            <div class="flip-card">
          
              <div class="card-front">
                <figure>
                  <div class="img-bg"></div>
                  <img id="daydrink2img1" src="">
                  <figcaption id="daydrink2f"></figcaption>
                </figure>
          
                <ul class="boh">
                  <li class="boh2" id="daydrink2d1"></li>
                  <li class="boh2" id="daydrink2d2"></li>
                  <li class="boh2" id="daydrink2d3"></li>
                  <li class="boh2" id="daydrink2d4"></li>
                  <li class="boh2" id="daydrink2d5"></li>
                </ul>
              </div>
          
              <div class="card-back">
                <figure>
                  <div class="img-bg"></div>
                  <img id="daydrink2img2" src="">
                </figure>
          
                <a href="recipe.html" class="buttan"><button class="boh3" onclick="getData2()">Learn</button></a>
          
                <div class="design-container">
                  <span class="design design--1"></span>
                  <span class="design design--2"></span>
                  <span class="design design--3"></span>
                  <span class="design design--4"></span>
                  <span class="design design--5"></span>
                  <span class="design design--6"></span>
                  <span class="design design--7"></span>
                  <span class="design design--8"></span>
                </div>
              </div>
          
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-12 mb-4" style="display: flex; justify-content: center;">
          <div class="flip-card-container" style="--hue: 170">
            <div class="flip-card">
          
              <div class="card-front">
                <figure>
                  <div class="img-bg"></div>
                  <img id="daydrink3img1" src="">
                  <figcaption id="daydrink3f"></figcaption>
                </figure>
          
                <ul class="boh">
                  <li class="boh2" id="daydrink3d1"></li>
                  <li class="boh2" id="daydrink3d2"></li>
                  <li class="boh2" id="daydrink3d3"></li>
                  <li class="boh2" id="daydrink3d4"></li>
                  <li class="boh2" id="daydrink3d5"></li>
                </ul>
              </div>
          
              <div class="card-back">
                <figure>
                  <div class="img-bg"></div>
                  <img id="daydrink3img2" src="">
                </figure>
          
                <a href="recipe.html" class="buttan"><button class="boh3" onclick="getData3()">Learn</button></a>
          
                <div class="design-container">
                  <span class="design design--1"></span>
                  <span class="design design--2"></span>
                  <span class="design design--3"></span>
                  <span class="design design--4"></span>
                  <span class="design design--5"></span>
                  <span class="design design--6"></span>
                  <span class="design design--7"></span>
                  <span class="design design--8"></span>
                </div>
              </div>
          
            </div>
          </div>
        </div>
    </div>

    <div class="row">
      <div class="col-lg-4 col-md-12 mb-4" style="display: flex; justify-content: center;">
        <div class="flip-card-container" style="--hue: 220">
          <div class="flip-card">
        
            <div class="card-front">
              <figure>
                <div class="img-bg"></div>
                <img id="daydrink4img1" src="">
                <figcaption id="daydrink4f"></figcaption>
              </figure>
        
              <ul class="boh">
                <li class="boh2" id="daydrink4d1"></li>
                <li class="boh2" id="daydrink4d2"></li>
                <li class="boh2" id="daydrink4d3"></li>
                <li class="boh2" id="daydrink4d4"></li>
                <li class="boh2" id="daydrink4d5"></li>
              </ul>
            </div>
        
            <div class="card-back">
              <figure>
                <div class="img-bg"></div>
                <img id="daydrink4img2" src="">
              </figure>
        
              <a href="recipe.html" class="buttan"><button class="boh3" onclick="getData4()">Learn</button></a>
        
              <div class="design-container">
                <span class="design design--1"></span>
                <span class="design design--2"></span>
                <span class="design design--3"></span>
                <span class="design design--4"></span>
                <span class="design design--5"></span>
                <span class="design design--6"></span>
                <span class="design design--7"></span>
                <span class="design design--8"></span>
              </div>
            </div>
        
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-12 mb-4" style="display: flex; justify-content: center;">
        <div class="flip-card-container" style="--hue: 170">
          <div class="flip-card">
        
            <div class="card-front">
              <figure>
                <div class="img-bg"></div>
                <img id="daydrink5img1" src="">
                <figcaption id="daydrink5f"></figcaption>
              </figure>
        
              <ul class="boh">
                <li class="boh2" id="daydrink5d1"></li>
                <li class="boh2" id="daydrink5d2"></li>
                <li class="boh2" id="daydrink5d3"></li>
                <li class="boh2" id="daydrink5d4"></li>
                <li class="boh2" id="daydrink5d5"></li>
              </ul>
            </div>
        
            <div class="card-back">
              <figure>
                <div class="img-bg"></div>
                <img id="daydrink5img2" src="">
              </figure>
        
              <a href="recipe.html" class="buttan"><button class="boh3" onclick="getData5()">Learn</button></a>
        
              <div class="design-container">
                <span class="design design--1"></span>
                <span class="design design--2"></span>
                <span class="design design--3"></span>
                <span class="design design--4"></span>
                <span class="design design--5"></span>
                <span class="design design--6"></span>
                <span class="design design--7"></span>
                <span class="design design--8"></span>
              </div>
            </div>
        
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-12 mb-4" style="display: flex; justify-content: center;">
          <div class="flip-card-container" style="--hue: 350">
            <div class="flip-card">
          
              <div class="card-front">
                <figure>
                  <div class="img-bg"></div>
                  <img id="daydrink6img1" src="">
                  <figcaption id="daydrink6f"></figcaption>
                </figure>
          
                <ul class="boh">
                  <li class="boh2" id="daydrink6d1"></li>
                  <li class="boh2" id="daydrink6d2"></li>
                  <li class="boh2" id="daydrink6d3"></li>
                  <li class="boh2" id="daydrink6d4"></li>
                  <li class="boh2" id="daydrink6d5"></li>
                </ul>
              </div>
          
              <div class="card-back">
                <figure>
                  <div class="img-bg"></div>
                  <img id="daydrink6img2" src="">
                </figure>
          
                <a href="recipe.html" class="buttan"><button class="boh3" onclick="getData6()">Learn</button></a>
          
                <div class="design-container">
                  <span class="design design--1"></span>
                  <span class="design design--2"></span>
                  <span class="design design--3"></span>
                  <span class="design design--4"></span>
                  <span class="design design--5"></span>
                  <span class="design design--6"></span>
                  <span class="design design--7"></span>
                  <span class="design design--8"></span>
                </div>
              </div>
          
            </div>
          </div>
        </div>
      </div>
      `;
      getCock1();
      getCock2();
      getCock3();
      getCock4();
      getCock5();
      getCock6();
    };
    window.addEventListener("resize", function() {
      if (window.innerWidth < 1000 && !isBelow1000) {
        getPage();
        isBelow1000 = true;
      } else if (window.innerWidth >= 1000 && isBelow1000) {
        getPage();
        isBelow1000 = false;
      }
    });

  }
  async function getRobe(){
    if (window.innerWidth < 1000) {
      getCock1();
    } else if (window.innerWidth >= 1000) {
      getCock1();
      getCock2();
      getCock3();
      getCock4();
      getCock5();
      getCock6();
    }
  }