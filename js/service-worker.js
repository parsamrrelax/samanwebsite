self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('your-app-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/css/index.css',
          '/js/index.js',
          '/js/gsap.min.js',
          '/js/jquery.min.js',
          '/images/Mirela.png'
          // Add other files you want to cache
        ]);
      })
    );
  });
  