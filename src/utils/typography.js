// External Dependencies
import Typography from 'typography';
import CodePlugin from 'typography-plugin-code';
import {
  MOBILE_MEDIA_QUERY,
  TABLET_MEDIA_QUERY,
  MIN_DEFAULT_MEDIA_QUERY,
  MIN_LARGER_DISPLAY_MEDIA_QUERY,
} from 'typography-breakpoint-constants';

// Internal Dependencies
// import presets, { colors } from './presets';
import colors from './colors';

const options = {
  headerFontFamily: [
    `Futura PT`,
    `-apple-system`,
    `BlinkMacSystemFont`,
    `Segoe UI`,
    `Roboto`,
    `Oxygen`,
    `Ubuntu`,
    `Cantarell`,
    `Fira Sans`,
    `Droid Sans`,
    `Helvetica Neue`,
    `Arial`,
    `sans-serif`,
  ],
  bodyFontFamily: [`Spectral`, `Georgia`, `Times New Roman`, `Times`, `serif`],
  monospaceFontFamily: [
    `Space Mono`,
    `SFMono-Regular`,
    `Menlo`,
    `Monaco`,
    `Consolas`,
    `Liberation Mono`,
    `Courier New`,
    `monospace`,
  ],
  googleFonts: [
    {
      name: 'Work Sans',
      styles: [
        '800',
      ],
    },
  ],
  baseFontSize: `18px`,
  baseLineHeight: 1.6,
  headerLineHeight: 1.075,
  headerColor: colors.gray.dark,
  bodyColor: colors.gray.copy,
  blockMarginBottom: 0.75,
  scaleRatio: 2,
};

const typography = new Typography(options);

export default typography;
