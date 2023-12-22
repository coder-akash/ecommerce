const cacheData = 'flybuy';

this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      return cache.addAll([
        "/static/js/bundle.js",
        "/manifest.json",
        "/flybuy.png",
        "/shop1.gif",
        "/shop.gif",
        "/index.html",
        "/",
        "/login",
      
       
       
        
        // ... Add other routes and files you want to cache
      ]);
    })
  );
});

this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((response) => {
        if (response && response.status === 200) {
          const clonedResponse = response.clone();
          caches.open(cacheData).then((cache) => {
            cache.put(event.request, clonedResponse);
          });
        }

        return response;
      });
    })
  );
});
