        // Sincronize o carrossel com o tablist
        var carousel = document.querySelector('#carouselPrincipal');
        var tabList = document.querySelector('#nav-tab');
        
        var carouselInstance = new bootstrap.Carousel(carousel, {
            interval: 10000,
            ride: 'carousel'
        });
    
        var tabLinks = document.querySelectorAll('#nav-tab .nav-link');
    
        carousel.addEventListener('slid.bs.carousel', function () {
            var index = Array.from(carousel.querySelectorAll('.carousel-item')).indexOf(carousel.querySelector('.carousel-item.active'));
            var activeTab = tabLinks[index];
            new bootstrap.Tab(activeTab).show();
        });
    
        tabLinks.forEach(function (tabLink, index) {
            tabLink.addEventListener('shown.bs.tab', function () {
                carouselInstance.to(index);
            });
        });