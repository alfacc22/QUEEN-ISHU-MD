/*
███████╗  ██╗   ██╗ ███████╗ ███████╗ ███╗   ██╗       ███   █████████    ███     ███    ███     ███
██╔═══██╗ ██║   ██║ ██╔════╝ ██╔════╝ ████╗  ██║       ███   ███          ███     ███    ███     ███
██║   ██║ ██║   ██║ █████╗   █████╗   ██╔██╗ ██║       ███   █████████    ███████████    ███     ███
██║▄▄ ██║ ██║   ██║ ██╔══╝   ██╔══╝   ██║╚██╗██        ███         ███    ███     ███    ███████████
╚██████╔╝ ╚██████╔╝ ███████╗ ███████╗ ██║ ╚████║       ███   █████████    ███     ███      ███████
created by laksidu
 DONT COPY
*/

const _0x3626ac=_0x8877;(function(_0x432838,_0x2e94a0){const _0x2ad91c=_0x8877,_0x198e6b=_0x432838();while(!![]){try{const _0x2a6d36=-parseInt(_0x2ad91c(0x20a))/0x1*(-parseInt(_0x2ad91c(0x22f))/0x2)+parseInt(_0x2ad91c(0x22b))/0x3*(parseInt(_0x2ad91c(0x1ec))/0x4)+-parseInt(_0x2ad91c(0x1d6))/0x5+parseInt(_0x2ad91c(0x21a))/0x6*(-parseInt(_0x2ad91c(0x1d5))/0x7)+parseInt(_0x2ad91c(0x1f9))/0x8*(-parseInt(_0x2ad91c(0x1db))/0x9)+-parseInt(_0x2ad91c(0x22c))/0xa*(-parseInt(_0x2ad91c(0x1e8))/0xb)+parseInt(_0x2ad91c(0x1f1))/0xc*(parseInt(_0x2ad91c(0x21b))/0xd);if(_0x2a6d36===_0x2e94a0)break;else _0x198e6b['push'](_0x198e6b['shift']());}catch(_0x5aef24){_0x198e6b['push'](_0x198e6b['shift']());}}}(_0x483c,0x979bc));const fs=require('fs'),path=require(_0x3626ac(0x1c9)),{readEnv}=require(_0x3626ac(0x229)),{cmd,commands}=require('../command'),{fetchJson}=require(_0x3626ac(0x1ff)),{downloadMediaMessage}=require(_0x3626ac(0x1cc));function getContentType(_0x46131e){const _0x3aad60=_0x3626ac;if(!_0x46131e)return null;if(_0x46131e['conversation'])return _0x3aad60(0x20c);if(_0x46131e[_0x3aad60(0x226)])return _0x3aad60(0x1d4);if(_0x46131e['videoMessage'])return _0x3aad60(0x21c);if(_0x46131e['audioMessage'])return _0x3aad60(0x21d);if(_0x46131e[_0x3aad60(0x1f5)])return'document';return null;}let isStatusListenerInitialized=![];function getRandomResponse(){const _0x21215a=_0x3626ac,_0x37426e=[_0x21215a(0x206),_0x21215a(0x1e2),_0x21215a(0x1f2),_0x21215a(0x1eb),'Keep\x20it\x20up!👍',_0x21215a(0x208),_0x21215a(0x1e9),_0x21215a(0x1d7),_0x21215a(0x216),'This\x20made\x20me\x20smile!😊',_0x21215a(0x233),_0x21215a(0x21e),_0x21215a(0x209),_0x21215a(0x202),'Killing\x20it!🎯',_0x21215a(0x200),'Well\x20done!👏',_0x21215a(0x1e3),_0x21215a(0x221),_0x21215a(0x1ea),'Good\x20times!⏳',_0x21215a(0x1f4),'Too\x20good!😎','So\x20cool!🆒',_0x21215a(0x1fd),_0x21215a(0x219),_0x21215a(0x1da),'Keep\x20shining!🌟',_0x21215a(0x22e),_0x21215a(0x1fe),_0x21215a(0x207),_0x21215a(0x22d),_0x21215a(0x20f),'Pure\x20genius!🤯','Incredible!😲',_0x21215a(0x212),_0x21215a(0x222),_0x21215a(0x22a),'You\x20got\x20style!🕶️',_0x21215a(0x224),_0x21215a(0x1d2),_0x21215a(0x1e0),_0x21215a(0x1e7),_0x21215a(0x218),'You’re\x20amazing!🌟',_0x21215a(0x1cb),_0x21215a(0x1d3),'So\x20chill!😎',_0x21215a(0x1df),_0x21215a(0x1dc),_0x21215a(0x1e6),_0x21215a(0x1ef),_0x21215a(0x20d),'So\x20funny!😂',_0x21215a(0x1e5),_0x21215a(0x1f0),_0x21215a(0x211),_0x21215a(0x1ca),_0x21215a(0x205),'Respect!🙌','Big\x20energy!💥',_0x21215a(0x20e),_0x21215a(0x1c8),_0x21215a(0x217),'You\x20always\x20deliver!📦','Never\x20disappoint!😎',_0x21215a(0x232),_0x21215a(0x1f8),'Too\x20cool\x20for\x20words!❄️',_0x21215a(0x204),_0x21215a(0x1fb),'Flawless!👌',_0x21215a(0x1cd),_0x21215a(0x1de),'You’re\x20a\x20star!🌟',_0x21215a(0x1ed),_0x21215a(0x210),_0x21215a(0x214),_0x21215a(0x1fc),_0x21215a(0x21f),_0x21215a(0x1ce),_0x21215a(0x223),'Can’t\x20get\x20enough\x20of\x20this!😍',_0x21215a(0x220),_0x21215a(0x228),_0x21215a(0x1e1),'Such\x20a\x20blessing!🙏',_0x21215a(0x1d9),_0x21215a(0x230)];return _0x37426e[Math[_0x21215a(0x1f3)](Math['random']()*_0x37426e[_0x21215a(0x203)])];}function _0x8877(_0x55b0e8,_0x5efea1){const _0x483ce9=_0x483c();return _0x8877=function(_0x8877ec,_0x103029){_0x8877ec=_0x8877ec-0x1c8;let _0x590461=_0x483ce9[_0x8877ec];return _0x590461;},_0x8877(_0x55b0e8,_0x5efea1);}function _0x483c(){const _0x5c919f=['participant','text','You\x20inspire\x20me!✨','Iconic!🎥','Too\x20smooth!😏','Incredible\x20work!✨','This\x20is\x20next\x20level!🚀','Perfection!👌','messages','Great\x20choice!🎯','New\x20status\x20posted\x20by\x20💥:\x20','Loving\x20this!💖','This\x20is\x20legendary!🏆','Great\x20stuff!🎯','Making\x20moves!🚀','1255218QUWPOA','52PrQkkZ','video','audio','You’re\x20on\x20fire!🔥','This\x20wins\x20the\x20internet!🏆','So\x20peaceful!🌿','That’s\x20the\x20spirit!💪','Well\x20deserved!🎉','This\x20just\x20made\x20my\x20day!😊','Epic!🔥','key','imageMessage','conversation','Really\x20speaks\x20to\x20me!💬','../lib/database','You\x20rock!🤘','414EGqfWR','10lIqNEo','This\x20is\x20gold!🥇','Awesome!🌈','146366NMoCXR','Always\x20on\x20top!🔝','pushName','On\x20point!🔝','Deep\x20stuff!🤔','So\x20uplifting!💫','path','Mind\x20blown!💥','This\x20is\x20wild!🔥','@whiskeysockets/baileys','Can\x27t\x20stop\x20laughing!🤣','Best\x20thing\x20I’ve\x20seen!👀','log','\x20Caption:\x20','body','Top-notch!🎩','I\x20love\x20this!❤️','image','21fnNQYD','5639560smallJ','So\x20true!👌','No\x20caption\x20provided.','Love\x20this\x20vibe!🌈','Stay\x20blessed!🙏','4905ERqPWf','Vibes\x20on\x20point!💯','No\x20media','Straight\x20facts!✅','This\x20slaps!🎶','Pure\x20class!🕴','That\x27s\x20fire!🔥','Amazing!😍','Inspiring!✨','message','Hilarious!🤣','Can\x27t\x20stop\x20watching!👀','Well\x20done,\x20mate!👍','2617527ILKgtw','That’s\x20lit!⚡','Brilliant!💡','This\x20is\x20awesome!👏','19524XIoXCa','So\x20relaxing!🌊','\x20Media\x20Type:\x20','That’s\x20genius!💡','Too\x20real!🤯','4649064gmOMmB','You\x20nailed\x20it!💯','floor','You’re\x20glowing!🌟','documentMessage','ephemeralMessage','true','Solid\x20work!💪','3392NmbTVV','STATES_SEEN_MESSAGE_SEND_SEND','You\x20did\x20that!👏','Keep\x20grinding!💪','You\x20got\x20this!💪','Well\x20played!🏅','../lib/functions','Legendary!🏆','status@broadcast','Such\x20a\x20vibe!🎶','length','Crushing\x20it!🏋️','Such\x20a\x20masterpiece!🎨','Great\x20one!🔥','Good\x20vibes\x20only!✌️','Well\x20said!🙌','Totally\x20agree!✅','2DaWWza'];_0x483c=function(){return _0x5c919f;};return _0x483c();}async function initializeStatusListener(_0x16ca52){if(isStatusListenerInitialized)return;const _0xd8d185=await readEnv();_0x16ca52['ev']['on']('messages.upsert',async _0x50a49b=>{const _0x541f1c=_0x8877;_0x50a49b=_0x50a49b[_0x541f1c(0x213)][0x0];if(!_0x50a49b[_0x541f1c(0x1e4)])return;_0x50a49b[_0x541f1c(0x1e4)]=getContentType(_0x50a49b[_0x541f1c(0x1e4)])===_0x541f1c(0x1f6)?_0x50a49b[_0x541f1c(0x1e4)][_0x541f1c(0x1f6)][_0x541f1c(0x1e4)]:_0x50a49b[_0x541f1c(0x1e4)];if(_0x50a49b['key']&&_0x50a49b[_0x541f1c(0x225)]['remoteJid']===_0x541f1c(0x201)){const _0x5da0e3=_0x50a49b[_0x541f1c(0x225)][_0x541f1c(0x20b)],_0x55edc3=_0x50a49b[_0x541f1c(0x231)]||_0x5da0e3,_0x239907=getContentType(_0x50a49b['message']),_0x471e91=_0x50a49b[_0x541f1c(0x1e4)][_0x541f1c(0x227)]||_0x50a49b[_0x541f1c(0x1e4)]['caption']||_0x541f1c(0x1d8);console[_0x541f1c(0x1cf)](_0x541f1c(0x215)+_0x55edc3+_0x541f1c(0x1ee)+(_0x239907||_0x541f1c(0x1dd))+_0x541f1c(0x1d0)+_0x471e91);if(_0xd8d185[_0x541f1c(0x1fa)]===_0x541f1c(0x1f7)){const _0x5e237b=getRandomResponse();await _0x16ca52['sendMessage'](_0x5da0e3,{'text':_0x5e237b},{'quoted':_0x50a49b});}}}),isStatusListenerInitialized=!![];}cmd({'on':_0x3626ac(0x1d1)},async(_0x4c688a,_0x2be483,_0xce736e,{from:_0x143702,body:_0xb9b2ed,isOwner:_0x2799bb})=>{await initializeStatusListener(_0x4c688a);});