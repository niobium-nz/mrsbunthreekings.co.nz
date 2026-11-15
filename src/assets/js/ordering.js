(function () {
    'use strict';

    document.querySelectorAll('[data-order-location]').forEach(function (link) {
        link.addEventListener('click', function () {
            var placement = link.getAttribute('data-order-location');

            // Record ordering interest separately from completed purchases.
            // The real link works even when analytics is unavailable.
            if (typeof window.gtag === 'function') {
                window.gtag('event', 'uber_eats_click', {
                    send_to: 'G-0KE5WLNCKJ',
                    link_url: link.href,
                    placement: placement,
                    transport_type: 'beacon'
                });
            }

            if (typeof window.fbq === 'function') {
                window.fbq('trackCustom', 'UberEatsClick', {
                    placement: placement
                });
            }
        });
    });
})();
