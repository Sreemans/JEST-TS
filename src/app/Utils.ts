import { UrlWithParsedQuery, parse } from "url";
export class Utils {
  static toUpperCase(arg: string) {
    return arg.toUpperCase();
  }
  public static URLParser(url): UrlWithParsedQuery {
    return parse(url, true);
  }
}
