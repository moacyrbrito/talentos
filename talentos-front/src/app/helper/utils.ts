export class Utils {
  waySort: string;

  public static onSortUtil(data, key, waySort) {
    const typeData = typeof data[0][key];
    if (waySort == "asc") {
      if (typeData == "string") {
        data = data.sort((a: any, b: any) => {
          return a[key].localeCompare(b[key]);
        })
      } else {
        data = data.sort((a: any, b: any) => {
          return a[key] - b[key];
        })
      }
    } else {
      if (typeData == "string") {
        data = data.sort((a: any, b: any) => {
          return b[key].localeCompare(a[key]);
        })
      } else {
        data = data.sort((a: any, b: any) => {
          return b[key] - a[key];
        })
      }
    }
    return data;
  }
}
