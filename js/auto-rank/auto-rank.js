/**
 * Automatic rank.
 *
 * @author   Luiz Felipe F. (luuuiiiz.)
 * @version  1.0.0
 * @license  MIT
 */

(function ($) {
  'use strict';

  var ranks = [{
    color: '#4080FF',
    rank: {
      name: 'Desenvolvedor',
      className: 'rank dsn'
    }
  }, {
    color: '#000000',
    rank: {
      name: 'Corregedoria',
      className: 'rank cor'
    }
  }];

  $(function () {
    $('.post .user').each(function () {
      var $this = $(this);
      var $user = $this.find('.username > a[href] > span[style]');

      // If the user has not a color, pass to the next iteration:
      if (!$user.length) {
        return;
      }

      $.each(ranks, function () {
        var $dummy = $('<span>')
          .css('color', this.color)

        // If the color is not the same, pass to the next iteration:
        if ($dummy.css('color') !== $user.css('color')) {
          return;
        }

        // Create the rank element:
        $('<div>', {
          'class': 'lf-custom-rank',
        })
          .text(this.rank.name)
          .addClass(this.rank.className)
          .insertAfter($this.find('.user-basic-info'));
      });
    });
  });
})(jQuery);
