'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8cffc9a0f1b2a26597bfad1b4531fa5d",
"favicon.ico": "78d281be46da3d641adf7caf63eb9fb6",
"index.html": "39aea18699fd39e9980717357dfde60a",
"/": "39aea18699fd39e9980717357dfde60a",
"main.dart.js": "9ea33f103df9a7d6017fbbefc8bb4c46",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8a2f35709bacb15e2218814a02e4c711",
"assets/AssetManifest.json": "840596ddcc14a44acda20287a357482a",
"assets/NOTICES": "8d1afc0708e15ee7d635a89ccd9cdb81",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/packages/practiscore_bluetooth/assets/beep.mp3": "bdea01eae4166093050fff646bd5165a",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/practiscore_dart/assets/templates/ipsc-ar.json.ru": "1f9a61f158a955edbba55e552be929d6",
"assets/packages/practiscore_dart/assets/templates/ipsc-rf-mini.json": "9cba4693b98a7d865501e0b9df5d9a18",
"assets/packages/practiscore_dart/assets/templates/nra_action.json": "f03eafe3a7d2d16150522ee4d0edc41f",
"assets/packages/practiscore_dart/assets/templates/tpp-wild_bunch.json": "1e65426dd6ce6fbe7e1c2a1b6af407a5",
"assets/packages/practiscore_dart/assets/templates/hf_carbine.json": "1d15a7285d685052636963f827c3da63",
"assets/packages/practiscore_dart/assets/templates/dcaps.json": "456f09a98203d1136d91cbaf24b7570f",
"assets/packages/practiscore_dart/assets/templates/prs.json": "6fe98f3595bce8ecd1a0a0b7d782bf85",
"assets/packages/practiscore_dart/assets/templates/proam-tiebreaker.json": "dc6efe773387c8b827b4bda3ab43bd2b",
"assets/packages/practiscore_dart/assets/templates/tpp_usl.json": "591016cccbf3d42efa425d978d6ec91a",
"assets/packages/practiscore_dart/assets/templates/tpp_url_emg.json": "b110a83761e8fe2d9e0a2da567234f10",
"assets/packages/practiscore_dart/assets/templates/ipsc-ar.json": "51f9cc8b572701435201211d4744bef7",
"assets/packages/practiscore_dart/assets/templates/steel-rcsa.json": "7271b10f66293fc866202c58505fb13a",
"assets/packages/practiscore_dart/assets/templates/read.me": "74c0bd846028b51ea32572f3e583a70a",
"assets/packages/practiscore_dart/assets/templates/ipsc-sg.json.ru": "bab92dd08a7ed2a5ba275c7a9aa99870",
"assets/packages/practiscore_dart/assets/templates/uspsamg.json": "f611adffe6f397e55441d042bcb30628",
"assets/packages/practiscore_dart/assets/templates/ssaa.json": "13484ec7bfb7fbda350cb7266557801f",
"assets/packages/practiscore_dart/assets/templates/tpp_uml_emg.json": "4a7f5aafe5e51e172d55dba35b41e0e9",
"assets/packages/practiscore_dart/assets/templates/asi.json": "68dbbbec7a958d19d4c083f192b17fcb",
"assets/packages/practiscore_dart/assets/templates/proam.json": "2f6683a159b7527054a071f7fbfdae7b",
"assets/packages/practiscore_dart/assets/templates/points-down.json": "25b6b38ea3d1d1a6ef0145090b853e64",
"assets/packages/practiscore_dart/assets/templates/prsplusskills.json": "d21f9906ab1d6c255d8c6e38c4be6c34",
"assets/packages/practiscore_dart/assets/templates/ssaa-rifle.json": "bf5f3014b58bca6b9481b49aaed6e57b",
"assets/packages/practiscore_dart/assets/templates/tpp-stc.json": "8bb656ba136f81751a03f5a946ea8fed",
"assets/packages/practiscore_dart/assets/templates/tpp_upl-tfs.json": "054201319feff15f951643abc5a35348",
"assets/packages/practiscore_dart/assets/templates/vudoo.json": "7bc3676fdddc8bae82907678e9304977",
"assets/packages/practiscore_dart/assets/templates/scsa-blank.json": "37ce36206addc8836f53e235cd653bfb",
"assets/packages/practiscore_dart/assets/templates/s3da.json": "278e82ce19b808eaa7483dd422c19211",
"assets/packages/practiscore_dart/assets/templates/ipsc-rf.json.ru": "21ae60b7ec689ba4c188c931ad8cf83c",
"assets/packages/practiscore_dart/assets/templates/issa.json": "c943f8d6ba0ca4f338c90bd66ce16cbf",
"assets/packages/practiscore_dart/assets/templates/idpa-class.json": "c27527cc6c6ccc5c2c26d3bdf869fde4",
"assets/packages/practiscore_dart/assets/templates/idpa.json": "457979e3dcec2c01e5e61bb963ee1b0c",
"assets/packages/practiscore_dart/assets/templates/ipsc-hg.json.ru": "a356ff6b617a58fdb5f60d31092c92fe",
"assets/packages/practiscore_dart/assets/templates/eass.json": "c4277b05e2fd6242fc12203a079cd9c6",
"assets/packages/practiscore_dart/assets/templates/tpp.json": "b79e82378bea2ccb7d753eb57361720b",
"assets/packages/practiscore_dart/assets/templates/ipsc-sg.json": "3888356ff8d0859ee631a138beadb169",
"assets/packages/practiscore_dart/assets/templates/ipsc-hg.json": "ef861c18c5d4dc0d8d90d8fd7b4868f4",
"assets/packages/practiscore_dart/assets/templates/iasc-multigun.json": "a3cd5b40fd66e2c56e4fb4878d053764",
"assets/packages/practiscore_dart/assets/templates/russian-steel.json.ru": "a4c872cf379f52de802e6d1faec85b5e",
"assets/packages/practiscore_dart/assets/templates/berry-mixed-steel.json": "d09d817cf7eb0a0763c12bb01231424f",
"assets/packages/practiscore_dart/assets/templates/icore.json": "043e1673238328caa2cc9bbbdb702b3f",
"assets/packages/practiscore_dart/assets/templates/usarms.json": "7075eb2f9235c49a7bcb278fc441193b",
"assets/packages/practiscore_dart/assets/templates/tp-gssf.json": "07651eec0fe845901d1a70bc359e9beb",
"assets/packages/practiscore_dart/assets/templates/ipsc-rf.json": "19632bcb97e8f419b6488ef8e8f7c4cc",
"assets/packages/practiscore_dart/assets/templates/idpa-class-pcc.json": "f4166b2dd5ec6362a751407ed3e5b07a",
"assets/packages/practiscore_dart/assets/templates/hitfactor.json": "752e263bfeb43f8cdac7d9a72563117f",
"assets/packages/practiscore_dart/assets/templates/tp.json": "f690c27610c3ccaee4ffd86dd9f5116e",
"assets/packages/practiscore_dart/assets/templates/ssaa-shotgun.json": "7a1de78fda44e4153e683d3fb553fbb6",
"assets/packages/practiscore_dart/assets/templates/tp-prsgasgun.json": "aa6db22c843f5a99b311e99e06ec18d9",
"assets/packages/practiscore_dart/assets/templates/uspsa.json": "d196e85288aff3ecf2fa751d363b603f",
"assets/packages/practiscore_dart/assets/templates/steel-blank.json": "384b78a3f51b48304fcf9fbf80f38dec",
"assets/packages/practiscore_dart/assets/templates/berry-dynamic.json": "db88587192ae4d6d8bc0a302871e3ce2",
"assets/packages/practiscore_dart/assets/templates/tp-sass.json": "ee53bdc50394ec43804d35bd09a54881",
"assets/packages/practiscore_dart/assets/templates/scsa-default.json": "d1faecae88bffd9b06f99aba61eefe29",
"assets/packages/practiscore_dart/assets/templates/nrl-22.json": "c2815eb16f85851ad5e0cac4c9b17411",
"assets/packages/practiscore_dart/assets/templates/tpp_uml_traditional.json": "f82b792c7f033e15167fc640774f6ce9",
"assets/packages/practiscore_dart/assets/templates/ipsc-pcc.json": "579d64676a18689c8f0b6d2af94ddff9",
"assets/packages/practiscore_dart/assets/templates/tp-3gn.json": "c2b4e79b6f7c8243412a5769f29507bc",
"assets/packages/practiscore_dart/assets/templates/mm_challenge.json": "789b1fc82cfb0d6c34c7141e52cbd392",
"assets/packages/practiscore_dart/assets/templates/iasc-pistol.json": "777e9c078b60d7e8efe3070f2d404f88",
"assets/packages/practiscore_dart/assets/templates/berry-scramble.json": "b516a5ea558714cfac23a2155bb9d656",
"assets/packages/practiscore_dart/assets/templates/russian-steel.json": "c477b381aa5ea372c6ccc8deacb5b928",
"assets/packages/practiscore_dart/assets/templates/steel_sasp.json": "8c14d9d0698188bcb2fc49f8b143aa6c",
"assets/packages/practiscore_dart/assets/templates/tpp-3gntenn.json": "5711c787e5c665aa2145ea6bfa5104a5",
"assets/packages/practiscore_dart/assets/templates/tpp_url_traditional.json": "aef97776fff22120eb7d13c79a951845",
"assets/packages/practiscore_dart/assets/templates/tpp_url-tfs.json": "ff69f518249e67bcd5fff1b0448150e6",
"assets/packages/practiscore_dart/assets/classifiers/classifier_mmchallenge.json": "bc15708f214953d5cadda31adcd816c1",
"assets/packages/practiscore_dart/assets/classifiers/classifier_prs.json": "c4c5b3e71a733ff23df6031a420eb245",
"assets/packages/practiscore_dart/assets/classifiers/classifier_icore.json": "56bb454d9afb46bd60cf44a0c7b7b01e",
"assets/packages/practiscore_dart/assets/classifiers/classifier_idpa.json": "8836a0b360709f5269a0a2be6f245c95",
"assets/packages/practiscore_dart/assets/classifiers/classifier_prsgas.json": "d932bbe5a11ca8047ddb71471d7049ff",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/03-05.png": "ae46260c24d0e6035928346c1ff349ea",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/03-11.png": "3893bf8f69d5a97e2b7ef7e0c4e927c0",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/06-09.png": "a116f82b88b6a267761ac613c86d803a",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-21.png": "fc0abdd897f56ca740b13a7f545f309b",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-35.png": "16ae4dea4009bfab3a6bfed94276f40a",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/18-09.png": "3cd17a74c23281133b7cf9c1855157d3",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-09.png": "53145170b106dc26b488242a455c4f50",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/18-08.png": "000cc4f775e08abb4a6521af20692f75",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/06-08.png": "7edd2086ff243af6b49fada0adecd8fc",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/03-10.png": "5cce0b099f44f2acd6be37af70ddbab3",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/03-04.png": "d9bce383dc1b2fc93fb1533247bf6e2d",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/13-01.png": "a3e7d49989c008da423b2e4f88ebeac0",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/13-03.png": "8b9c99ac8841b5cb1f673308f43f7966",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/03-12.png": "a7dd1097bac3fc80e562ccc0635af186",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-23.png": "b318f5905c09c85031fe35592c70aed5",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-37.png": "46b4d38c2079d06e02044f958b68c85a",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-59.png": "f53fa9aa11fd4d4c936ed5122d38e384",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/03-07.png": "6c57e178cfc744e603a20bccd7990d9f",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/13-02.png": "e952562d6d852856fc16b2d2743332b4",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/13-06.png": "318bb7e6afe8cfba12e74c971796b62d",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/03-03.png": "10c04ae350224a619be4eec6893844cf",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-61.png": "be5fd4b18c0c731fd695ddfea5b2964c",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-33.png": "2c016d16318e60b04cc911b0e4f50113",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-27.png": "a530eec74f65421219bc8c8f7278dd54",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-48.png": "8889f0e64eae948583db8777dbda5f06",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/03-02.png": "8ae7ac4425d632bb17861665dd5c1bc0",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/13-07.png": "a4ff81e905d7b301641b6e2935ef4e34",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/13-05.png": "2ea8fd29568f5bb34d61eb2cf3037a14",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/03-14.png": "f5b5f5196371a1d5104a24b0a8d48277",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-62.png": "98dbdd326635615c376deb0b685b1819",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-31.png": "e1e821bcb91132204792f868582a6234",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-25.png": "caa3abea45c54e945877c34a4913c537",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-19.png": "05719694efeb21e0ac8de2ea397b8ec0",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-63.png": "e08699a2ede1b2bf833200cb020986f5",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/13-04.png": "34a8538693ca3390c9b6034bce365111",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/09-13.png": "17065a177cbf435595254c502ed9941c",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/09-07.png": "e991a5c6a48892b934e802590e45a214",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/19-02.png": "77c59fc0a89233096ea5b3443e47eb16",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-10.png": "66da9cd44431ae0b33414241af301f86",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-57.png": "a0f6972c9cad8534e8b035521c59fb92",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-43.png": "cb21a01dcde8245a79c519dca1557006",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-11.png": "24cd96aebb43ccbc48f3191ec593eb6f",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/19-03.png": "96c8a88b07ed2be2df826b9e6ad9cb31",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/09-06.png": "b4ef38cafafdebc04796c530091ebd26",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/09-04.png": "c82c2229784da26e5e0c0f2ca6fe6b42",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/09-10.png": "c9f6517ce5f8f21e58f52c10b594dd9a",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/19-01.png": "c6e6951a78d535032374aee135f04f1b",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-07.png": "2477127732caa165ce7547e502044826",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-13.png": "a12d3f579ed1c384cf3d75d5cf1e0a3a",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-55.png": "f6e4438a0f2aaf3e0d4c0c7aeb73d0d1",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-41.png": "6ce129e4e38b1c9b352595aaab354a89",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-69.png": "c099b42b053e1cc27370dbff973b4069",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-12.png": "fe93db189c25499b86b4c5878b2a75ba",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/09-11.png": "6e05ee03b89f1231353d36833ad7c602",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/09-05.png": "8c0896934515937096ea8f130d9a6a4b",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/09-01.png": "4e67a3621d41befbf484489bc79bc76b",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/19-04.png": "3f7ad732e973371e9fbe1ec30133e1d8",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-02.png": "4e207df5cb37de45f5f7fb4a72877bb2",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-16.png": "9475ad1d9635c122ed1b2cc0a4c3a228",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-45.png": "7cf40a90f98c85e287a0b399004b1568",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-51.png": "2b435f8863d7020dba397ddcbf8e1687",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/09-14.png": "de4bf783209c65f97dd679c3b6428ade",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/09-02.png": "1d41b71ab552f3160a17018be2ab772e",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-47.png": "eeb0677da55df04a561eb6467456a534",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-53.png": "71dbd372feb3f96d28c123772235f6cb",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-28.png": "7e3bf09dab7364099ad7b0865b253959",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-14.png": "39107baf4c99db2ad92f1721bbdb7363",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/09-03.png": "939b83bfdc3db97957cd9bf029954992",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-19.png": "2e60c7da4b47075ee1a0e62b66c1e571",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-63.png": "ef7aad80a4f86cb80ba03e9d62539888",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-24.png": "2a3e0763cf79c9e14a01dd67138c48f1",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-49.png": "1cf773a5187aa05137a78718fa7a55a5",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-61.png": "0319b7ed0ff3b58629eaf5e2438afd51",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-33.png": "330877900f524aca1696ad29e6386d58",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/09-08.png": "19c02b79adaf6bce988d37f59380dc60",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-23.png": "9e6e248a31a3b3e4f7c79e1fd2ed4e28",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-59.png": "cd735b80203caf1e152d9d341e9c966d",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-71.png": "222721752cd118980cd79e1042bfde9c",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-65.png": "26567deba087b208760181edc09b6590",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-22.png": "c8a451e589f5932e87a8c255acba6356",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/09-09.png": "379b3d6c301cd4e580e93b2ec3e15ca4",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-34.png": "9864a4de0a6dc00d4ff29457ab6ad708",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-08.png": "57acba087371e233e1f6e3e0b4781428",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-73.png": "b8d349655f37ed07df5c4a775865e447",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-67.png": "669de16e9fd89327bfa80994c5deb7fc",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-09.png": "105c1ba080d2a858b69c4fa374397b2e",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-21.png": "c909ea5c28c7a8b4be8fd5bb1050e583",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/13-09.png": "50177a0d43e60458225dc897c25d7558",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/03-18.png": "e4fd9161ee9b4e4dcce5e8e38b4ce1a4",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/08-05.png": "d164ffb7b9078016cf3e261797595fd5",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-46.png": "e6ed9f3af0cba962d85c1776523d5bbf",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-29.png": "726b2f6f7e20941012ec632198012049",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/18-01.png": "82da258c4e16df76ef4f00d3701a78b9",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-15.png": "41d4f14bbb0dfaaee73612f79fbcd62e",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-01.png": "ea8d257ecd8d0a749cfe100c1903fd2e",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/06-01.png": "84964ba233b7cf1b4a7c89fd09ed80bb",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-47.png": "5f67dd89a530a573d10bc155eb19c1b6",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-53.png": "2338e787efaf119cebd34f3a40c870fe",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/13-08.png": "43a143ca10c4145ff0a518b9a8ba1947",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/08-06.png": "bbade23c2b4090a01827d0d36b5758d0",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/06-03.png": "c74131015c2a119ce026c6f9cfd30f04",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-51.png": "00f978628dfc8829d5430bd28be8921a",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-17.png": "4263454d277081b8148525b8c7f77342",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/18-03.png": "5d5aa1ccc8cc198d41e502bfc9c1335e",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-03.png": "a57c2277efad5dc0c0e5dd75031187fb",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/18-02.png": "ea6f3b3436359478619711201b445e27",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/06-02.png": "704720a5bb0c534fa516c03470990d0a",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-40.png": "497a9c5714f1a68ef05702fdc157879b",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/06-06.png": "51b1463ba8ab7a96ef4502c5231435a5",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/08-03.png": "f3b2410aa9c234b982a9d3913bce99e7",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/20-02.png": "e372c133d08865f22a737202eaf3f91e",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/18-06.png": "66dd9887c3c094178cda7718c57b244d",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-07.png": "af8c88281aae4156c47acf7b46b4650c",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/18-07.png": "462693893a4c89d1fee64cb36d4c3752",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-13.png": "585b5666c49b16feda83ade12dbe3dcb",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/20-03.png": "da274f39a1e25e40d8cb6b0f4dcfdb34",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/08-02.png": "d551fa33fb2793091d6d3776db353864",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/06-07.png": "b569cacc968d45dc42adf1017de2f0f4",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-41.png": "cdb3cc5a7fbc702dd5d0088867242411",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/03-09.png": "4a10ca0872ac6473b3b22a9e9b0733a2",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-57.png": "d4e8686d7c60a12235d8685f3e2fdcc6",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/06-05.png": "3120063bce0c2797e68bdd33ea9a23e0",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/20-01.png": "f040e7e0e8f25120d819c479fa1b1ac3",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-39.png": "f5f0c6706a3ec1aa57fc3ede8684971d",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-05.png": "f7c05f582c4aafac925faddb859124bc",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/C-11.png": "5689e3705bd11f9fd18f8849b42128de",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/18-05.png": "4009ac040777c79d90a286d98c4bc764",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/18-04.png": "6837c9662e583b9e4ac9118dc1902a37",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/08-01.png": "ec174336d2d181581c9421b720c4cf06",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/06-04.png": "8cab38de0446dda6cc2932dd1313ae8f",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-42.png": "20be9e5fee992be7cde6b393ff0a9c76",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/99-56.png": "9502c11f7ceb0e4feba8f53841277980",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/06-10.png": "5b5a79cf48fd86014e682a95233362ca",
"assets/packages/practiscore_dart/assets/classifiers/uspsa/03-08.png": "fbed17661b91c4999f0c8eeb90d2417a",
"assets/packages/practiscore_dart/assets/classifiers/classifier_nrl22.json": "a2ac64f0b66959d8cfac86879d3e8ba5",
"assets/packages/practiscore_dart/assets/classifiers/steelChallenge/RS-006.png": "d927eb39999efbf29fbac1180eac140f",
"assets/packages/practiscore_dart/assets/classifiers/steelChallenge/RS-007.png": "fbb5f1bd76ea4471a8464d4140abbead",
"assets/packages/practiscore_dart/assets/classifiers/steelChallenge/RS-005.png": "484edc8eeb52ec7411f597945a15c7ea",
"assets/packages/practiscore_dart/assets/classifiers/steelChallenge/RS-004.png": "6cf7a506250213306e39877a85522928",
"assets/packages/practiscore_dart/assets/classifiers/steelChallenge/RS-001.png": "a8d65d22c931330add067940677779cc",
"assets/packages/practiscore_dart/assets/classifiers/steelChallenge/sasp-in-and-out.png": "7b7527f4215d8b9064931a0d3360330d",
"assets/packages/practiscore_dart/assets/classifiers/steelChallenge/RS-003.png": "4724fc3ed06516d0c5838d2a7459f3e9",
"assets/packages/practiscore_dart/assets/classifiers/steelChallenge/RS-002.png": "17bf284f4cfda7d405ff005d9486d873",
"assets/packages/practiscore_dart/assets/classifiers/steelChallenge/SC-108.png": "59a9baa03efe0e50b31b81b6c604940b",
"assets/packages/practiscore_dart/assets/classifiers/steelChallenge/sasp-focus.png": "72962f14daeb3f731b013fd6f2dbd243",
"assets/packages/practiscore_dart/assets/classifiers/steelChallenge/sasp-v-for-v.png": "d67beeb48d6de3dd320b714a3ac0a74b",
"assets/packages/practiscore_dart/assets/classifiers/steelChallenge/SC-101.png": "68042d23390b767b81f679e911e4c056",
"assets/packages/practiscore_dart/assets/classifiers/steelChallenge/SC-102.png": "3c12a1cd321ea873289d228c1552f91b",
"assets/packages/practiscore_dart/assets/classifiers/steelChallenge/SC-103.png": "5cce47839606c5a5fe50bf9478562e6f",
"assets/packages/practiscore_dart/assets/classifiers/steelChallenge/SC-107.png": "f9d32ccfa302fa36f7ebfa57e06e7270",
"assets/packages/practiscore_dart/assets/classifiers/steelChallenge/SC-106.png": "84ab33de7d306b464043532898e4a81a",
"assets/packages/practiscore_dart/assets/classifiers/steelChallenge/sasp-go-fast.png": "fda8d2dbcdad961f20b642f2a739c80c",
"assets/packages/practiscore_dart/assets/classifiers/steelChallenge/SC-104.png": "095902f45afadae192d2d0d0ebbbf5ef",
"assets/packages/practiscore_dart/assets/classifiers/steelChallenge/SC-105.png": "2caf9b46026e8c3df0ff1c27ce9537a5",
"assets/packages/practiscore_dart/assets/classifiers/steelChallenge/sasp-m.png": "790a16051d2a42db7a5ee66d5327104c",
"assets/packages/practiscore_dart/assets/classifiers/steelChallenge/sasp-exclamation.png": "2faa349accf5d7893e3787c13a0e18a9",
"assets/packages/practiscore_dart/assets/classifiers/steelChallenge/RS-008.png": "5eb30bc621294eed24ba2ef0bd1028df",
"assets/packages/practiscore_dart/assets/classifiers/steelChallenge/sasp-speed-trap.png": "6b6a950ff0bdd69a11e3b17dba22aa10",
"assets/packages/practiscore_dart/assets/classifiers/read.me": "693fc818934a7935d7bd2e0b667f7de9",
"assets/packages/practiscore_dart/assets/classifiers/classifier_rs.json": "ccb6e932fc1e2c1e0dfe0ce1533830c2",
"assets/packages/practiscore_dart/assets/classifiers/classifier_uspsa.json": "165afbec800ef81e6905170f3ea2b091",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-037.png": "f8cba86d01d4095af30e77b6431cfcaa",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-023.png": "67c45702e9eed8f6777569cd8521b14d",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-022.png": "62168ab987d365a8732924f0f7fc9488",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-036.png": "9a96aed4fdb50706d422eff862db7029",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-020.png": "e87aa78176a204b5f52079823a83d29e",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-034.png": "1fba3b1f2db2635ddb68622fc9eee46e",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-008.png": "591ce40fc5876fa97a42190db7347695",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-009.png": "56fa749e37f0452babe433bb2b59498b",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-035.png": "40bcc0b3ae9e5a3de92330b95739282a",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-021.png": "14baad8369a1876ed35223e0e2f81ca1",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-019.png": "9cccf541934d1594185f26b6a6c81976",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-025.png": "3c7c94b344fcfab872a1ce7a2fde6bdf",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-031.png": "f7dd372c8b7ed4552e857c63763206ac",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-030.png": "40a5ee44a7bb9f0e04641620e8f9ba9b",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-024.png": "5bba5618975ff7a7c2f050daf9bc45b8",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-018.png": "73bb003c884be8efb6ad74a9be7b07cf",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-032.png": "4134dcff7d21927c6ba8c076367c9324",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-026.png": "4a7eded7235a807125cc8cec5926b94e",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-027.png": "f1811adb941a224e5d8caec931557113",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-033.png": "29d63e168b3f744a72fbe3214dd7be03",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-040.png": "3e1e32cecc400b459feb6d9f51d54297",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-041.png": "2b986afd45d6f81723b2a5d07af2d2d4",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-043.png": "9363bd02d36514ec863d30937ce75019",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-042.png": "5abd078f4b9e5cef2442d8ae0c559228",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-046.png": "7e118d8bdb675af0e20a57716007b38a",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-052.png": "258ed4915fb1d9f9c2841bda25e21a12",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-053.png": "f04bc95080d59fd07db563b95fb10a7a",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-047.png": "eebc17095d903a7947c68eb9a5b44bba",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-051.png": "32c2019211bee69acf8f16232ec23a91",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-045.png": "25abf472e1079ea9ac59639e5928db73",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-044.png": "0ac690c1ed161aecb86fe5198c686f3c",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-050.png": "87e5b90da918b20daa52d2fd49038020",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-049.png": "6bc16e87abf88ed206a21ec1c581e9f6",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-048.png": "91e3ce29d494383af7beaa6d0af6142f",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-016.png": "a1436887e55bfbf3934fb275d5e50f39",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-002.png": "ef558c6ba73aa54e30f986526f272cc2",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-003.png": "19cdaa743cbc7522c98efb2472702ca5",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-017.png": "195e23cbbbedf0c225f561bab3a54463",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-001.png": "ef558c6ba73aa54e30f986526f272cc2",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-015.png": "050094c3d36a8fc8f4b0c3cfee2bf7dd",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-029.png": "5095851fcf73e1d96903870d30f03888",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-028.png": "bd0687ae1134440cf509c1c87cbb151f",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-014.png": "78e51b8ea270c278d32c2acd1ac1e2ea",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-038.png": "c9dd4810e0a953ea20575cc0a4bb131e",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-004.png": "3dd9f4292c19d5e143ba3d302d27ad74",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-010.png": "d5b660955dea3074022ba9a4ab4a10da",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-011.png": "59f9f29166353ef5924aa1e8b0852d3e",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-005.png": "7754996879b5a4b16a10c9bb1d6017ce",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-039.png": "b0f31e391e85eef291d6aab563736f46",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-013.png": "ac4e27a16975adbff38074a458d51b29",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-007.png": "9d233e5b30399597fd1e24963866bb6e",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-006.png": "692950cd11b73373280c67acd08b0325",
"assets/packages/practiscore_dart/assets/classifiers/icore/CS-012.png": "d49085f22114c65a7a9e84e6657526d7",
"assets/packages/practiscore_dart/assets/classifiers/classifier_3gn.json": "73ad85c069376e029ffdddbe412a37fd",
"assets/packages/practiscore_dart/assets/classifiers/classifier_ipsc.json": "33d4d7058b379cc1ad1efc6a021c5f54",
"assets/packages/practiscore_dart/assets/classifiers/classifier_sc.json": "873e34a2252831310ae33bb2ff7538da",
"assets/packages/practiscore_dart/assets/classifiers/idpa/2017_1.png": "4b81c2689531b02d1d7dbcf101531ebe",
"assets/packages/practiscore_dart/assets/classifiers/idpa/2017_2.png": "4b81c2689531b02d1d7dbcf101531ebe",
"assets/packages/practiscore_dart/assets/classifiers/idpa/2017_3.png": "4b81c2689531b02d1d7dbcf101531ebe",
"assets/packages/practiscore_dart/assets/classifiers/idpa/2018_PCC_1.png": "6d28995f0ff1425c00ad91796aadd970",
"assets/packages/practiscore_dart/assets/classifiers/idpa/2018_PCC_3.png": "6d28995f0ff1425c00ad91796aadd970",
"assets/packages/practiscore_dart/assets/classifiers/idpa/2018_PCC_2.png": "6d28995f0ff1425c00ad91796aadd970",
"assets/packages/practiscore_dart/assets/classifiers/idpa/2019_PCC_1.png": "c7cdfc28b09ab8517ff91d55d96ee627",
"assets/packages/practiscore_dart/assets/classifiers/idpa/2018_5x5.png": "b74e7c035337b68f1b72201a92304c6a",
"assets/packages/practiscore_dart/assets/classifiers/idpa/2019_PCC_3.png": "c7cdfc28b09ab8517ff91d55d96ee627",
"assets/packages/practiscore_dart/assets/classifiers/idpa/2019_PCC_2.png": "c7cdfc28b09ab8517ff91d55d96ee627",
"assets/packages/practiscore_dart/assets/classifiers/idpa/2.png": "764e559454ecb434905a5efc2706f44b",
"assets/packages/practiscore_dart/assets/classifiers/idpa/3.png": "764e559454ecb434905a5efc2706f44b",
"assets/packages/practiscore_dart/assets/classifiers/idpa/1.png": "764e559454ecb434905a5efc2706f44b",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/i18n/ru.json": "be0922b9ae2c13e5de75d464ca34a1c7",
"assets/assets/i18n/en.json": "f5691b29528b88daf3d61bdfa1d581f2",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
