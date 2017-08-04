$(document).ready(function() {

    // HANDLE GRID/LIST VIEW

    //Default Action
    $(".tab_content").hide(); //Hide all content
    $("ul.tabs li:first").addClass("active").show(); //Activate first tab
    $(".tab_content:first").show(); //Show first tab content

    //On Click Event
    $("ul.tabs li").click(function() {
        $("ul.tabs li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".tab_content").hide(); //Hide all tab content
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active content
        return false;
    });

    // HANDLE DROPDOWN AT PRODUCTS

    var clicker = $('.options');
    var navDrop = $('ul.navigation');
    var transition = $('.rating, .options, ul.navigation, li, a, span, img');
    
   navDrop.hide();
    clicker.click(function() {
        $(this).parent().find('ul.navigation').slideToggle('fast');
        $(this).parent().parent().find('.action').toggleClass('active').stop();
    });

    // HANDLE TRANSITION ON CHOSEN CLASSES 
    transition.addClass('transition-spec');

});