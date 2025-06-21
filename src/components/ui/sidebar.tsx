import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from "class-variance-authority"
import { PanelLeft } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContext = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContext | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const isMobile = useIsMobile()
    const [openMobile, setOpenMobile] = React.useState(false)

    const [_open, _setOpen] = React.useState(defaultOpen)
    const open = openProp ?? _open
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value
        if (setOpenProp) {
          setOpenProp(openState)
        } else {
          _setOpen(openState)
        }

        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
      },
      [setOpenProp, open]
    )

    const toggleSidebar = React.useCallback(() => {
      return isMobile
        ? setOpenMobile((open) => !open)
        : setOpen((open) => !open)
    }, [isMobile, setOpen, setOpenMobile])

    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault()
          toggleSidebar()
        }
      }

      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }, [toggleSidebar])

    const state = open ? "expanded" : "collapsed"

    const contextValue = React.useMemo<SidebarContext>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    )

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
              className
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    )
  }
)
SidebarProvider.displayName = "SidebarProvider"

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right"
    variant?: "sidebar" | "floating" | "inset"
    collapsible?: "offcanvas" | "icon" | "none"
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      )
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      )
    }

    return (
      <div
        ref={ref}
        className="group peer hidden md:block text-sidebar-foreground"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        <div
          className={cn(
            "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
          )}
        />
        <div
          className={cn(
            "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
            side === "left"
              ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
              : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            variant === "floating" || variant === "inset"
              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
              : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
            className
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex h-14 items-center gap-x-3 p-3", className)}
      {...props}
    />
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarHeaderTitle = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  const { open } = useSidebar()

  return (
    <div
      ref={ref}
      className={cn(
        "whitespace-nowrap font-semibold duration-200",
        open ? "opacity-100" : "opacity-0",
        className
      )}
      {...props}
    />
  )
})
SidebarHeaderTitle.displayName = "SidebarHeaderTitle"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex-1 overflow-auto p-3", className)}
      {...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex shrink-0 items-center gap-x-3 p-3", className)}
      {...props}
    />
  )
})
SidebarFooter.displayName = "SidebarFooter"

const sidebarTriggerVariants = cva("rounded-lg", {
  variants: {
    variant: {
      default: "text-sidebar-primary-foreground",
      icon: "text-sidebar-accent-foreground size-8",
    },
    isActive: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "default",
      isActive: true,
      className: "bg-sidebar-primary text-sidebar-primary-foreground",
    },
    {
      variant: "default",
      isActive: false,
      className:
        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
    },
    {
      variant: "icon",
      isActive: true,
      className:
        "bg-sidebar-accent text-sidebar-accent-foreground",
    },
    {
      variant: "icon",
      isActive: false,
      className: "hover:bg-sidebar-accent",
    },
  ],
  defaultVariants: {
    variant: "default",
    isActive: false,
  },
})

type SidebarTrigger = React.ComponentProps<typeof Button> &
  VariantProps<typeof sidebarTriggerVariants> & {
    asChild?: boolean
  }

const SidebarTrigger = React.forwardRef<HTMLButtonElement, SidebarTrigger>(
  ({ className, variant, isActive, asChild, ...props }, ref) => {
    const { isMobile } = useSidebar()
    const Comp = asChild ? Slot : Button

    if (isMobile) {
      return (
        <Comp
          ref={ref}
          className={cn(sidebarTriggerVariants({ variant, isActive }), className)}
          {...props}
        />
      )
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Comp
            ref={ref}
            variant={null}
            className={cn(
              sidebarTriggerVariants({ variant, isActive }),
              "group-data-[state=collapsed]:w-8 group-data-[state=collapsed]:justify-center",
              className
            )}
            {...props}
          />
        </TooltipTrigger>
        <TooltipContent
          side="right"
          sideOffset={12}
          className="group-data-[state=expanded]:hidden"
        >
          {props.children}
        </TooltipContent>
      </Tooltip>
    )
  }
)
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarToggleButton = React.forwardRef<
  HTMLButtonElement,
  Omit<React.ComponentProps<typeof Button>, "children">
>(({ className, ...props }, ref) => {
  const { isMobile, toggleSidebar } = useSidebar()

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      className={cn(
        "size-8 shrink-0",
        isMobile ? "absolute right-3 top-3" : "hidden",
        className
      )}
      onClick={toggleSidebar}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle sidebar</span>
    </Button>
  )
})
SidebarToggleButton.displayName = "SidebarToggleButton"

const SidebarSearch = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  const { open } = useSidebar()
  return (
    <div className="relative">
      <PanelLeft className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
      <Input
        ref={ref}
        className={cn(
          "h-10 w-full pl-10 duration-200",
          !open && "opacity-0",
          className
        )}
        {...props}
      />
    </div>
  )
})
SidebarSearch.displayName = "SidebarSearch"

const SidebarSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  const { open } = useSidebar()
  return (
    <Separator
      ref={ref}
      className={cn(
        !open &&
          "mx-auto w-1/2 bg-sidebar-ring group-data-[state=collapsed]:my-3",
        className
      )}
      {...props}
    />
  )
})
SidebarSeparator.displayName = "SidebarSeparator"

const SidebarSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    items?: number
  }
>(({ className, items = 6, ...props }, ref) => {
  const { isMobile } = useSidebar()

  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-3 p-3", className)}
      {...props}
    >
      <div className="flex items-center gap-x-3">
        <Skeleton className="size-8 rounded-full" />
        <div className="flex-1">
          <Skeleton className="h-4 w-2/3" />
        </div>
        {!isMobile && <Skeleton className="size-8 rounded-lg" />}
      </div>
      <div className="flex flex-col gap-3">
        {Array.from({ length: items }).map((_, i) => (
          <div key={i} className="flex items-center gap-x-3">
            <Skeleton className="size-8 rounded-lg" />
            <div className="flex-1">
              <Skeleton
                className="h-4"
                style={{
                  width: `${Math.floor(Math.random() * (90 - 50 + 1)) + 50}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto flex items-center gap-x-3">
        <Skeleton className="size-8 rounded-full" />
        <div className="flex-1">
          <Skeleton className="h-4 w-2/3" />
        </div>
      </div>
    </div>
  )
})
SidebarSkeleton.displayName = "SidebarSkeleton"

export {
  SidebarProvider,
  useSidebar,
  Sidebar,
  SidebarHeader,
  SidebarHeaderTitle,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
  SidebarToggleButton,
  SidebarSearch,
  SidebarSeparator,
  SidebarSkeleton,
}
