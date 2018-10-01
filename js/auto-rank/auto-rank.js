/**
 * Automatic rank.
 *
 * @author   Luiz Felipe F. (luuuiiiz.)
 * @version  1.0.0
 * @license  MIT
 */

(function ($) {
  'use strict';

  var ranks = [
    {
      color: '#4080FF',
      rank: {
        name: 'Desenvolvedor',
        className: 'rank dsn'
      }
    },
    {
      color: '#990000',
      rank: {
        name: 'Administrador',
        className: 'rank adm'
      }
    },
    {
      color: '#000000',
      rank: {
        name: 'Corregedor',
        className: 'rank cor'
      }
    },
    {
      color: '#C2C2C2',
      rank: {
        name: 'Diretor',
        className: 'rank dire'
      }
    },
    {
      color: '#AD1818',
      rank: {
        name: 'G.A.T.E',
        className: 'rank gate'
      }
    },
    {
      color: '#662020',
      rank: {
        name: 'Esquadrão',
        className: 'rank ece'
      }
    },
    {
      color: '#003FAB',
      rank: {
        name: 'Setor Administrativo',
        className: 'rank crh'
      }
    },
    {
      color: '#6c6f71',
      rank: {
        name: 'Relações Públicas',
        className: 'rank srp'
      }
    },
    {
      color: '#2C1EF5',
      rank: {
        name: 'C.F.O',
        className: 'rank cfo'
      }
    }
  ];

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
          .css('color', this.color);

        // If the color is not the same, pass to the next iteration:
        if ($dummy.css('color') !== $user.css('color')) {
          return;
        }

        // Create the rank element:
        var $rank = $('<div>', {
          'class': 'lf-custom-rank',
        })
          .text(this.rank.name)
          .addClass(this.rank.className);

        $this
          .find('.user-basic-info > a[href] ~ .rank')
          .replaceWith($rank);
      });
    });
  });
})(jQuery);
