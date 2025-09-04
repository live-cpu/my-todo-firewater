self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => self.clients.claim());
// 캐싱 필요하면 나중에 추가. 지금은 PWA 설치 조건만 충족.
