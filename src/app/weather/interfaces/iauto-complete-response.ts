export interface IAutoCompleteResponse {
    Version: number,
    Key: string,
    Type: string,
    Rank: number,
    LocalizedName: string,
    Country: {
      ID: string,
      LocalizedName: string
    },
    AdministrativeArea: {
      ID: string,
      LocalizedName: string
    }
}
