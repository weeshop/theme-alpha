(function ($, Drupal) {
  Drupal.behaviors.addToCartPanel = {
    attach: function (context, settings) {
      $('.add-card').once('addToCartPanel').each(function () {
        $(this).click(function (event) {
          var pid = $(this).data('pid');
          var pic = $('#product-item-pic' + pid);
          var pan = $('#add-to-cart-panel-p' + pid);
          pan.css('width', pic.width());
          pan.css('min-height', pic.height());
          pan.addClass('show');
          pan.mouseleave(function () {
            $(this).removeClass('show');
          });
        })
      })
    }
  };

  Drupal.behaviors.header_search_form = {
    attach: function (context, settings) {
      $('.header-search-form').once('header-search-form').submit(function () {
        window.location.href = settings.path.baseUrl + 'product-search?search_api_fulltext=' + $('.header-search-form > input').val();
        return false;
      })
    }
  };

  Drupal.behaviors.promotion_menu_item_flag = {
    attach: function (context, settings) {
      $('.main-menu a[href="/promotion"]').once('promotion_menu_item_flag').each(function () {
        $(this).html($(this).text()+'<span class="new">Hot</span>')
      })
    }
  };
})(jQuery, Drupal);
