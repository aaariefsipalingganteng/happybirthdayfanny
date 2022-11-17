(function ($) {
  "use strict";
  
  if($('.playlist').length == 0) return;

  var playlist = $( '.playlist' ).mepPlaylist({
    audioHeight: '40',
    audioWidth: '100%',
    videoHeight: '40',
    videoWidth: '100%',
    audioVolume: 'vertical',
    mepPlaylistLoop: true,
    alwaysShowControls: true,
    mepSkin: 'mejs-audio',
    mepResponsiveProgress: true,
    mepSelectors: {
      playlist: '.playlist',
      track: '.track',
      tracklist: '.tracks'
    },
    features: [
      'meplike',
      'mepartwork',
      'mepcurrentdetails',
      'mepplaylist',
      'mephistory',
      'mepprevioustrack',
      'playpause',
      'mepnexttrack',
      'progress',
      'current',
      'duration',
      'volume',
      'mepicons',
      'meprepeat',
      'mepshuffle',
      'mepsource',
      'mepbuffering',
      'meptracklist',
      'mepplaylisttoggle',
      'youtube'
    ],
    mepPlaylistTracks: [
        {
            "id": "item-5",
            "title": "THANK YOU 4 LOVIN’ ME",
            "except": "Verum hoc idem saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/4.jpg" },
            "src": "../html/audio/THANKYOU4LOVINME.mp3",
            "meta": {
                "author": "Paul Partohap",
                "authorlink": "#",
                "date": "09.05.2016",
                "category": "Electro",
                "play": 3340,
                "like": 100,
                "duration": "4:29"
            }
        },
        {
            "id": "item-2",
            "title": "Mata Ke Hati",
            "except": "Hidem saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/2.jpg" },
            "src": "../html/audio/HIVI_MataKeHati(OfficialMusic).mp3",
            "meta": {
                "author": "Hivi!",
                "authorlink": "#",
                "date": "02.05.2016",
                "category": "Jazz",
                "play": 30,
                "like": 10,
                "duration": "3:23"
            }
        },
        {
            "id": "item-3",
            "title": "P.S. I LOVE YOU",
            "except": "Tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/27.jpg" },
            "src": "../html/audio/Paul Partohap - P.S. I LOVE YOU (Lyrics)_8I2mjVXR9vk.mp3",
            "meta": {
                "author": "Paul Partohap",
                "authorlink": "#",
                "date": "09.04.2016",
                "category": "DJ",
                "play": 300,
                "like": 10,
                "duration": "4:01"
            }
        },
        {
            "id": "item-4",
            "title": "Janji Kita",
            "except": "Verum hoc idem saepe faciamus inguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/15.jpg" },
            "src": "../html/audio/Nuca & Mahalini - Janji Kita _ Lirik Lagu Indonesia_KwFp_X-48XY.mp3",
            "meta": {
                "author": "Mahalini, Nuca",
                "authorlink": "#",
                "date": "04.05.2016",
                "category": "Electro",
                "play": 320,
                "like": 20,
                "duration": "4:35"
            }
        },
        {
            "id": "item-1",
            "title": "Pandangan Pertama",
            "except": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Nihil illinc huc pervenit.",
            "link": "#",
            "thumb": { "src": "images/13.jpg" },
            "src": "../html/audio/RanPandanganPertama.mp3",
            "meta": {
                "author": "RAN",
                "authorlink": "#",
                "date": "30.05.2016",
                "category": "Blue",
                "tag": "Holiday",
                "play": 3200,
                "like": 210,
                "duration": "5:00"
            }
        },
        {
            "id": "item-6",
            "title": "Hati-Hati di Jalan",
            "except": "Tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/10.jpg" },
            "src": "../html/audio/TULUS - Hati-Hati di Jalan (Official Lyric Video)__N6vSc_mT6I.mp3",
            "meta": {
                "author": "Tulus",
                "authorlink": "#",
                "date": "09.04.2016",
                "category": "Nature",
                "play": 330,
                "like": 220,
                "duration": "4:02"
            }
        },
        {
            "id": "item-7",
            "title": "Semenjak Ada Dirimu",
            "except": "Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/6.jpg" },
            "src": "../html/audio/Andity - Semenjak Ada Dirimu Lyrics_VVyuaZhl3sc.mp3",
            "meta": {
                "author": "Andity",
                "authorlink": "#",
                "date": "05.05.2016",
                "category": "Pop",
                "play": 200,
                "like": 510,
                "duration": "3:51"
            }
        },
        {
            "id": "item-8",
            "title": "Bumi Dan Bulan",
            "except": "Ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/9.jpg" },
            "src": "../html/audio/HIVI_ - Bumi dan Bulan (Official Music Video)_je9okpHFZp0.mp3",
            "meta": {
                "author": "Hivi!",
                "authorlink": "#",
                "date": "09.04.2016",
                "category": "Radio",
                "play": 400,
                "like": 220,
                "duration": "4:27"
            }
        },
        {
            "id": "item-9",
            "title": "High School in Jakarta",
            "except": "Tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/8.jpg" },
            "src": "../html/audio/NIKI - High School in Jakarta (Official Music Video)_d4CF4km1rUQ.mp3",
            "meta": {
                "author": "NIKI",
                "authorlink": "#",
                "date": "02.04.2016",
                "category": "Jazz",
                "play": 4500,
                "like": 2310,
                "duration": "3:59"
            }
        },
        {
            "id": "item-10",
            "title": "Until I Found You",
            "except": "Litatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/7.jpg" },
            "src": "../html/audio/Stephen Sanchez - Until I Found You (Lyrics)_q5NdKxs3Nv4.mp3",
            "meta": {
                "author": "Postiljonen",
                "authorlink": "#",
                "date": "02.04.2016",
                "category": "Soul",
                "play": 860,
                "like": 240,
                "duration": "2:54"
            }
        },
        {
            "id": "item-11",
            "title": "Fall In Love Alone",
            "except": "Saepe faciamus. Quid ad utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/11.jpg" },
            "src": "../html/audio/Stacey Ryan - Fall In Love Alone (Lyrics)_K-z0m0-XVdk.mp3",
            "meta": {
                "author": "Stacey Ryan",
                "authorlink": "#",
                "date": "09.03.2016",
                "category": "Indie",
                "play": 4500,
                "like": 2310,
                "duration": "3:25"
            }
        },
        {
            "id": "item-12",
            "title": "Happier Than Ever",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/12.jpg" },
            "src": "../html/audio/Billie Eilish - Happier Than Ever (Official Music Video)_5GJWxDKyk3A.mp3",
            "meta": {
                "author": "Billie Eilish",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "5:15"
            }
        },
        {
            "id": "item-13",
            "title": "Interaksi",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/17.jpg" },
            "src": "../html/audio/TULUS - Interaksi (Official Lyric Video)_GIy9ZbH0sHo.mp3",
            "meta": {
                "author": "Tulus",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "2:53"
            }
        },
        {
            "id": "item-14",
            "title": "You're Gonna Live Forever in Me",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/19.jpg" },
            "src": "../html/audio/John Mayer You re Gonna Live Forever in Me (128kbps).mp3",
            "meta": {
                "author": "John Mayer",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:10"
            }
        },
        {
            "id": "item-15",
            "title": "Be Mine",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/20.jpg" },
            "src": "../html/audio/BOY PABLO  be mine lyrics video.mp3",
            "meta": {
                "author": "Boy Pablo",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:00"
            }
        },
        {
            "id": "item-16",
            "title": "Janji Setia",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/21.jpg" },
            "src": "../html/audio/Tiara Andini - Janji Setia (Official Lyric Video)_nKSylKpqln4.mp3",
            "meta": {
                "author": "Tiara Andini",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "4:21"
            }
        },
        {
            "id": "item-17",
            "title": "Before You Go",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/beforeyougo.jpg" },
            "src": "../html/audio/Lewis Capaldi - Before You Go (Lyrics)_c-KFmp9MMmQ.mp3",
            "meta": {
                "author": "Lewis Capaldi",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:31"
            }
        },
        {
            "id": "item-18",
            "title": "Amazing",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/24.jpg" },
            "src": "../html/audio/y2mate.com - Rex Orange County  AMAZING Lyrics.mp3",
            "meta": {
                "author": "Rex Orange County",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:26"
            }
        },
        {
            "id": "item-19",
            "title": "Aku Pergi",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/25.jpg" },
            "src": "../html/audio/AKU PERGI - ALIKA __ COVER BY TIVAL SALSABILA_GhkY2OM6QyE.mp3",
            "meta": {
                "author": "Alika",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:51"
            }
        },
        {
            "id": "item-20",
            "title": "The Shade",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/16.jpg" },
            "src": "../html/audio/Rex Orange County - THE SHADE (Lyrics)_XwRlsNpJgD0.mp3",
            "meta": {
                "author": "Rex Orange County",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:00"
            }
        },
        {
            "id": "item-21",
            "title": "DUDUDUDU",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/17.jpg" },
            "src": "../html/audio/DUDUDUDU (Lyric Video)_yg5gx_DaHhU.mp3",
            "meta": {
                "author": "Paul Partohap",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:47"
            }
        },
        {
            "id": "item-22",
            "title": "Takkan Kemana",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/18.jpg" },
            "src": "../html/audio/TheOvertunes - Takkan Kemana (Music Video)_krz5jaGGj3s.mp3",
            "meta": {
                "author": "The Overtunes",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:57"
            }
        },
        {
            "id": "item-23",
            "title": "Aku Yang Salah",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/31.jpg" },
            "src": "../html/audio/Mahalini x Nuca - Aku Yang Salah (Lirik) _Lyrics__TQ36e9PsdWY.mp3",
            "meta": {
                "author": "Mahalini, Nuca",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "4:11"
            }
        },
        {
            "id": "item-24",
            "title": "Buka Hati",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/29.jpg" },
            "src": "../html/audio/Yura Yunita - Buka Hati (Official Lyric Video)_ErTEyzhgN18.mp3",
            "meta": {
                "author": "Yura Yunita",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:29"
            }
        },
        {
            "id": "item-25",
            "title": "Suatu Saat Nanti",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/30.jpg" },
            "src": "../html/audio/HANIN DHIYA - Suatu Saat Nanti (Official Audio Video)_Y8NgxfyP-1s.mp3",
            "meta": {
                "author": "Hanin Dhiya",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "4:04"
            }
        },
        {
            "id": "item-26",
            "title": "Soledad",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/Westlife.jpg" },
            "src": "../html/audio/Soledad - Westlife (Lyrics video dan terjemahan).mp3",
            "meta": {
                "author": "Bernard Löhr, Westlife",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "4:04"
            }
        },
        {
            "id": "item-27",
            "title": "I Lay My Love On You",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/Westlife.jpg" },
            "src": "../html/audio/Westlife - I Lay My Love On You (Lyrics)_TcCIhCqzzEg.mp3",
            "meta": {
                "author": "Westlife",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:35"
            }
        },
        {
            "id": "item-28",
            "title": "Up Town Girl",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/Westlife.jpg" },
            "src": "../html/audio/Uptown Girl Westlife Lyrics_X-1dn0g1uQk.mp3",
            "meta": {
                "author": "Westlife",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:07"
            }
        },
        {
            "id": "item-29",
            "title": "My Love",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/Westlife.jpg" },
            "src": "../html/audio/Westlife - My Love (Lyrics)_btUTQeto940.mp3",
            "meta": {
                "author": "Westlife",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:59"
            }
        },
        {
            "id": "item-30",
            "title": "Married With Children",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/OASIS1.jpg" },
            "src": "../html/audio/Oasis - Married With Children (Official Lyric Video)_EOoidN2s5qY.mp3",
            "meta": {
                "author": "Oasis",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:16"
            }
        },
        {
            "id": "item-31",
            "title": "Don't Look Back In Anger",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/OASIS2.jpg" },
            "src": "../html/audio/Don't Look Back In Anger_4G1BFFcEgpc.mp3",
            "meta": {
                "author": "Oasis",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "4:48"
            }
        },
        {
            "id": "item-32",
            "title": "Oh Love",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/GREENDAY1.jpg" },
            "src": "../html/audio/Green Day - Oh Love [Official Music Video]_IWwMqa-_210.mp3",
            "meta": {
                "author": "Green Day",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "5:08"
            }
        },
        {
            "id": "item-33",
            "title": "Wake Me Up When September Ends",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/GREENDAY2.jpg" },
            "src": "../html/audio/Green Day Wake Me Up When September Ends (128kbps).mp3",
            "meta": {
                "author": "Green Day",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "4:45"
            }
        },
        {
            "id": "item-34",
            "title": "Atlantis",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/35.jpg" },
            "src": "../html/audio/Seafret - Atlantis (Lyrics)_C5T6v0tymhc.mp3",
            "meta": {
                "author": "Seafret",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:48"
            }
        },
        {
            "id": "item-35",
            "title": "Freaks",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/37.jpg" },
            "src": "../html/audio/Surf Curse - Freaks [Lyrics]_RJnMWK9mrgQ.mp3",
            "meta": {
                "author": "Surf Curse",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "2:25"
            }
        },
        {
            "id": "item-36",
            "title": "Mary On A Cross",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/33.jpg" },
            "src": "../html/audio/Ghost - Mary On A Cross (Official Audio)_k5mX3NkA7jM.mp3",
            "meta": {
                "author": "Ghost",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "4:04"
            }
        },
        {
            "id": "item-37",
            "title": "Teenage Dream",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/36.jpg" },
            "src": "../html/audio/Stephen Dawes - teenage dream (Lyrics)_AYL_ulwRNeQ.mp3",
            "meta": {
                "author": "Stephen Dawes",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "2:57"
            }
        },
        {
            "id": "item-38",
            "title": "Stuck With U",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/41.jpg" },
            "src": "../html/audio/Ariana Grande, Justin Bieber - Stuck With U (Lyrics)_fz78HOxOgEY.mp3",
            "meta": {
                "author": "Ariana Grande, Justin Bieber",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:48"
            }
        },
        {
            "id": "item-39",
            "title": "In the Stars",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/39.jpg" },
            "src": "../html/audio/Benson Boone -  In the Stars (Official Lyric Video)_2n5GKLdrTfk.mp3",
            "meta": {
                "author": "Benson Boone",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:36"
            }
        },
        {
            "id": "item-40",
            "title": "Prom Queen",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/40.jpg" },
            "src": "../html/audio/beach bunny - prom queen LYRICS_izpiLaDTgMw.mp3",
            "meta": {
                "author": "Beach Bunny",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "2:12"
            }
        },
        {
            "id": "item-41",
            "title": "Rumah Ke Rumah",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/RumahKeRumah.jpg" },
            "src": "../html/audio/Rumah ke Rumah - Hindia (Lirik Lagu)_z3sGBXWAyTM.mp3",
            "meta": {
                "author": "Hindia",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "4:38"
            }
        },
        {
            "id": "item-42",
            "title": "Evaluasi",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/Evaluasi.jpg" },
            "src": "../html/audio/Hindia - Evaluasi Lirik_0yaHsxLnLno.mp3",
            "meta": {
                "author": "Hindia",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:16"
            }
        },
        {
            "id": "item-43",
            "title": "I Love You But I'm Letting Go",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/Pams.jpg" },
            "src": "../html/audio/Pamungkas -  I Love You But I'm Letting Go_NO_cVedXdmM.mp3",
            "meta": {
                "author": "Pamungkas",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:42"
            }
        },
        {
            "id": "item-44",
            "title": "The Joker And The Queen",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/TheJokerAndTheQueen.jpg" },
            "src": "../html/audio/Ed Sheeran - The Joker And The Queen [Official Lyric Video]_m9f4XtNj1Vg.mp3",
            "meta": {
                "author": "Ed Sheeran, Taylor Swift",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:08"
            }
        },
        {
            "id": "item-45",
            "title": "Tuhan Sebut Sia-Sia",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/TuhanSebutSia-Sia.jpg" },
            "src": "../html/audio/Amigdala - Tuhan sebut sia-sia LIRIK (LYRIC VIDEO)_uvaLYE6g7wY.mp3",
            "meta": {
                "author": "Amigdala",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "4:27"
            }
        },
        {
            "id": "item-46",
            "title": "The Man Who Can’t Be Moved",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/TheScript.jpg" },
            "src": "../html/audio/The Script - The Man Who Can’t Be Moved (Official Video)_gS9o1FAszdk.mp3",
            "meta": {
                "author": "The Script",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:59"
            }
        },
        {
            "id": "item-47",
            "title": "SNAP",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/SNAP.jpg" },
            "src": "../html/audio/Rosa Linn - SNAP (Lyrics)_KZZiJJWXEGg.mp3",
            "meta": {
                "author": "Rosa Linn",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "2:59"
            }
        },
        {
            "id": "item-48",
            "title": "There Is a Light That Never Goes Out - 2011 Remaster",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/TheSmiths.jpg" },
            "src": "../html/audio/There Is a Light That Never Goes Out (2011 Remaster)_3r-qDvD3F3c.mp3",
            "meta": {
                "author": "The Smiths",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "4:04"
            }
        },
        {
            "id": "item-49",
            "title": "Save Your Tears",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/34.jpg" },
            "src": "../html/audio/The Weeknd - Save Your Tears (Lyrics)_3o4ug07qJBI.mp3",
            "meta": {
                "author": "The Weeknd",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:36"
            }
        },
        {
            "id": "item-50",
            "title": "Walking All Day",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/43.jpg" },
            "src": "../html/audio/graham coxon - walking all day (lyrics)_jVN_SXht4C4.mp3",
            "meta": {
                "author": "Graham Coxon",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:23"
            }
        },
        {
            "id": "item-51",
            "title": "Here With Me",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/42.jpg" },
            "src": "../html/audio/d4vd - Here With Me (Official Audio)_B7Y4LHbpXv0.mp3",
            "meta": {
                "author": "d4vd",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "4:02"
            }
        },
        {
            "id": "item-52",
            "title": "Ho Hey",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/44.jpg" },
            "src": "../html/audio/The Lumineers - Ho Hey (Lyrics)_R6UqE6JzNLA.mp3",
            "meta": {
                "author": "The Lumineers",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "2:41"
            }
        },
        {
            "id": "item-53",
            "title": "Golden Hour",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/46.jpg" },
            "src": "../html/audio/JVKE - golden hour (official music video)_PEM0Vs8jf1w.mp3",
            "meta": {
                "author": "JVKE",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:51"
            }
        },
        {
            "id": "item-54",
            "title": "All The Kids Are Depressed",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/47.jpg" },
            "src": "../html/audio/Jeremy Zucker - all the kids are depressed __ Lyrics_d_So8lwTHAg.mp3",
            "meta": {
                "author": "Jeremy Zucker",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "2:51"
            }
        },
        {
            "id": "item-55",
            "title": "Can I Be Him",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/45.jpg" },
            "src": "../html/audio/James Arthur - Can I Be Him (Lyric Video)_s3j4Mo9iMn4.mp3",
            "meta": {
                "author": "James Arthur",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "4:06"
            }
        },
        {
            "id": "item-56",
            "title": "Sex, Drugs, Etc",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/Onta1.jpg" },
            "src": "../html/audio/Beach Weather - sex, drugs, etc. (Lyrics)_q_3gUUioyjs.mp3",
            "meta": {
                "author": "Beach Weather",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:15"
            }
        },
        {
            "id": "item-57",
            "title": "Dream Lantern",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/Suyy.jpg" },
            "src": "../html/audio/Dream lantern_MtLHwqbE1eI.mp3",
            "meta": {
                "author": "RADWIMPS",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "2:11"
            }
        },
        {
            "id": "item-58",
            "title": "If The World Was Ending",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/Onta3.jpg" },
            "src": "../html/audio/JP Saxe - If The World Was Ending (Lyric Video) ft. Julia Michaels_RAov563V8vI.mp3",
            "meta": {
                "author": "Julia Michaels, JP Saxe",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:31"
            }
        },
        {
            "id": "item-59",
            "title": "Hello You (Ost Teman Tapi Menikah)",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/Suyy2.jpg" },
            "src": "../html/audio/Iqbaal Ramadhan _ Hello You.mp3",
            "meta": {
                "author": "Julia Michaels, JP Saxe",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "4:01"
            }
        },
        {
            "id": "item-60",
            "title": "I Love You So",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/Badut.jpg" },
            "src": "../html/audio/The Walters -- I Love You So_NwFVSclD_uc.mp3",
            "meta": {
                "author": "The Walters",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "2:40"
            }
        },
        {
            "id": "item-61",
            "title": "Perfect",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/edsheeran.jpg" },
            "src": "../html/audio/Ed Sheeran - Perfect (Lyrics).mp3",
            "meta": {
                "author": "Ed Sheeran",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "4:23"
            }
        },
        {
            "id": "item-62",
            "title": "Another Love",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/anotherlove.jpg" },
            "src": "../html/audio/Tom Odell - Another Love (Official Video)_MwpMEbgC7DA.mp3",
            "meta": {
                "author": "Tom Odell",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "4:07"
            }
        },
        {
            "id": "item-63",
            "title": "IDK You Yet",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/IDK.jpg" },
            "src": "../html/audio/Alexander 23 - IDK You Yet (Lyrics)_fXe0UTeyhgU.mp3",
            "meta": {
                "author": "Alexander 23",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:04"
            }
        },
        {
            "id": "item-64",
            "title": "Let Her Go",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/lethergo.jpg" },
            "src": "../html/audio/Passenger Let Her Go (128kbps).mp3",
            "meta": {
                "author": "Alexander 23",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "4:14"
            }
        },
        {
            "id": "item-65",
            "title": "Get You The Moon",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/getyouthemoon.jpg" },
            "src": "../html/audio/KinagetyouthemoonftSnow(128kbps).mp3",
            "meta": {
                "author": "Kina, Snøw",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "2:59"
            }
        },
        {
            "id": "item-66",
            "title": "Love Someone",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/lovesomeone.jpg" },
            "src": "../html/audio/Lukas Graham - Love Someone (Lyrics)_WkDbbb0Lyc4.mp3",
            "meta": {
                "author": "Lukas Graham",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:27"
            }
        },
        {
            "id": "item-67",
            "title": "Can We Kiss Forever?",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/CanWeKissForever.jpg" },
            "src": "../html/audio/Kina - Can We Kiss Forever.mp3",
            "meta": {
                "author": "Adriana Proenza, Kina",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:10"
            }
        },
        {
            "id": "item-68",
            "title": "Give Me a Kiss",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/givemeakiss.jpg" },
            "src": "../html/audio/Crash Adams Give Me A Kiss (128kbps).mp3",
            "meta": {
                "author": "Crash Adams",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "2:49"
            }
        },
        {
            "id": "item-69",
            "title": "Glimpse of Us",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/glimpeofus.jpg" },
            "src": "../html/audio/Joji Glimpse of Us (128kbps).mp3",
            "meta": {
                "author": "Joji",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:53"
            }
        },
        {
            "id": "item-70",
            "title": "Stupid Face",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/stupidface.jpg" },
            "src": "../html/audio/Abe Parker - Stupid Face (Official Lyric Video)_uo_k9Yi9eBY.mp3",
            "meta": {
                "author": "Abe Parker",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "2:47"
            }
        },
        {
            "id": "item-71",
            "title": "I miss you, I’m sorry",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/ImissyouImsorry.jpg" },
            "src": "../html/audio/Gracie Abrams I miss you I m sorry (128kbps).mp3",
            "meta": {
                "author": "Gracie Abrams",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "2:49"
            }
        },
        {
            "id": "item-72",
            "title": "Hate Me If It Helps",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/hateme.jpg" },
            "src": "../html/audio/Alexander 23 - Hate Me If It Helps (Lyric Video)_-9gdcnMaUxU.mp3",
            "meta": {
                "author": "Alexander 23",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:17"
            }
        },
        {
            "id": "item-73",
            "title": "Butterflies",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/butterflies.jpg" },
            "src": "../html/audio/Abe Parker - Butterflies (Official Lyric Video)_03l71gpGpBI.mp3",
            "meta": {
                "author": "Abe Parker",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:04"
            }
        },
        {
            "id": "item-74",
            "title": "Fix You",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/fixyou.jpg" },
            "src": "../html/audio/Coldplay - Fix You Lyrics_lPL5P2cA-pM.mp3",
            "meta": {
                "author": "Coldplay",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "3:04"
            }
        },
        {
            "id": "item-75",
            "title": "You Were Good To Me",
            "except": "Utilitatem tantae pecuniae? Utram tandem linguam nescio? Sed hoc sane concedamus.",
            "link": "#",
            "thumb": { "src": "images/23.jpg" },
            "src": "../html/audio/jeremy zucker & chelsea cutler - you were good to me.mp3",
            "meta": {
                "author": "Jeremy Zucker, Chelsea Cutler",
                "authorlink": "#",
                "date": "09.06.2016",
                "category": "Latin",
                "play": 860,
                "like": 240,
                "duration": "4:25"
            }
        }
    ],
  });

  // get player, then you can use the player.mepAdd(), player.mepRemove(), player.mepSelect()
  var player = playlist.find('audio, video')[0].player;

  // event on like btn
  player.$node.on('like.mep', function(e, trackid){
    $('[track-id='+trackid+']').toggleClass('is-like');
  });

  // event on play
  player.$node.on('play', function(e){
    updateDisplay();
  });

  // event on pause
  player.$node.on('pause', function(e){
    updateDisplay();
  });

  // update when pjax end
  $(document).on('pjaxEnd', function() {
    updateDisplay();
  });

  // simulate the play btn
  $(document).on('click.btn', '.btn-playpause', function(e){
      e.stopPropagation();
      var self = $(this);
      if( self.hasClass('is-playing') ){
        self.removeClass('is-playing');
        player.pause();
      }else{
        var item = getItem(self);
        item && player.mepAdd(item, true);
      }
  });

  function updateDisplay(){
    $('[data-id]').removeClass('active').find('.btn-playpause').removeClass('is-playing').parent().removeClass('active');
    var track = player.mepGetCurrentTrack();
    if(!track || !track.id) return;
    var item = $('[data-id="'+track.id+'"]');
    if( player.media.paused ){
      item.removeClass('active').find('.btn-playpause').removeClass('is-playing').parent().removeClass('active');
    }else{
      item.addClass('active').find('.btn-playpause').addClass('is-playing').parent().addClass('active');
    }
  }

  // get item data, you can use ajax to get data from server
  function getItem(self){
    var item = self.closest('.item');
    // track detail
    if(!item.attr('data-src')){
      self.toggleClass('is-playing');
      $('#tracks').find('.btn-playpause').first().trigger('click');
      return false;
    }

    var obj = {
        meta: {
           author: item.find('.item-author').find('a').text()
          ,authorlink : item.find('.item-author').find('a').attr('href')
        }
        ,src: self.closest('[data-src]').attr("data-src")
        ,thumb: {
          src: item.find('.item-media-content').css("background-image").replace(/^url\(["']?/, '').replace(/["']?\)$/, '')
        }
        ,title: item.find('.item-title').find('a').text()
        ,link: item.find('.item-title').find('a').attr('href')
        ,id: self.attr("data-id") ? self.attr("data-id") : self.closest('[data-id]').attr("data-id")
    };
    return obj;
  }

})(jQuery);
