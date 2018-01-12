/**
 * Every Day I'm Instagrammin'
 * A stupid simple Jq Insta plugin.
 *
 * @author Stephen Scaff - stephenscaff.com
 * @see    everydayiminstagrammin.stephenscaff.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * Copyright 2015, Stephen Scaff
 *
 * global jQuery
 * jshint unused:false
 * jshint -W081
 */

(function($) {
  $.everydayImInstagrammin = {
    defaults: {
      clientID: 'null',
      accessToken: 'null',
      numberPics: '12',
      captions: 'false',
    }
  };
  $.fn.extend({
    everydayImInstagrammin: function(options) {
      $.extend($.everydayImInstagrammin.defaults, options);
        return this.each(function() {
          var el = $(this),
              clientID = options.clientID,
              accessToken = options.accessToken,
              numberPics = options.numberPics,
              instaUrl = 'https://api.instagram.com/v1/users/' + clientID + '/media/recent/?access_token=' + accessToken + '&callback=?';

        $.ajax({
          type: 'GET',
          dataType: 'jsonp',
          cache: false,
          url: instaUrl,
        }).done(function(data)  {
            for ( var i = 0; i < options.numberPics; i++ ) {
              //console.log(data)
              if ( typeof data.data[i] === 'undefined' ){
                return false;
              } else {
                var caption = '';

                if ( data.data[i].caption !== null ) {
                  var caption = data.data[i].caption.text;
                  el.append('<figure class="insta-item"><a class="insta-item__link" target="_blank" href="' + data.data[i].link + '"><img class="insta-item__img" src="' + data.data[i].images.standard_resolution.url + '" /><div class="insta-item__caption"><p>' + caption + '</p></div></a></figure>');
                } else {
                  el.append('<figure class="insta-item"><a class="insta-item__link" target="_blank" href="' + data.data[i].link + '"><img class="insta-item__img" src="' + data.data[i].images.standard_resolution.url + '"  /></a></figure>');
                }
              }
            }
          }).fail(function(jqXHR, textStatus) {
            console.log( "Nah Burv. Request failed: " + textStatus );
          });
      });
    }
  });
})(jQuery);
