export let mock = {
  "currentWeather":
  {
    "LocalObservationDateTime": new Date("2020-07-16T01:11:00+02:00"),
      "EpochTime": 1594854660,
        "WeatherText": "Clear",
          "WeatherIcon": 33,
            "HasPrecipitation": false,
              "PrecipitationType": null,
                "IsDayTime": false,
                  "Temperature": {
                    "Metric": {
                      "Value": 0,
                        "Unit": "C",
                          "UnitType": 17
                    },
      "Imperial": {
        "Value": 32,
          "Unit": "F",
            "UnitType": 18
      }
    },
    "MobileLink": "http://m.accuweather.com/en/za/alabama/299795/current-weather/299795?lang=en-us",
      "Link": "http://www.accuweather.com/en/za/alabama/299795/current-weather/299795?lang=en-us"
  },
  "forecast": {
    "Headline": {
      "EffectiveDate": new Date("2020-07-19T07:00:00+02:00"),
        "EffectiveEpochDate": 1595134800,
          "Severity": 4,
            "Text": "Pleasant Sunday",
              "Category": "mild",
                "EndDate": null,
                  "EndEpochDate": null,
                    "MobileLink": "http://m.accuweather.com/en/za/alabama/299795/extended-weather-forecast/299795?lang=en-us",
                      "Link": "http://www.accuweather.com/en/za/alabama/299795/daily-weather-forecast/299795?lang=en-us"
    },
    "DailyForecasts": [{
      "Date": new Date("2020-07-15T07:00:00+02:00"),
      "EpochDate": 1594789200,
      "Temperature": {
        "Minimum": {
          "Value": 24,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 65,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 31,
        "IconPhrase": "Cold",
        "HasPrecipitation": false
      },
      "Sources": ["AccuWeather"],
      "MobileLink": "http://m.accuweather.com/en/za/alabama/299795/daily-weather-forecast/299795?lang=en-us",
      "Link": "http://www.accuweather.com/en/za/alabama/299795/daily-weather-forecast/299795?lang=en-us"
    },
    {
      "Date": new Date("2020-07-16T07:00:00+02:00"),
      "EpochDate": 1594875600,
      "Temperature": {
        "Minimum": {
          "Value": 26,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 63,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 33,
        "IconPhrase": "Clear",
        "HasPrecipitation": false
      },
      "Sources": ["AccuWeather"],
      "MobileLink": "http://m.accuweather.com/en/za/alabama/299795/daily-weather-forecast/299795?day=1&lang=en-us",
      "Link": "http://www.accuweather.com/en/za/alabama/299795/daily-weather-forecast/299795?day=1&lang=en-us"
    },
    {
      "Date": new Date("2020-07-17T07:00:00+02:00"),
      "EpochDate": 1594962000,
      "Temperature": {
        "Minimum": {
          "Value": 30,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 68,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 33,
        "IconPhrase": "Clear",
        "HasPrecipitation": false
      },
      "Sources": ["AccuWeather"],
      "MobileLink": "http://m.accuweather.com/en/za/alabama/299795/daily-weather-forecast/299795?day=2&lang=en-us",
      "Link": "http://www.accuweather.com/en/za/alabama/299795/daily-weather-forecast/299795?day=2&lang=en-us"
    },
    {
      "Date": new Date("2020-07-18T07:00:00+02:00"),
      "EpochDate": 1595048400,
      "Temperature": {
        "Minimum": {
          "Value": 31,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 71,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 5,
        "IconPhrase": "Hazy sunshine",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 33,
        "IconPhrase": "Clear",
        "HasPrecipitation": false
      },
      "Sources": ["AccuWeather"],
      "MobileLink": "http://m.accuweather.com/en/za/alabama/299795/daily-weather-forecast/299795?day=3&lang=en-us",
      "Link": "http://www.accuweather.com/en/za/alabama/299795/daily-weather-forecast/299795?day=3&lang=en-us"
    },
    {
      "Date": new Date("2020-07-19T07:00:00+02:00"),
      "EpochDate": 1595134800,
      "Temperature": {
        "Minimum": {
          "Value": 32,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 71,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 33,
        "IconPhrase": "Clear",
        "HasPrecipitation": false
      },
      "Sources": ["AccuWeather"],
      "MobileLink": "http://m.accuweather.com/en/za/alabama/299795/daily-weather-forecast/299795?day=4&lang=en-us",
      "Link": "http://www.accuweather.com/en/za/alabama/299795/daily-weather-forecast/299795?day=4&lang=en-us"
    }]
  }
}
