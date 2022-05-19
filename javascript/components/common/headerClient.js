const header = document.querySelector(".client__header");
const categoryBanner = document.querySelector(".category-banner");

header.innerHTML = `
<div class="client__header__div">
        <label for="hamburger-menu"><i class="icon fa-solid fa-bars"></i></label>
        <input type="checkbox" name="hamburger-menu" id="hamburger-menu">


        <nav class="client__header__div__nav">

          <ul class="client__header__div__nav__ul">

            <li class="client__header__div__nav__ul__li"><a href="index.html" class="client__header__div__nav__ul__li__a active">Home</a></li>
            <li class="client__header__div__nav__ul__li"><a href="products.html" class="client__header__div__nav__ul__li__a">Products</a></li>
            <li class="client__header__div__nav__ul__li"><a href="" class="client__header__div__nav__ul__li__a">About us</a></li>
            <li class="client__header__div__nav__ul__li"><a href="" class="client__header__div__nav__ul__li__a">Contact</a></li>

          </ul>

        </nav>

      </div>

      <div>
        <a href="index.html">
          <img src="images/logo.png" alt="Pawn.com logo" style="width:100px; margin: 0;">
        </a>
      </div>

      <div>
      <a href="login.html"><i class="icon fa-solid fa-user"></i></a>
        <a href="cart.html"><i class="icon fa-solid fa-cart-shopping"></i></a>
      </div>`;

categoryBanner.innerHTML = `
<div>
  <div class="category-banner-div">
    <p>Books</p>
  </div>
  <div class="category-banner-div">
    <p>Chess sets</p>
  </div>
</div>

<div>
  <div class="category-banner-div">
    <p>Interior</p>
  </div>
  <div class="category-banner-div">
    <p>Magazines</p>
  </div>
</div>

<div>
  <div class="category-banner-div">
    <p>Courses</p>
  </div>
  <div class="category-banner-div">
    <p>Fide.com</p>
  </div>
</div>`;