import { ReactNode, CSSProperties } from 'react';

export type HeaderBehavior = 'hide-on-scroll' | 'always-fixed' | 'always-top';
export type BoxShadowPreset = 'none' | 'light' | 'medium' | 'heavy' | 'custom';

export interface ScrollSenseHeaderProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  behavior?: HeaderBehavior;
  hideThreshold?: number;
  showThreshold?: number;
  dataAttribute?: string;
  boxShadow?: BoxShadowPreset;
  customBoxShadow?: string;
  enableTransition?: boolean;
  transitionDuration?: number;
  zIndex?: number;
  backgroundColor?: string;
  onScrollStateChange?: (isSticky: boolean, isHidden: boolean) => void;
}

export interface ScrollState {
  isSticky: boolean;
  isHidden: boolean;
  isTransitioning: boolean;
}

export interface ScrollSenseHeaderRef {
  getScrollState: () => ScrollState;
  reset: () => void;
}
