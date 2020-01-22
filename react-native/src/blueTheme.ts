/**
Copyright (c) 2018-present, Eaton

All rights reserved.

This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
**/

import {blue, red, gray, lightBlue, white} from '@pxblue/colors';
import { TextStyle } from 'react-native';

type Font = {
    fontFamily: string;
    fontWeight: TextStyle['fontWeight'];
};

export type PXBlueReactNativeTheme = {
    roundness: number;
    colors: {
        primary: string;
        background: string;
        surface: string;
        accent: string;
        error: string;
        text: string;
        onPrimary: string;
    };
    fonts: {
        extraBold: Partial<Font>;
        bold: Partial<Font>;
        semiBold: Partial<Font>;
        regular: Partial<Font>;
        light: Partial<Font>;
    };
    sizes: {
        tiny: number;
        extraSmall: number;
        small: number;
        medium: number;
        large: number;
        extraLarge: number;
        giant: number;
    }
};

export const blueTheme: PXBlueReactNativeTheme =
{
  roundness: 4,
  fonts: {
    extraBold: {
      fontFamily: 'OpenSans-ExtraBold',
      // fontWeight: '800'
    },
    bold: {
      fontFamily: 'OpenSans-Bold',
      // fontWeight: '700'
    },
    semiBold: {
      fontFamily: 'OpenSans-SemiBold',
      // fontWeight: '600'
    },
    regular: {
      fontFamily: 'OpenSans-Regular',
      // fontWeight: '400'
    },
    light: {
      fontFamily: 'OpenSans-Light',
      // fontWeight: '300'
    }
  },
  colors: {
    primary: blue[500],
    background: gray[50],
    surface: white[50],
    accent: lightBlue[500],
    error: red[500],
    text: gray[500],
    onPrimary: white[50]
  },
  sizes: {
    tiny: 10,
    extraSmall: 12,
    small: 14,
    medium: 16,
    large: 20,
    extraLarge: 24,
    giant: 34
  }
};