import { cn } from "../../utils/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse bg-slate-500", className)}
      {...props}
    />
  )
}

export { Skeleton }
