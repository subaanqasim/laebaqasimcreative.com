import { cn } from "@lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "hover:-translate-y-1 inline-flex transition-all items-center justify-center rounded-md text-sm font-medium  focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:hover:bg-gray-800 dark:hover:text-gray-100 disabled:opacity-50 dark:focus:ring-gray-400 disabled:pointer-events-none dark:focus:ring-offset-gray-900 data-[state=open]:bg-gray-100 dark:data-[state=open]:bg-gray-800",
  {
    variants: {
      variant: {
        default:
          "bg-gray-900 text-white hover:bg-gray-700 dark:bg-gray-50 dark:text-gray-900",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "bg-transparent border border-gray-200 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-100",
        subtle:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-100",
        ghost:
          "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-100 dark:hover:text-gray-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-gray-900 dark:text-gray-100 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicProps<
  C extends React.ElementType,
  CustomProps = object,
> = React.PropsWithChildren<CustomProps & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, CustomProps>>;

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

type PolymorphicPropsWithRef<
  C extends React.ElementType,
  Props = object,
> = PolymorphicProps<C, Props> & { ref?: PolymorphicRef<C> };

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type ButtonProps<C extends React.ElementType> = PolymorphicPropsWithRef<
  C,
  ButtonVariantProps
>;

type ButtonComponent = <C extends React.ElementType = "button">(
  props: ButtonProps<C>,
) => React.ReactElement | null;

// eslint-disable-next-line react/display-name
const Button: ButtonComponent = React.forwardRef(
  <C extends React.ElementType = "button">(
    { className, variant, size, as, ...props }: ButtonProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || "button";

    return (
      <Component
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

export { Button, buttonVariants };
