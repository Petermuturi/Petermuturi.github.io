// Nav
function toggle ()
         {
            $(".hideContent").toggleClass ("showContent", 1000);
         }

  // Nav hover menu
$(function() {
    $( ".drp" ).hover(function() {
      $( ".cde" ).toggleClass( "shw", 400 );
    });
  });
$(function() {
    $( ".drp1" ).hover(function() {
      $( ".cde1" ).toggleClass( "shw", 400 );
    });
  });
$(function() {
    $( ".drp2" ).hover(function() {
      $( ".cde2" ).toggleClass( "shw", 400 );
    });
  });
$(function() {
    $( ".drp3" ).hover(function() {
      $( ".cde3" ).toggleClass( "shw", 400 );
    });
  });
$(function() {
    $( ".drp4" ).hover(function() {
      $( ".cde4" ).toggleClass( "shw", 400 );
    });
  });

// End of nav
$(function() {
    $( ".em" ).hover(function() {
      $( ".cf" ).toggleClass( "shw", 400 );
    });
  });

// Loading on submit
   $(".snd").hide();
      function form(){
         var firstname = document.contactForm.fname;
          var lastname = document.contactForm.lname;
        var email = document.contactForm.email;
        var phone = document.contactForm.phone;
    var message = document.contactForm.message;
     if (firstname.value === "")
    {
        window.alert("Please enter your first name.");
        firstname.focus();
         $(".snd").hide();
        return false;
    }
     if (lastname.value === "")
    {
        window.alert("Please enter your last name.");
        lastname.focus();
         $(".snd").hide();
        return false;
    }
        if (email.value === "")
    {
        window.alert("Please provide your e-mail address.");
        email.focus();
         $(".snd").hide();
        return false;
    }
    if (email.value.indexOf("@", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
         $(".snd").hide();
        return false;
    }
    if (email.value.indexOf(".", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
         $(".snd").hide();
        return false;
    }
    if ((isNaN(phone.value)))
    {
        window.alert("Please enter your phone number.");
        phone.focus();
        $(".snd").hide();
        return false;
    }

    if (message.value === "")
    {
        window.alert("Please provide a message.");
        message.focus();
        $(".snd").hide();
        return false;
    }
    return true;
      }


//ACCORDIONS
$(document).ready(function($) {
    $('#accordion').find('.accordion-toggle').click(function(){

        //Expand or collapse this panel
        $(this).next().slideToggle('fast');

        //Hide the other panels
        $(".accordion-content").not($(this).next()).slideUp('fast');

    });
});

