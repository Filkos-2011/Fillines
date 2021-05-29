const tabList = document.querySelectorAll(".tab__mask");
const portfolioList = document.querySelectorAll(".portfolio");

if (tabList && portfolioList) {
  tabList[0].classList.toggle('tab__mask_active');
  portfolioList[0].classList.toggle('portfolio_active');

  for (let i=0, length=tabList.length; i<length; i++) {
    tabList[i].addEventListener("click", function() {
      if (document.querySelector(".tab__mask_active")) {
        document.querySelector(".tab__mask_active").classList.toggle('tab__mask_active');
      }
      tabList[i].classList.toggle('tab__mask_active');
  
      if (document.querySelector(".portfolio_active")) {
          document.querySelector(".portfolio_active").classList.toggle('portfolio_active');
        }
        portfolioList[i].classList.toggle('portfolio_active');
    });
  }
}

