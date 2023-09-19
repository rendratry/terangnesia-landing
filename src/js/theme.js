import { docReady } from './utils';
import detectorInit from './detector';
import scrollToTop from './scroll-to-top';

// /* -------------------------------------------------------------------------- */
// /*                            Theme Initialization                            */
// /* -------------------------------------------------------------------------- */
docReady(detectorInit);
docReady(scrollToTop);
