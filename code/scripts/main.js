// Sets the navigation to closed
var open = false;

// Set all elements that are to be changed
var nav = document.getElementById("topNav");
var header = document.getElementsByTagName("header")[0];
var main = document.getElementsByTagName("main")[0];
var footer = document.getElementsByTagName("footer")[0];

// Function that changes the navigation bar
var changeNav = (_margin, _opacity) =>
{
    // Moves navigation in and out
    nav.style.marginLeft = _margin;
    // Dimms and undimms content
    header.style.opacity = main.style.opacity = footer.style.opacity = _opacity;
}

// Function to close navigation
var clickClose = () =>
{
    // Moves navigation in and undimms screen
    changeNav("-402px", 1);
    // Sets the navigation to closed
    open = false;
}

// Opens and closes the navigation
var clickToggle = () => 
{
    // Checks whether navigation is open or closed
    if(open)
    {
        // Closes navigation
        clickClose();
    }
    else
    {
        // Moves navigation out and dimms screen
        changeNav(0, 0.3);
        // Sets the navigation to open
        open = true;
    }
}

// Changes the style of the header
var changeHeader = ( _top, _background, _border) =>
{
    // Changes position
    header.style.paddingTop = _top;
    // Changes background
    header.style.background = _background;
    // Changes border
    header.style.borderBottom = _border;
}

// When user scrolls
var scroll = () =>
{
    // Checks if document has been scrolled more than 350px from top
    if (document.getElementsByTagName("html")[0].scrollTop > 100)
    {
        // Moves up, adds background and border 
        changeHeader(0, "#111", "2px solid #00BFFF");
    }
    else
    {
        // Moves down, takes away background and border
        changeHeader("50px", "transparent", "none");
    }
}

// When user presses down arrow

var moveDown = () =>
{
    // Scroll to bottom of image
    window.scrollTo({
        // Height of window before header
        top: window.innerHeight - 88, 
        left: 0, 
        // smooth scrool
        behavior: 'smooth' 
    });
}