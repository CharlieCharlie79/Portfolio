var sidebar = document.getElementById("sidebar");
var bars = document.getElementById("bars-menu");


function openNav()
{
   sidebar.style.width = "250px";
   bars.style.zIndex = -1;
}

function closeNav()
{
  sidebar.style.width = "0";
  bars.style.zIndex = 2;
}