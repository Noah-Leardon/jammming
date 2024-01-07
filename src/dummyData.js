// Need Song name, Artist, Album
// Song name = tracks.items[i].name
// Artist = tracks.items[i].artists[0].name
// Album = tracks.items[i].album.name

const response = {
    "tracks": {
        "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20",
        "limit": 20,
        "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
        "offset": 0,
        "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
        "total": 4,
        "items": [
          {
            "album": {
              "album_type": "compilation",
              "total_tracks": 9,
              "available_markets": ["CA", "BR", "IT"],
              "external_urls": {
                "spotify": "string"
              },
              "href": "string",
              "id": "2up3OPMp9Tb4dAKM2erWXQ",
              "images": [
                {
                  "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
                  "height": 300,
                  "width": 300
                }
              ],
              "name": "Recovery",
              "release_date": "1981-12",
              "release_date_precision": "year",
              "restrictions": {
                "reason": "market"
              },
              "type": "album",
              "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
              "artists": [
                {
                  "external_urls": {
                    "spotify": "string"
                  },
                  "href": "string",
                  "id": "string",
                  "name": "string",
                  "type": "artist",
                  "uri": "string"
                }
              ]
            },
            "artists": [
              {
                "external_urls": {
                  "spotify": "string"
                },
                "followers": {
                  "href": "string",
                  "total": 0
                },
                "genres": ["Prog rock", "Grunge"],
                "href": "string",
                "id": "string",
                "images": [
                  {
                    "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
                    "height": 300,
                    "width": 300
                  }
                ],
                "name": "Eminem",
                "popularity": 0,
                "type": "artist",
                "uri": "string"
              }
            ],
            "available_markets": ["string"],
            "disc_number": 0,
            "duration_ms": 0,
            "explicit": false,
            "external_ids": {
              "isrc": "string",
              "ean": "string",
              "upc": "string"
            },
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "string",
            "is_playable": false,
            "linked_from": {
            },
            "restrictions": {
              "reason": "string"
            },
            "name": "Love the way you lie",
            "popularity": 99,
            "preview_url": "string",
            "track_number": 12,
            "type": "track",
            "uri": "string",
            "is_local": false
          },
          {
            "album": {
              "album_type": "compilation",
              "total_tracks": 9,
              "available_markets": ["CA", "BR", "IT"],
              "external_urls": {
                "spotify": "string"
              },
              "href": "string",
              "id": "2up3OPMp9Tb4dAKM2erWXQ",
              "images": [
                {
                  "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
                  "height": 300,
                  "width": 300
                }
              ],
              "name": "Music To Be Murdered By",
              "release_date": "1981-12",
              "release_date_precision": "year",
              "restrictions": {
                "reason": "market"
              },
              "type": "album",
              "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
              "artists": [
                {
                  "external_urls": {
                    "spotify": "string"
                  },
                  "href": "string",
                  "id": "string",
                  "name": "string",
                  "type": "artist",
                  "uri": "string"
                }
              ]
            },
            "artists": [
              {
                "external_urls": {
                  "spotify": "string"
                },
                "followers": {
                  "href": "string",
                  "total": 0
                },
                "genres": ["Prog rock", "Grunge"],
                "href": "string",
                "id": "string",
                "images": [
                  {
                    "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
                    "height": 300,
                    "width": 300
                  }
                ],
                "name": "Eminem",
                "popularity": 0,
                "type": "artist",
                "uri": "string"
              }
            ],
            "available_markets": ["string"],
            "disc_number": 0,
            "duration_ms": 0,
            "explicit": false,
            "external_ids": {
              "isrc": "string",
              "ean": "string",
              "upc": "string"
            },
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "string",
            "is_playable": false,
            "linked_from": {
            },
            "restrictions": {
              "reason": "string"
            },
            "name": "Godzilla",
            "popularity": 99,
            "preview_url": "string",
            "track_number": 12,
            "type": "track",
            "uri": "string",
            "is_local": false
          },
          {
            "album": {
              "album_type": "compilation",
              "total_tracks": 9,
              "available_markets": ["CA", "BR", "IT"],
              "external_urls": {
                "spotify": "string"
              },
              "href": "string",
              "id": "2up3OPMp9Tb4dAKM2erWXQ",
              "images": [
                {
                  "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
                  "height": 300,
                  "width": 300
                }
              ],
              "name": "Nectar",
              "release_date": "1981-12",
              "release_date_precision": "year",
              "restrictions": {
                "reason": "market"
              },
              "type": "album",
              "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
              "artists": [
                {
                  "external_urls": {
                    "spotify": "string"
                  },
                  "href": "string",
                  "id": "string",
                  "name": "string",
                  "type": "artist",
                  "uri": "string"
                }
              ]
            },
            "artists": [
              {
                "external_urls": {
                  "spotify": "string"
                },
                "followers": {
                  "href": "string",
                  "total": 0
                },
                "genres": ["Prog rock", "Grunge"],
                "href": "string",
                "id": "string",
                "images": [
                  {
                    "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
                    "height": 300,
                    "width": 300
                  }
                ],
                "name": "Joji",
                "popularity": 0,
                "type": "artist",
                "uri": "string"
              }
            ],
            "available_markets": ["string"],
            "disc_number": 0,
            "duration_ms": 0,
            "explicit": false,
            "external_ids": {
              "isrc": "string",
              "ean": "string",
              "upc": "string"
            },
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "string",
            "is_playable": false,
            "linked_from": {
            },
            "restrictions": {
              "reason": "string"
            },
            "name": "777",
            "popularity": 99,
            "preview_url": "string",
            "track_number": 12,
            "type": "track",
            "uri": "string",
            "is_local": false
          },
          {
            "album": {
              "album_type": "compilation",
              "total_tracks": 9,
              "available_markets": ["CA", "BR", "IT"],
              "external_urls": {
                "spotify": "string"
              },
              "href": "string",
              "id": "2up3OPMp9Tb4dAKM2erWXQ",
              "images": [
                {
                  "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
                  "height": 300,
                  "width": 300
                }
              ],
              "name": "SMITHEREENS",
              "release_date": "1981-12",
              "release_date_precision": "year",
              "restrictions": {
                "reason": "market"
              },
              "type": "album",
              "uri": "spotify:album:2up3OPMp9Tb4dAKM2erWXQ",
              "artists": [
                {
                  "external_urls": {
                    "spotify": "string"
                  },
                  "href": "string",
                  "id": "string",
                  "name": "string",
                  "type": "artist",
                  "uri": "string"
                }
              ]
            },
            "artists": [
              {
                "external_urls": {
                  "spotify": "string"
                },
                "followers": {
                  "href": "string",
                  "total": 0
                },
                "genres": ["Prog rock", "Grunge"],
                "href": "string",
                "id": "string",
                "images": [
                  {
                    "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
                    "height": 300,
                    "width": 300
                  }
                ],
                "name": "Joji",
                "popularity": 0,
                "type": "artist",
                "uri": "string"
              }
            ],
            "available_markets": ["string"],
            "disc_number": 0,
            "duration_ms": 0,
            "explicit": false,
            "external_ids": {
              "isrc": "string",
              "ean": "string",
              "upc": "string"
            },
            "external_urls": {
              "spotify": "string"
            },
            "href": "string",
            "id": "string",
            "is_playable": false,
            "linked_from": {
            },
            "restrictions": {
              "reason": "string"
            },
            "name": "YUKON (Interlude",
            "popularity": 99,
            "preview_url": "string",
            "track_number": 12,
            "type": "track",
            "uri": "string",
            "is_local": false
          }
        ]
      }
}

export default response