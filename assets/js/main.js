var apiCall = "https://api.flickr.com/services/feeds/photos_public.gne?id=132038343@N02&tags=featured&lang=en-us&format=json&jsoncallback=?";



// Back to Top

$(document).ready(function() {


  $(window).scroll(function() {

    if ($(this).scrollTop() > 200) {
      $('.go-top').fadeIn(200);
    } else {
      $('.go-top').fadeOut(200);
    }
  });

  // Animate the scroll to top
  $('.go-top').click(function(event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: 0
    }, 300);
  });




  $('#brand, #brand-alt').removeClass('hidden');
  $('#brand, #brand-alt').addClass('animated fadeIn');

  $("#navigation").removeClass("hidden");
  $("#navigation").addClass("animated fadeIn");

  $('#landing').removeClass('hidden');
  $('#landing').addClass('animated fadeIn');

  $('#description').removeClass('hidden');
  $('#description').addClass('animated zoomIn');

  $('#quick-start').removeClass('hidden');
  $('#quick-start').addClass('animated fadeIn');

  $('#meeting-time').removeClass('hidden');
  $('#meeting-time').addClass('animated fadeIn');

  $('#featured').removeClass('hidden');
  $('#featured').addClass('animated fadeIn');

  $('#special-event').removeClass('hidden');
  $('#special-event').addClass('animated fadeIn');

  $('#officers').removeClass('hidden');
  $('#officers').addClass('animated fadeIn');

  $.getJSON(apiCall, function(data) {
    $.each(data.items, function(i, item) {
      $("<img data-u='image'/>").attr("src", item.media.m).appendTo(".flickr-stream")
        .wrap("<div>" + "</div>");
    });
  });



});


function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Calendar
$(document).ready(function() {
  $('#calendar').fullCalendar({

    defaultView: 'month',

    views: {
  listDay: { buttonText: 'month' },
  listWeek: { buttonText: 'list for this week' }
},
    aspectRatio: 1.5,
    eventClick: function(event) {
      // opens events in a popup window
      window.open(event.url, 'gcalevent', 'width=700,height=600');
      return false;
    },
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,listWeek'
    },
    contentHeight: '400',

    eventTextColor: 'white',

    googleCalendarApiKey: 'AIzaSyBu5kL2kgj9AZXCM8kfSLukPx1Vb7bRSh4',
    events: {
      googleCalendarId: 'electronicsosu@gmail.com',
      timezone: 'America/New_York',
    }
  });
});




