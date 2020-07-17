export const mock = {
  currentWeather: {
    LocalObservationDateTime: new Date("2020-07-15T17:55:00-05:00"),
    EpochTime: 1594853700,
    WeatherText: "Thunderstorm",
    WeatherIcon: 16,
    HasPrecipitation: true,
    PrecipitationType: "Rain",
    IsDayTime: true,
    Temperature: {
      Metric: { Value: 25, Unit: "C", UnitType: 17 },
      Imperial: { Value: 77, Unit: "F", UnitType: 18 }
    },
    MobileLink: "http://m.accuweather.com/en/mx/israel/1057615/current-weather/1057615?lang=en-us",
    Link: "http://www.accuweather.com/en/mx/israel/1057615/current-weather/1057615?lang=en-us"
  },
  forecast: {
    Headline: {
      EffectiveDate: new Date("2020-07-15T14:00:00-05:00"),
      EffectiveEpochDate: 1594839600,
      Severity: 5,
      Text: "A thunderstorm this afternoon",
      Category: "thunderstorm",
      EndDate: new Date("2020-07-15T20:00:00-05:00"),
      EndEpochDate: 1594861200,
      MobileLink: "http://m.accuweather.com/en/mx/israel/1057615/extended-weather-forecast/1057615?lang=en-us",
      Link: "http://www.accuweather.com/en/mx/israel/1057615/daily-weather-forecast/1057615?lang=en-us"
    },
    DailyForecasts: [
      {
        Date: new Date("2020-07-15T07:00:00-05:00"),
        EpochDate: 1594814400,
        Temperature: {
          Minimum: { "Value": 59, "Unit": "F", "UnitType": 18 },
          Maximum: { "Value": 81, "Unit": "F", "UnitType": 18 }
        },
        Day: {
          Icon: 16,
          IconPhrase: "Mostly cloudy w/ t-storms",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Moderate"
        },
        Night: {
          Icon: 36,
          IconPhrase: "Intermittent clouds",
          HasPrecipitation: false
        },
        Sources: ["AccuWeather"],
        MobileLink: "http://m.accuweather.com/en/mx/israel/1057615/daily-weather-forecast/1057615?day=1&lang=en-us",
        Link: "http://www.accuweather.com/en/mx/israel/1057615/daily-weather-forecast/1057615?day=1&lang=en-us"
      },
      {
        Date: new Date("2020-07-16T07:00:00-05:00"),
        EpochDate: 1594900800,
        Temperature: {
          Minimum: { Value: 59, Unit: "F", UnitType: 18 },
          Maximum: { Value: 83, Unit: "F", UnitType: 18 }
        },
        Day: {
          Icon: 17,
          IconPhrase: "Partly sunny w/ t-storms",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Moderate"
        },
        Night: {
          Icon: 41,
          IconPhrase: "Partly cloudy w/ t-storms",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Light"
        },
        Sources: ["AccuWeather"],
        MobileLink: "http://m.accuweather.com/en/mx/israel/1057615/daily-weather-forecast/1057615?day=2&lang=en-us",
        Link: "http://www.accuweather.com/en/mx/israel/1057615/daily-weather-forecast/1057615?day=2&lang=en-us"
      },
      {
        Date: new Date("2020-07-17T07:00:00-05:00"),
        EpochDate: 1594987200,
        Temperature: {
          Minimum: { "Value": 60, "Unit": "F", "UnitType": 18 },
          Maximum: { "Value": 82, "Unit": "F", "UnitType": 18 }
        },
        Day: {
          Icon: 17,
          IconPhrase: "Partly sunny w/ t-storms",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Moderate"
        },
        Night: {
          Icon: 35,
          IconPhrase: "Partly cloudy",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Light"
        },
        Sources: ["AccuWeather"],
        MobileLink: "http://m.accuweather.com/en/mx/israel/1057615/daily-weather-forecast/1057615?day=3&lang=en-us",
        Link: "http://www.accuweather.com/en/mx/israel/1057615/daily-weather-forecast/1057615?day=3&lang=en-us"
      },
      {
        Date: new Date("2020-07-18T07:00:00-05:00"),
        EpochDate: 1595073600,
        Temperature: {
          Minimum: { "Value": 59, "Unit": "F", "UnitType": 18 },
          Maximum: { "Value": 81, "Unit": "F", "UnitType": 18 }
        },
        Day: {
          Icon: 13,
          IconPhrase: "Mostly cloudy w/ showers",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Moderate"
        },
        Night: {
          Icon: 38,
          IconPhrase: "Mostly cloudy",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Light"
        },
        Sources: ["AccuWeather"],
        MobileLink: "http://m.accuweather.com/en/mx/israel/1057615/daily-weather-forecast/1057615?day=4&lang=en-us",
        Link: "http://www.accuweather.com/en/mx/israel/1057615/daily-weather-forecast/1057615?day=4&lang=en-us"
      },
      {
        Date: new Date("2020-07-19T07:00:00-05:00"),
        EpochDate: 1595160000,
        Temperature: {
          Minimum: { "Value": 58, "Unit": "F", "UnitType": 18 },
          Maximum: { "Value": 81, "Unit": "F", "UnitType": 18 }
        },
        Day: {
          Icon: 4,
          IconPhrase: "Intermittent clouds",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Heavy"
        },
        Night: {
          Icon: 38,
          IconPhrase: "Mostly cloudy",
          HasPrecipitation: true,
          PrecipitationType: "Rain",
          PrecipitationIntensity: "Moderate"
        },
        Sources: ["AccuWeather"],
        MobileLink: "http://m.accuweather.com/en/mx/israel/1057615/daily-weather-forecast/1057615?day=5&lang=en-us",
        Link: "http://www.accuweather.com/en/mx/israel/1057615/daily-weather-forecast/1057615?day=5&lang=en-us"
      }
    ]
  }
}
