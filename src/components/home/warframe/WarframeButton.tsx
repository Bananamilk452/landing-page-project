import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import type { VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer transition-all duration-250 font-bold rounded-sm min-h-[44px] leading-[19.2px]",
  {
    variants: {
      variant: {
        primary: "bg-[#b30000] hover:bg-[maroon] text-white",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);
export function WarframeButton({
  className,
  variant,
  children,
  asChild = false,
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp className={buttonVariants({ className, variant })}>{children}</Comp>
  );
}
