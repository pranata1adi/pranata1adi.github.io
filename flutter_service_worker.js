'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f982dc6584b974e7eb445d6b1e06217c",
"assets/AssetManifest.bin.json": "53ae2014a12076b82eea35dd559cad8e",
"assets/AssetManifest.json": "f3f3edf0126f541df96d3dd9b3d47f11",
"assets/assets/fonts/dosis/Dosis-Bold.otf": "3fdafce42b8fc3827c880779176daeed",
"assets/assets/fonts/dosis/Dosis-ExtraBold.otf": "dcd2da8a2c2ad93d62dadc0ddb29c871",
"assets/assets/fonts/dosis/Dosis-Medium.otf": "9878be19a36d62228658713326d43b01",
"assets/assets/fonts/dosis/Dosis-Regular.otf": "62edbe8db877667d703a63578e63d853",
"assets/assets/fonts/dosis/Dosis-SemiBold.otf": "59e4de58a1834e9c982808f788a557a2",
"assets/assets/fonts/qwigley/Qwigley-Regular.ttf": "46c9a6e63cc0f106273cd0fc627f585b",
"assets/assets/images/ajt.png": "099d18fc406f232c6ec693b0e211d1e3",
"assets/assets/images/android.png": "58d3f927274b2385d73615c9840ac2f7",
"assets/assets/images/android_studio.png": "c90402881022972365fdffad40782318",
"assets/assets/images/app.png": "340bfbf81357baad4326926b7a31ec28",
"assets/assets/images/bebas_apps.png": "4072cefa00d75355bac85700c6054d7f",
"assets/assets/images/brimola_apps.png": "8989e55caf482c9f9c3cfc1fc1df1a40",
"assets/assets/images/coming_soon.png": "86b552ac8947bf91f456b709d99547eb",
"assets/assets/images/education.png": "74e901098b03143901725fafe31dcfc1",
"assets/assets/images/firebase.png": "569868ff879f922a7a469d869bbce1f4",
"assets/assets/images/github.png": "357c3c73e054d6b0eb9a10dbf80aca08",
"assets/assets/images/guruku.png": "ac7269ef8c2693f12046304c971b7200",
"assets/assets/images/guruku_apps.png": "fb66fbc3d8393ca5fcf5554c99eb907b",
"assets/assets/images/guruku_home.png": "b18b81fb327e2b6cc7b2f894482decab",
"assets/assets/images/home.png": "1f1056a494cbfa33fcc5a0da11253086",
"assets/assets/images/hps_apps.png": "a3909e6a668a332a8c754f8feb45f0e2",
"assets/assets/images/integra.jpeg": "a8d09587c8f7491e7e39b8a43240ef2d",
"assets/assets/images/intro.png": "d4056cdca163fda92555ffb2eeca3b88",
"assets/assets/images/java.png": "74e943d82452f81f6a0bb0b51ac6785d",
"assets/assets/images/junio_smart_apps.png": "89d31622b414a200c8e6b4efc1bfb4c6",
"assets/assets/images/kotlin.png": "215732258d25edf8a6c96e4bb29d4ab1",
"assets/assets/images/linkedin.png": "fd0d5546fdbdc85c76c4372a0d51f1bc",
"assets/assets/images/mas.jpeg": "8714cb61624f7762807fa40e95c6d056",
"assets/assets/images/maukerja_apps.png": "db68143fb78383c959d6e2802ab3fd6e",
"assets/assets/images/mii.png": "da22aa9e8cfaae6729e5f804479a8cc9",
"assets/assets/images/mola.png": "082a874dbc8cd0ba34a519a15f49cca4",
"assets/assets/images/mola_apps.png": "083359580e11f42d03bc3d0e2c17db61",
"assets/assets/images/profile.png": "b8982e196d7c86f12143ffa41d2b33a8",
"assets/assets/images/ricebowl_apps.png": "f9084881af5fb3f301159a4516be2c71",
"assets/assets/images/shizudai.png": "4885af638788d509e2f3119eadd802e0",
"assets/assets/images/uii.png": "e4c0adfd99c082403fcab887ea99f23a",
"assets/assets/images/undip.png": "3f3fb2420de8d54d941d4ad123d4cff7",
"assets/assets/images/work.png": "fa9b31e2b3fc44343566268b4dddd944",
"assets/FontManifest.json": "7d3f80ec6b57449c631b16ae16b0a364",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "84115f1c7c0e4612d7c172d4a8062634",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "9b118ef707afb668243123f0e6a2d51e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "037d3d14b34b5184a3df6d3edfce068a",
"/": "037d3d14b34b5184a3df6d3edfce068a",
"main.dart.js": "dfec9ab0cbcac5b68edb295d205f8e94",
"manifest.json": "630e351a14adf514c1c03263ba4ca05f",
"version.json": "7cf6dd973b52a4658016bd182cb397cd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
