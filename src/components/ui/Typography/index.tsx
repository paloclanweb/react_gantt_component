import React, { useMemo } from "react";
import tw from "twin.macro";

type HeadingVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Variant =
  | HeadingVariant
  | "jumbo"
  | "body1"
  | "body2"
  | "body3"
  | "body4"
  | "paragraph1"
  | "paragraph2"
  | "paragraph3"
  | "paragraph4"
  | "label1"
  | "label2"
  | "label3";

export type TypographyBaseProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export interface TypographyProps extends TypographyBaseProps {
  /**
   * Which variant to be styled
   */
  variant?: Variant;
  /**
   * Which tag to render
   */
  component?:
    | HeadingVariant
    | "p"
    | "b"
    | "pre"
    | "code"
    | "small"
    | "strong"
    | "span"
    | "label"
    | "legend"
    | "summary";
  /**
   * Used to link labels to inputs
   */
  htmlFor?: string;
}

const styles = {
  base: tw`m-0 p-0`,
  jumbo: tw`text-jumbo tracking-jumbo leading-jumbo`,
  h1: tw`text-h1 tracking-h1 leading-h1`,
  h2: tw`text-h2 tracking-h2 leading-h2`,
  h3: tw`text-h3 tracking-h3 leading-h3`,
  h4: tw`text-h4 tracking-h4 leading-h4`,
  h5: tw`text-h5 tracking-h5 leading-h5`,
  h6: tw`text-h6 tracking-h6 leading-h6`,
  body1: tw`text-body1 tracking-body1 leading-body1`,
  body2: tw`text-body2 tracking-body2 leading-body2`,
  body3: tw`text-body3 tracking-body3 leading-body3`,
  body4: tw`text-body4 tracking-body4 leading-body4`,
  paragraph1: tw`text-paragraph1 tracking-paragraph1 leading-paragraph1`,
  paragraph2: tw`text-paragraph2 tracking-paragraph2 leading-paragraph2`,
  paragraph3: tw`text-paragraph3 tracking-paragraph3 leading-paragraph3`,
  paragraph4: tw`text-paragraph4 tracking-paragraph4 leading-paragraph4`,
  label1: tw`text-label1 tracking-label1 leading-label1`,
  label2: tw`text-label2 tracking-label2 leading-label2`,
  label3: tw`text-label3 tracking-label3 leading-label3`,
};

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  function Typography(
    { variant = "body1", component, children, ...props },
    ref,
  ) {
    const Tag = (component ||
      (/^h\d$/gm.test(variant)
        ? (variant as HeadingVariant)
        : "p")) as React.ElementType;

    const css = useMemo(() => [styles.base, styles[variant]], [variant]);

    return (
      <Tag ref={ref} css={css} {...props}>
        {children}
      </Tag>
    );
  },
);

export default Typography;
