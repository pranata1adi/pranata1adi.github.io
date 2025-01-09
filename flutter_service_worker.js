'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "cd4488f907c01f64f8a5be0d28d56aa4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bac06f2999c48724b0b59936d421ab25",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3bb2dd03a97ccfd2f7406090ca7a8016",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "19ab996b6e184e6b4bb23bbccb332246",
".git/logs/refs/heads/main": "041d1e8569f486484c0f7f276c834b00",
".git/logs/refs/remotes/origin/main": "2f73758879be64386daac12394127419",
".git/objects/01/74283ef5720d3ab5e0fc7335ff9302dda81b01": "286c09b91abb1c85db27142de297fbfb",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0a/66038b46c3f6d44e93d823887a642272febfcb": "8dde0e7cfaabc6bf3a97fe7addb02007",
".git/objects/0c/bf9db20c86861074abc77fb6c2c339b260d897": "70910c45f0b7d5e66cebc7197268a2da",
".git/objects/16/27f3d795b069ad730e81f1ee5f96559867c274": "24eeb7a9776c214dd5afeb8b7a58e0bd",
".git/objects/1a/36614193b963571e8ed53399e40634c15c12eb": "6100ba95aa851ca1a7376316faaeaea0",
".git/objects/1a/ae8f3dd7f44c6c9addf3b7018bb4c5eaa38285": "8bd2b77205dde61569c8c0ac69cf834e",
".git/objects/1b/059b2085f8f9b6307ee9b5d91a5e1479492ae7": "99355fd76d07b2f7c968ab3cb8a443bd",
".git/objects/1b/be00559b06a0644d447eba329960dd393c57b3": "18c8f1543397cad701c4ffb65dbc385f",
".git/objects/1d/9325bdac54708a687bb9e6334f275a1b494289": "876e00b004f01302988bb2268cb40a4f",
".git/objects/1f/37ede0ef5a1661c3d49a44c3b4e0a5e10ef018": "e65433be1f19d724b686e1c5120148ee",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/87ca95a62eacd810152bbdc571365fe84b3289": "681b8bd0153e34c00757852c59d8a283",
".git/objects/21/bd5c5cea6b0178bbde4167c2a26a0dcf752d39": "892723fd00b542b4ca5120ecd3f7fd2f",
".git/objects/23/58174912ed076b84cb0b46cac708af76a5e09d": "5ec94ee9f2d7842544c737a3cfcf1850",
".git/objects/23/af6350be9092c9d9d366e9e1899461d24d8fb4": "86a660ae62a0f3f613081166049d3a12",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/37d0e49c1a3618bd71cb47943272fe085848b9": "9e81bf044bad58e2ef0eed0c943d0232",
".git/objects/27/8496d10676ddb8cbbc23d8b64d97a1636b52e8": "a79621a465741800bda698bb93bb3093",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/28/b41b5ec2c97a0933193cd4eb1a1730b3e4d73b": "cd9b3862e5639cb9eb6481e38b522300",
".git/objects/2a/eecb79325dc989db8de43d55d9657b764ab105": "053b296a0c060a17defde2b83dd7d9bf",
".git/objects/35/5b9e7883a805379b444a9299b88fb7d925f75b": "93d22f845a2385f978f068967be134f0",
".git/objects/36/6c6090998753a27a6f234ca0e33dacca9824df": "76e09b59f1714bfb93d6c77d29bd935d",
".git/objects/36/b918d2382ed94e73ae05a074aa5d268174627b": "80773167f9d563f0aacfb27442110011",
".git/objects/37/f3b11bc7ca7e16b59aaab861f5a2faebede27a": "800fbca5900f59c64f7c476fc2660de7",
".git/objects/38/30a8486e715d0ab4cb9d9eb6353d1b44b12b8d": "1bf9de240e5f004c4b6e6a2d0a93ad01",
".git/objects/38/c44666af3e22780ec6b9aeb1dbc98ae19faa91": "c7097665193702d577f67684c4e1b1c9",
".git/objects/3a/c66bed6af1ec5f06215a35d5cacd7c3b476821": "1ec362d63cc1e02027c1b7c9499dcb9d",
".git/objects/3d/01438edc026e3d34c923a9142325e40392dd1b": "a1735e7073fdb806b60b8e370843aacb",
".git/objects/3d/58e5b83ebc0d400b91851226b47ddeb88f31ef": "d7c33f7bff75cee34be15713cfb40007",
".git/objects/3e/01c747cbdfcaa2ba2bacb14059d5f8a2f58efa": "1f30d6a3c93547901c226fb5bc0297ed",
".git/objects/3f/fb26ced3ce9ddda16cdbb7b45c89305889e529": "118f776110df3e7c6ccfd4aab4ba2e8a",
".git/objects/41/ed8d79c72a177c23881b6aec3178e0150e6ba0": "4069515a99ca2bd702a90853836aedec",
".git/objects/43/2c1f3561de1fccb228d56ef666b1b51f27aeb4": "a165bcd0abff62270aded190b3f79fc4",
".git/objects/44/84f96ad9f664d98f96d5dc711285b772f09b92": "e73ba14cbe46307e276c82d3889e2048",
".git/objects/45/a728863811365f454682e6ae7184be4ac7d8d4": "a5aa3e16c3072a60f9fccb339144f076",
".git/objects/45/ef5b2c022dec95f9d93b188039b745056733cd": "08364be367c027e08a91cb6e98ab1912",
".git/objects/48/8e1cac8bcb81e701fedc821be083ade59dcc95": "cd48e41211fe0d470bd9247f04e47341",
".git/objects/4d/f57b893b7b44df51c84e085ab918f923e11442": "901fcf38518b0df2a4e5eeef7b6af960",
".git/objects/4e/bae436afda0215e24410c53f540ccecc221248": "66d3c07fa5f2f619a3beee5a268261fc",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/51/c4e6a58c5877cbad2870b7a4949828c795ea3d": "4bd71be5d0b2f18932e265437f348b05",
".git/objects/56/62506d420d1286cbf2a103e803da0cca7786f9": "0b24c397a4b638af13f6db96c8777c00",
".git/objects/58/9e4bcc44d20e5f2e2b16184c33a7526431a50e": "25156bd43af9718eaf40054baf6567ca",
".git/objects/5d/3df7ed0257b8a6e6c54073bd7a84bbcea23a5d": "b6c005be7c23881b3910ad05e43d9142",
".git/objects/5d/4fa092fa9f492aa4a5ea397ac641e6bb30bfce": "c5a7e63954966b2ad3f9357484770261",
".git/objects/5e/71bea150509f8667f2dbfdd152c47afaabad77": "b4a6d9fa1a74437294377b35f63ebabd",
".git/objects/5f/581cfd943555eba032d10b65e650dd298c0882": "d725dcb472f544a8435cd4c18bb7c094",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/67/a1ec0b2ee1f90d0e1650f1a9d85db9f8a6f30d": "e86c4540a84552f8fc209e7305d1db53",
".git/objects/6d/15e9e62526ea987387257509b31beb06e18793": "a5aca6df5bd26bd4dee7c0d04ab15476",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6e/68eb65da7e9171945cc425b5d7869bc039eb7b": "c57e7400e411bbd884a184a9acf121e1",
".git/objects/6f/11aee22f7c6c388ee7e9d4d714a5db97436471": "a43f830aa0c56ebb2c36c13a58167dde",
".git/objects/70/b68c53d2808845887873bd4a723e0d054daa50": "bfc9a042c9db54e30789caa987f27e99",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/e1161af7b9ec1f72fa82f98ae43f1698dc2a36": "d88c6f041fa3c8cbb114fc6b19e085a9",
".git/objects/76/2db76d93b346149566cb75a2d4d5d473bdf5c1": "edaf710a12e8823fb6820251bd6ad741",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/81/b539f21f180a05c66941908271b517401a2f05": "36a141039613aad97f6b3ff59f288361",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/1cf90c4cf121925b12752a2ae8569c402312ce": "551a3d06ccb035d53d50b9d1c48a9766",
".git/objects/87/b4abc27f91d8fcb5317253ef2ec4440ba9b375": "7c165a994bb4a746348fa11f0164f654",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/0a723dbf8ceb7aeeaf0ea34fe4b5767f073dac": "924b88e86093857c0576d1dda4066dbc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8e/09dee855d158f5b3c7bfcbf9551ee17352b73c": "957502065c93f9b84fe1aedbbb2072de",
".git/objects/95/5c352c4e17b8656f0e84e6da5ad53f623c0f7f": "58e02ee1d99c6ba24f91177867635d9c",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9d/4d68076add9a51d5b0bb898d96e718a37c1657": "b553c5f5baf900491019bdee46293151",
".git/objects/9e/632595839e585085220fe92fbfd0f067047599": "c2d7019a4d892a5a60779e551684bb8a",
".git/objects/9f/c293d032e7f5f6aef6dba8de673923e0360098": "a182001d8c95de30145e31bac1d8eb7f",
".git/objects/a0/09f8bad2a6b83856e10f48dc267ce906a3ca35": "10f3a753919d481d875353333f84d380",
".git/objects/a1/7f785f8b755ff1bd81440ca76f80b3c22e5893": "f3899581dc29a900de9e29eae75f1a7d",
".git/objects/a8/b52ae393aeef956536749897a973682521c7e5": "7040cc1afd5af76034eb604c6d05d0ae",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/af/81e5fe48e4e4d84ea3017285ee85869a5fe0f9": "7fc612c88a196a7533d0b50229459f5f",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b5/6870382aff00f7a28a2ddcd5ee4c3e6b668f46": "d0ca8598e3d6ffb2ad7a3ae7a936f169",
".git/objects/b5/fc7c25465c9a6081ab5ef3d1c75e2c4b3c63dd": "b1bcf5b0678ead00bfbcdd637692ffc5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/f1e08441d68f49020b61840d6d6f01f4b34305": "5eb9c9a6f1327f556b795fb9b97e3fcd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/694cc562423bdba400f7e2f66131f5a7b5cca1": "d427f7d99409c8b9d7ba50c4d4d834f4",
".git/objects/bb/42cfad1db87595f48b6f2c767357f6989dd7a6": "5e8cc057c1493dd6d659a79bf6d3ba02",
".git/objects/bc/16d24c027d8b265328c6094206e9f121e7c664": "6c741f7798fd0c120fee16fd076a7b9f",
".git/objects/c2/a2f64a884f72914c0591cbe50d84541dbdaa50": "9c8324717c31b7d438415a2e306d102a",
".git/objects/c3/2883842752acf742ff9e4a68f0123bb24f31f0": "79d83aa2c2b4ba9eee3ab73957c8649c",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/f9e3eb6b6383ead1b95ba22e84466163594d0d": "243d14400cd501f053fdfe4db9c10055",
".git/objects/d0/303ef6e62c52a681cbed99dbc2982ad6d3f375": "5cd7c94085a8cc6f7f7e27c689d5e812",
".git/objects/d0/f1ac06ec0424d574fc7371858298ddb5ae283f": "aa76e16e4c4db9bba527b4aadc864d12",
".git/objects/d2/a496c43115725fbc49b5a6a99d183139cfaafb": "020e35ebad35ac442a6b5c61576553e8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/804ac332e6089da20103dca67355b1081b8964": "247cb2bb988a26bd81d2ae53b4f6e5b6",
".git/objects/d5/5db330648d66344e0600155d264431a0c0547a": "327a3682094894dd7ad611b02b488017",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/9e447f9c59c1f42fcdf57121ac58f1e5cbd022": "16ab9251291e15a017769f7062bafad5",
".git/objects/da/1489cbc59d1a6acbcfeacbdfa6602ebe8d5441": "e6e8661bd6581398ab320f3747405344",
".git/objects/da/bb02f7460b223a96a8c9a2b9853032e1b4b8bc": "6779374c9ed416064b600acf85c5df82",
".git/objects/dc/5c4c3683ef17cd1c8df09ab2c1980c7e6e6cd0": "000f135e694af3f302a611f262cddab9",
".git/objects/e5/4ebd9c94cd8fa5863e94b8814104d24bbab4e9": "c5675059d439ad20c1859dcf4f7ea1e4",
".git/objects/e6/43b53a3ec2e2ecd5cea09cdee20b9aa5d53180": "4c503165554a6eb5490a9dc47c8df7ab",
".git/objects/e6/49b4262980c197321642c4c2ba62c47197da02": "4d1e8d6f5396cd62622b2b5316234d67",
".git/objects/e9/096960ab0062d99d64d83fb4699fbe6d39c422": "48920738f354d7b0eab8c15e379f1685",
".git/objects/e9/896cb38f6e4e6a437413b48d0ad6787dbf24a2": "ed7b3bf7a50b7ded450de6ffc609512b",
".git/objects/ea/d9133d5f1c1ffef15dbca6270dc7806a352b80": "85942c560208a32ad9f9c942a077e9b7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/6bd09f7567cf7c90a9125c5e5520551985705d": "104259cb338337fb3d24685fc8728e2c",
".git/objects/f1/0092a748eb11a1cd69ed548d0241d9576a5818": "d5911bc7f267c9790cb93203715e6f85",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/e70c71090d4d81df79de3a7e7d523453bc6d90": "9904a4ddb020f92cd41646ef57e69eb4",
".git/refs/heads/main": "4502efd1e32cf42708854fcb1c3bbb18",
".git/refs/remotes/origin/main": "085be0d4084810de64e49aca6b39e976",
"assets/AssetManifest.bin": "76a0f85df0f976627eb3b047c9647e7c",
"assets/AssetManifest.bin.json": "6424e5e4ededdb9738b288b0e96c8d8e",
"assets/AssetManifest.json": "cae51072ee58c3b3f550639f683821fb",
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
"assets/assets/images/GitHubDesktopSetup-x64.exe": "1faca43c101adf56eb456192ffddc36a",
"assets/assets/images/guruku.png": "ac7269ef8c2693f12046304c971b7200",
"assets/assets/images/guruku_apps.png": "fb66fbc3d8393ca5fcf5554c99eb907b",
"assets/assets/images/guruku_home.png": "b18b81fb327e2b6cc7b2f894482decab",
"assets/assets/images/home.png": "1f1056a494cbfa33fcc5a0da11253086",
"assets/assets/images/hps_aoos.png": "a3909e6a668a332a8c754f8feb45f0e2",
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
"flutter_bootstrap.js": "10b125c7276dc55f5ebe585d512e77a5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "037d3d14b34b5184a3df6d3edfce068a",
"/": "037d3d14b34b5184a3df6d3edfce068a",
"main.dart.js": "c58231c75e9a86046e1985e096aa00d6",
"manifest.json": "630e351a14adf514c1c03263ba4ca05f",
"version.json": "67741fea2e7004c3f4b416a1c395b529"};
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
