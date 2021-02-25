export interface TokenUtilityProps {
  prefix?: string;
  colors?: { [key in string]: string };
  spacing?: { [key in string]: string };
  font?: {
    family?: { [key in string]: string };
    sizes?: { [key in string]: string };
  };
  leading?: { [key in string]: string };
}
