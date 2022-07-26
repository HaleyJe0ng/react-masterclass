import "styled-components";

//  and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    //내 테마가 어떻게 보일지 설명하는 부분
    //내 styled components의 테마 정의를 확장하는 것
    //
    textColor: string;
    bgColor: string;
    accentColor: string;
  }
}
