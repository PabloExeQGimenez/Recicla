import "styled-components";
import { theme } from "./Theme";

type AppTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
