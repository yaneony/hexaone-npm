# HEXA.ONE

## About
A simple NodeJS module to interact with [HEXA.ONE](https://hexa.one) endpoints.

## Installation
To install `hexa.one`, simply run the following command:
```bash
$ npm i hexa.one
```

## Usage
In order to use all available endpoints by [HEXA.ONE](https://hexa.one) you will need an API_KEY. Check our Discord channel to learn how to get one.

## Response
Our API is providing response as structured JSON. It is easy to read and to understand.

## Errors
We use standard HTTP status codes, no additional or custom status codes are used. Check them on [Wikipedia](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) if required. 

## Endpoints
### [GET] /market/currencies
Reponse:
```json
{
  "result": {
    "currencies": {
      "AED": 3.673014,
      "AFN": 78.240863,
      "ALL": 110.43,
      [...]
      "ZAR": 14.866585,
      "ZMW": 13.162528,
      "ZWL": 322.000001
    },
    "updated": 1569249428
  }
}
```

### [GET] /market/items/{app_id}
Reponse:
```json
{
  "result": {
    "items": {
      "★ Bayonet": {
        "tags": [
          {
            "name": "Knife",
            "category": "Type",
            "category_name": "Type",
            "internal_name": "CSGO_Type_Knife"
          },
          {
            "name": "Bayonet",
            "category": "Weapon",
            "category_name": "Weapon",
            "internal_name": "weapon_bayonet"
          },
          {
            "name": "★",
            "color": "#8650AC",
            "category": "Quality",
            "category_name": "Category",
            "internal_name": "unusual"
          },
          {
            "name": "Covert",
            "color": "#EB4B4B",
            "category": "Rarity",
            "category_name": "Quality",
            "internal_name": "Rarity_Ancient_Weapon"
          },
          {
            "name": "Not Painted",
            "category": "Exterior",
            "category_name": "Exterior",
            "internal_name": "WearCategoryNA"
          }
        ],
        "type": "★ Covert Knife",
        "actions": [
          {
            "link": "steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20S%owner_steamid%A%assetid%D5101673237932737962",
            "name": "Inspect in Game..."
          }
        ],
        "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaKQZ53P3NZXMXvYmykdLSxqWkZ7-HkjMIvpIj3u2Y84733gzh_RU_MG_zIYLEdQ45fxiOrdJh0ExF",
        "tradable": true,
        "commodity": false,
        "marketable": true,
        "name_color": "#8650AC",
        "market_name": "★ Bayonet",
        "descriptions": [
          {
            "type": "html",
            "value": "Relatively unchanged in its design since World War II, the bayonet still retains a place in modern military strategy. Bayonet charges have continued to be effective as recently as the second Gulf War and the war in Afghanistan.",
            "app_data": ""
          }
        ],
        "icon_url_large": null,
        "background_color": null,
        "market_hash_name": "★ Bayonet",
        "market_tradable_restriction": 7,
        "market_marketable_restriction": 0
      },
      [...]
      "XM1014 | Ziggy (Well-Worn)": {
        "tags": [
          {
            "name": "Shotgun",
            "category": "Type",
            "category_name": "Type",
            "internal_name": "CSGO_Type_Shotgun"
          },
          {
            "name": "XM1014",
            "category": "Weapon",
            "category_name": "Weapon",
            "internal_name": "weapon_xm1014"
          },
          {
            "name": "The Spectrum 2 Collection",
            "category": "ItemSet",
            "category_name": "Collection",
            "internal_name": "set_community_18"
          },
          {
            "name": "Normal",
            "category": "Quality",
            "category_name": "Category",
            "internal_name": "normal"
          },
          {
            "name": "Restricted",
            "color": "#8847FF",
            "category": "Rarity",
            "category_name": "Quality",
            "internal_name": "Rarity_Mythical_Weapon"
          },
          {
            "name": "Well-Worn",
            "category": "Exterior",
            "category_name": "Exterior",
            "internal_name": "WearCategory3"
          }
        ],
        "type": "Restricted Shotgun",
        "actions": [
          {
            "link": "steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20S%owner_steamid%A%assetid%D3227539967949528131",
            "name": "Inspect in Game..."
          }
        ],
        "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PLZTiVPvYznwL-RnvDzKoTQmGpD681oteTE8YXghRq3rhU-MWz1LIDAJFc8MFvT_QDtx7vogpG_7cvPyyBjuSN24nzbzhy0n1gSOc-qRS8d",
        "tradable": true,
        "commodity": false,
        "marketable": true,
        "name_color": "#D2D2D2",
        "market_name": "XM1014 | Ziggy (Well-Worn)",
        "descriptions": [
          {
            "type": "html",
            "value": "Exterior: Well-Worn",
            "app_data": ""
          },
          {
            "type": "html",
            "value": "The XM1014 is a powerful fully automatic shotgun that justifies its heftier price tag with the ability to paint a room with lead fast. It has been finished with a randomized pattern of chartreuse, purple, and silver.\n\n<i>Introduce a little anarchy</i>",
            "app_data": ""
          },
          {
            "type": "html",
            "color": "#9DA1A9",
            "value": "The Spectrum 2 Collection",
            "app_data": {
              "def_index": "65535",
              "is_itemset_name": "1"
            }
          }
        ],
        "icon_url_large": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PLZTiVPvYznwL-RnvDzKoTQmGpD681oteTE8YXghWu4qgE7NnegcdDHIAM4aV6FrAC8kO3sgsfvusjOznVg63Yk5y3dnBbjhhtKP-xsm7XAHtUM9z_F",
        "background_color": null,
        "market_hash_name": "XM1014 | Ziggy (Well-Worn)",
        "market_tradable_restriction": 7,
        "market_marketable_restriction": 0
      }
    },
    "updated": 1569253033
  }
}
```

### [GET] /market/prices/{app_id}
Reponse:
```json
{
  "result": {
    "prices": {
      "★ Bayonet": {
        "7": {
          "avg": 263.91,
          "max": 270.01,
          "med": 261.51,
          "min": 260.17,
          "std": 4.2006725652,
          "sales": 24
        },
        "14": {
          "avg": 265.17,
          "max": 276.7,
          "med": 264.02,
          "min": 252.91,
          "std": 7.9816383979,
          "sales": 57
        },
        "30": {
          "avg": 261.77,
          "max": 274.92,
          "med": 261.51,
          "min": 246.85,
          "std": 7.7265427742,
          "sales": 123
        },
        "90": {
          "avg": 242.11,
          "max": 262.05,
          "med": 241.69,
          "min": 225.04,
          "std": 11.0396785066,
          "sales": 352
        },
        "365": {
          "avg": 183.31,
          "max": 227.97,
          "med": 178.31,
          "min": 155.88,
          "std": 21.3094858668,
          "sales": 1761
        }
      },
      [...]
      "★ Bayonet | Autotronic (Field-Tested)": {
        "7": {
          "avg": 351.25,
          "max": 361.5,
          "med": 347.25,
          "min": 345,
          "std": 8.9477650841,
          "sales": 8
        },
        "14": {
          "avg": 341.79,
          "max": 355,
          "med": 340.03,
          "min": 332.57,
          "std": 7.8957978577,
          "sales": 22
        },
        "30": {
          "avg": 338.35,
          "max": 355,
          "med": 338.75,
          "min": 323.44,
          "std": 8.6884032409,
          "sales": 59
        },
        "90": {
          "avg": 320.51,
          "max": 340.11,
          "med": 318.53,
          "min": 301.84,
          "std": 11.7154684737,
          "sales": 196
        },
        "365": {
          "avg": 259.59,
          "max": 306.13,
          "med": 254.55,
          "min": 226.28,
          "std": 22.6485002516,
          "sales": 887
        }
      }
    },
    "updated": 1569253033
  }
}
```

### [GET] /market/listings/{app_id}
Reponse:
```json
{
  "result": {
    "listings": {
      "★ Bayonet": {
        "items": 10,
        "price": 282
      },
      "★ Bayonet | Autotronic (Battle-Scarred)": {
        "items": 1,
        "price": 316.44
      },
      "★ Bayonet | Autotronic (Factory New)": {
        "items": 0,
        "price": 709.89
      },
      [...]
      "XM1014 | Ziggy (Field-Tested)": {
        "items": 1232,
        "price": 0.39
      },
      "XM1014 | Ziggy (Minimal Wear)": {
        "items": 349,
        "price": 0.58
      },
      "XM1014 | Ziggy (Well-Worn)": {
        "items": 131,
        "price": 0.42
      }
    },
    "updated": 1569253933
  }
}
```





### [GET] /user/profile/{steam_id}
Reponse:
```json
{
  "result": {
    "profile": {
      "steam_id": "76561198019728505",
      "name": "YaneonY",
      "online_state": "online",
      "state_message": "Online",
      "privacy_state": "public",
      "visibility_state": "3",
      "avatar": {
        "icon": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/65/65be6107eacdf89c7570eb2c0951e9a0a1f3aeb7.jpg",
        "medium": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/65/65be6107eacdf89c7570eb2c0951e9a0a1f3aeb7_medium.jpg",
        "full": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/65/65be6107eacdf89c7570eb2c0951e9a0a1f3aeb7_full.jpg"
      },
      "vac_banned": false,
      "trade_ban_state": "none",
      "is_limited_account": false,
      "profile_url": "https://steamcommunity.com/profiles/76561198019728505",
      "custom_url": "https://steamcommunity.com/id/YaneonY",
      "member_since": 1263168000,
      "location": "",
      "real_name": "⠀",
      "summary": "Looking for good API? Check my favorite group!",
      "groups": [
        "103582791461982698",
        "103582791429796426",
        "103582791430989588",
        "103582791432125620",
        "103582791432315843",
        "103582791432405845",
        "103582791432884064"
      ],
      "primary_group": {
        "group_id": "103582791461982698",
        "group_name": "HEXA.ONE",
        "group_url": "https://steamcommunity.com/groups/hexa-one",
        "headline": "Items, Prices, Listings, Inventories and more...",
        "summary": "We provide the missing data you might need :)",
        "avatar": {
          "icon": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/47/47654ad78d8d5f369585c8b8bc3b4c1580547a0d.jpg",
          "medium": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/47/47654ad78d8d5f369585c8b8bc3b4c1580547a0d_medium.jpg",
          "full": "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/47/47654ad78d8d5f369585c8b8bc3b4c1580547a0d_full.jpg"
        },
        "members": {
          "count": 27,
          "online": 6,
          "in_chat": 1,
          "in_game": 0
        }
      }
    },
    "updated": 1569254170
  }
}
```

### [GET] /user/inventory/{steam_id}/{app_id}/{context_id}
Reponse:
```json
{
  "result": {
    "inventory": {
      "16714284195": {
        "market_hash_name": "P90 | Grim (Battle-Scarred)",
        "market_name": "P90 | Grim (Battle-Scarred)",
        "asset_id": "16714284195",
        "class_id": 3518580151,
        "instance_id": 188530139,
        "type": "Mil-Spec Grade SMG",
        "icon_url": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJF_tW7mb-DkvbiKvXQwW4B6sMl07mX84mj3Fft-EQ_NW3zcdPGe1c4ZwvV-lO9yO-915Hvot2XnmOutiM7",
        "icon_url_large": "-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FAR17OORIQJF_tW7mb-DkvbiKoTdl3lW7Ytw3eyR94qh0QTirRZqZzr6J4HGJAI-NA2D8wC4x73qhZS_tZybm3UwpGB8sjmXAJSI",
        "name_color": "#D2D2D2",
        "background_color": null,
        "amount": 1,
        "commodity": false,
        "tradable": true,
        "marketable": true,
        "market_tradable_restriction": 7,
        "market_marketable_restriction": 0,
        "actions": [
          {
            "link": "steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20S%owner_steamid%A%assetid%D17188672433153625687",
            "name": "Inspect in Game..."
          }
        ],
        "descriptions": [
          {
            "type": "html",
            "value": "Exterior: Battle-Scarred"
          },
          {
            "type": "html",
            "value": "Easily recognizable for its unique bullpup design, the P90 is a great weapon to shoot on the move due to its high-capacity magazine and low recoil. It has been given a hydrographic of murderous specters, then dry brushed with green accents.\n\n<i>Imogen... are you selling me a gun or a velvet poster? – Rona Sabri, Rising Star</i>"
          },
          {
            "type": "html",
            "value": "The Gamma 2 Collection",
            "color": "#9DA1A9"
          },
          {
            "type": "html",
            "value": "<br><div id=\"sticker_info\" name=\"sticker_info\" title=\"Sticker\" style=\"border: 2px solid rgb(102, 102, 102); border-radius: 6px; width=100; margin:4px; padding:8px;\"><center><img width=64 height=48 src=\"https://steamcdn-a.akamaihd.net/apps/730/icons/econ/stickers/skillgroup_capsule/dmg.20429f1bdef2567cb9e68234cfeff6e2a11ac32b.png\"><br>Sticker: Distinguished Master Guardian</center></div>"
          }
        ],
        "fraudwarnings": [],
        "tags": [
          {
            "category": "Type",
            "internal_name": "CSGO_Type_SMG",
            "localized_category_name": "Type",
            "localized_tag_name": "SMG"
          },
          {
            "category": "Weapon",
            "internal_name": "weapon_p90",
            "localized_category_name": "Weapon",
            "localized_tag_name": "P90"
          },
          {
            "category": "ItemSet",
            "internal_name": "set_gamma_2",
            "localized_category_name": "Collection",
            "localized_tag_name": "The Gamma 2 Collection"
          },
          {
            "category": "Quality",
            "internal_name": "normal",
            "localized_category_name": "Category",
            "localized_tag_name": "Normal"
          },
          {
            "category": "Rarity",
            "internal_name": "Rarity_Rare_Weapon",
            "localized_category_name": "Quality",
            "localized_tag_name": "Mil-Spec Grade",
            "color": "#4B69FF"
          },
          {
            "category": "Exterior",
            "internal_name": "WearCategory4",
            "localized_category_name": "Exterior",
            "localized_tag_name": "Battle-Scarred"
          }
        ]
      },
      [...]
      "9228668436": {
        "market_hash_name": "Graffiti | Eye Spy (Monster Purple)",
        "market_name": "Graffiti | Eye Spy (Monster Purple)",
        "asset_id": "9228668436",
        "class_id": 1989274604,
        "instance_id": 302028390,
        "type": "Base Grade Graffiti",
        "icon_url": "IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBG0pPuIHnX7ZHmWfCXbTg4-H7FfNmmKqGKgsO-dEW3MQe0pQF0BeaQC9jJKP86ObhZoysdVrCO7mEhyDBs9ftFPYAOilyIWZbt8zmjeDQF5",
        "icon_url_large": "IzMF03bi9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdB2ozio1RrlIWFK3UfvMYB8UsvjiMXojflsZalyxSh31CIyHz2GZ-KuFpPsrTzBG0pPuIHnX7ZAjILjPeGRBsTuZYN2iM-mHwt7-cFjvOQOB4EloAfaRX8DcdPsjdaRBohoADr2fg2VRzGVArfclJYgKuxmAaIbE8lXcXcc1bz2q03haL",
        "name_color": "#D2D2D2",
        "background_color": null,
        "amount": 1,
        "commodity": true,
        "tradable": false,
        "marketable": false,
        "market_tradable_restriction": 7,
        "market_marketable_restriction": 0,
        "actions": [
          {
            "link": "steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20S%owner_steamid%A%assetid%D5539690347047159179",
            "name": "Inspect in Game..."
          }
        ],
        "descriptions": [
          {
            "type": "html",
            "value": "This graffiti can be applied to the in-game world. You can apply it until you run out of charges."
          }
        ],
        "fraudwarnings": [],
        "tags": [
          {
            "category": "Type",
            "internal_name": "CSGO_Type_Spray",
            "localized_category_name": "Type",
            "localized_tag_name": "Graffiti"
          },
          {
            "category": "Quality",
            "internal_name": "normal",
            "localized_category_name": "Category",
            "localized_tag_name": "Normal"
          },
          {
            "category": "Rarity",
            "internal_name": "Rarity_Common",
            "localized_category_name": "Quality",
            "localized_tag_name": "Base Grade",
            "color": "#B0C3D9"
          },
          {
            "category": "SprayColorCategory",
            "internal_name": "Tint15",
            "localized_category_name": "Graffiti Color",
            "localized_tag_name": "Monster Purple"
          }
        ]
      }
    },
    "updated": 1569254254
  }
}
```

## Example Code

```javascript
const hexaone = require('../index.js'); // use require('hexa.one') in production
const api = new hexaone('API_KEY'); // <- Pur your API_KEY here.

setImmediate(async () => {
  const response = await api.getPrices(578080);
  console.log(response.status);
  console.log(Object.keys(response.data).length + ' Items');
});

/* OR */
api.getPrices(578080).then((response) => {
  console.log(response.status);
  console.log(Object.keys(response.data).length + ' Items');
});
```

As of now you can use `api` object to interact with HEXA.ONE provided endpoints.
For examples please check [examples](https://github.com/yaneony/hexaone-npm/tree/master/examples) folder.

## More
For more information visit [HEXA.ONE](https://hexa.one)
