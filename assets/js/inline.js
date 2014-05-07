$(document).ready(function() {
  
  //Editable Items
  //Profile info Name, Location, Language
  function initEditable(eitem) {
    eitem.mouseup(function(e) {
        selectContents(this);
        e.preventDefault();
      });

     eitem.focus(function() {
        console.log($(this).val()+" Focused");
        selectContents(this);
     });

     eitem.keypress(function(e) {
        if(e.which==9) {
          e.preventDefault();
        }
     });

  };

  function selectContents(eitem) {
    var element = eitem;
    if (document.body.createTextRange) { // ms
      var range = document.body.createTextRange();
      range.moveToElementText(element);
      range.select();
    } else if (window.getSelection) { // moz, opera, webkit
      var selection = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(element);
      selection.removeAllRanges();
      selection.addRange(range);
      event.stopPropagation();
    }
  };

  function saveLanguage(lang, keyPressed) {
    console.log(event.type);
    if(keyPressed==13 || event.type == 'blur') {
      if(lang.text()!='Add Language' && lang.text() && lang.is(':last-child')) {
        lang.parent().append('<span class="editable language add" contenteditable="true" data-title="Add Lanuage">Add Language</span>');
        lang.removeClass('add').addClass('saved');
        lang.next('.language').remove("br"); 
        initEditable(lang.next('.language'));
        lang.next('.language').focus().keypress(function(e) { 
          if(e.which==13) {
            saveLanguage($(this), e.which);
          //selectContents(lang.next('.language'));
          }
        }).blur(function(e) { saveLanguage($(this), e.which); });
        
      } else if(lang.text()!='Add Language' && lang.text() && lang.not(':last-child') && event.type != 'blur'){
        lang.next('.language').focus();
      } else if (lang.text()!='Add Language' && lang.text()==false && lang.not(':last-child') && event.type != 'blur') {
        lang.remove();
      } else if (lang.text()!='Add Language' && lang.text()==false && lang.is(':last-child') && event.type != 'blur') {
        event.preventDefault();
        lang.innerHTML('Add Language');
      } else if (event.type == 'blur') {
        lang.removeClass('add').addClass('saved');
      }
      event.preventDefault();
   
    } else if (keyPressed==9) {
      lang.removeClass('add').addClass('saved');
      event.preventDefault();
    }

  };

  $(".editable").mouseup(function(e) {
    selectContents(this);
    e.preventDefault();
  });

 $(".editable").focus(function() {
    console.log($(this).val()+" Focused");
    selectContents(this);
 });

 $(".editable").keypress(function(e) {
    if(e.which==9) {
      e.preventDefault();
    }
 });

  $( '#name' ).focusout(function() {
    var name = $(this).text().split(" ");
    $( '.firstName' ).html( name[0] );
  });

  $('#name').keypress(function(e) {
    if(e.which==13) {
      var name = $(this).text().split(" ");
      $( '.firstName' ).html( name[0] );
      e.preventDefault();
    }
  });
  
  $("#location").focusout(function() {
    codeAddress();
    $('.mapInfo').css({
        height: "auto"
      });
  });

  $("#location").keypress(function(e) {
    if(e.which==13) {
      codeAddress();
    event.preventDefault();
      //$(this).next(".editable").focus();
    }
  });

  $('.language').keypress(function(e) { saveLanguage($(this), e.which); }).blur(function(e) { saveLanguage($(this), e.which); });

  


// Profile Skills



});