$(document).ready(function() {

  // add termDefinition class to definition wrapper
  $('.node .terminology').children().addClass('termDefinition clearfix').wrapInner('<div class="inner-wrapper" />');
  
  // hide all term definition
  $('.node .terminology .termDefinition').hide();

  // replace <dl> with <div>
  $('dl.terminology').each(function(i){
    $(this).replaceWith('<div class="terminology clearfix">' + $(this).html() + '</div>')
    
  });
  
  // replace <dt> with <h3>
  $('.termDefinition dt').each(function(){
    $(this).replaceWith('<h3 class="term">' + $(this).text() + '</h3>');
  });

  // replace <dd> with <div>
  $('.termDefinition dd').each(function(){
    $(this).replaceWith('<div class="definition">' + $(this).html() + '</div>');
  });
  
  $('.inner-wrapper').before('<div class="close-button clearfix"><a href="#">Hide</a></div>');


  // Glossary toggle
  $('.term-list a:not(.active)').click(function() {
    
    // match each trigger (term link) with its own definition
    trigger = $(this).attr('href').replace(/#/g, '');
    defClass = '.terminology .' + trigger;
    
    // this term definition is already open
    if ($(this).hasClass('active') ) {
      $('.term-list a.active').removeClass('active');
      $('.termDefinition').slideUp();
    }
    
    // this term definition is not already open
    else {
        // another term definition is open, close it first
        if ($('.term-list a.active').length > 0) {
          $('.term-list a.active').removeClass('active');
          $('.terminology .current-term').removeClass('current-term').slideUp();
        }

        // add .active class to current trigger 
        $(this).addClass('active');

        // slide down new term definition
        $(defClass).addClass('current-term').slideDown();
    }
    return false;
  });
  
  // "Hide button"
  $('.close-button a').bind('click', function() {
    $('.term-list a.active').removeClass('active');
    $('.termDefinition').slideUp();
    return false;
  });
  
  // Equal height for any_vote widget blocks
  $('#main_content_container .block-any_vote').equalHeight();
  
  // hide privacy legend
  $('#user-profile-form legend:contains(privacy)').hide();


  // Star Rating
  
  // scope internal var for each any_vote_points_widget
  $('ul.any_vote_points_widget').each(function(){

    // remove other classes to get numeric class names only
    $(this).children().removeClass('first last');

    // count stars with average-active class,
     var average_count = $('a.average-active').length;
     console.log('average_count='+average_count);

     // highlight stars on rollover only when current user does not vote yet
     $('.block-any_vote:not(.user_voted) ul.any_vote_points_widget li').hover(

       // mouseover
       function(){
         console.log('inmouseover'+average_count);
         $('ul.any_vote_points_widget a.average-active').removeClass('average-active');
         var index = parseInt($(this).attr('class'));
         // highlight stars below this one
         for(i=0; i<=index; i++) {
           $('ul.any_vote_points_widget li').eq(i).addClass('highlight');
         }
       },

       // mouseout
       function(){
         // unhighlight all stars
         $('ul.any_vote_points_widget li').removeClass('highlight');
         console.log('inmouseout'+average_count);

         // restore average-active class
         for(i=0; i<average_count; i++) {
           $('ul.any_vote_points_widget li').eq(i).find('a').addClass('average-active');
         }
       }
     );

  });

});
