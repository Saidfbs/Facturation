self.addEventListener('push', function(event) {
  const options = {
    body: event.data.text(),
    icon: 'https://s.svgbox.net/hero-solid.svg?ic=bell'
  };
  event.waitUntil(
    self.registration.showNotification('تحديث الحالة', options)
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});