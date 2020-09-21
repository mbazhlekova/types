import * as React from "react";

export type SPACING_TYPE =
  | "EXTRA_LARGE"
  | "LARGE"
  | "MEDIUM"
  | "NONE"
  | "OMIT"
  | "SMALL";
export type TYPE = "DOT" | "CIRCLE";

export interface SpinnerProps {
  className?: string;
  /**
   * If true, the spinner will be displayed inline.
   */
  inline?: boolean;
  spacingType?: SPACING_TYPE[];
  type: TYPE;
}

/**
 * Spinners are used to indicate to your users that content is loading on the screen.
 *
 * @see https://developer.newrelic.com/components/spinner
 */
declare const Spinner: React.FC<SpinnerProps>;

export default Spinner;
