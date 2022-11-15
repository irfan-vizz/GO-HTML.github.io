$(document).ready(function () {
    console.log('Script is Running');
    $('.hamburger').click(function() {
        $( this ).toggleClass( "active" );
        $( this ).closest('.navWrap').find('.listWrap').toggleClass( "open" );
      });
      $('.navLink').click(function() {
        $( this ).closest('.navItem').toggleClass( "hasDropdown" );
        $( this ).closest('.navItem').find('.subNav').slideToggle();
      });
      $('.csItem').click(function() {
        let tabId = $( this ).attr('attr-tab');
        $('.csDetail').hide();
        $('#'+tabId ).fadeIn();
      });
});