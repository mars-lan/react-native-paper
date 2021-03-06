import * as React from 'react';
import { ThemingType } from '@callstack/react-theme-provider';
import { ImageSourcePropType } from 'react-native';

type IconSourceBase = string | ImageSourcePropType;

interface PartialIconProps {
  color: string;
  size: number;
}

export type IconSource =
  | IconSourceBase
  | Readonly<{ source: IconSourceBase; direction: 'rtl' | 'ltr' | 'auto' }>
  | ((props: PartialIconProps) => React.ReactNode);

type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> };

export type Font = {
  fontFamily: string,
  fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
};

export type Theme = {
  dark: boolean;
  roundness: number;
  colors: {
    primary: string;
    background: string;
    surface: string;
    accent: string;
    error: string;
    text: string;
    disabled: string;
    placeholder: string;
    backdrop: string;
  };
  fonts: {
    regular: Font;
    medium: Font;
    light: Font;
    thin: Font;
  };
};

type Theming = ThemingType<Theme, ThemeShape>;

export type ThemeShape = DeepPartial<Theme>;
export declare const withTheme: Theming['withTheme'];
export declare const DefaultTheme: Theme;
export declare const DarkTheme: Theme;
export declare const ThemeProvider: Theming['ThemeProvider'];

export declare class Provider extends React.Component<{
  children: React.ReactNode;
  theme?: ThemeShape;
}> {}
