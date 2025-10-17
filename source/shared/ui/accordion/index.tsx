import { ComponentRef, ComponentProps, forwardRef } from 'react'
import clsx from 'clsx'
import * as Accordion from '@radix-ui/react-accordion'

export const Trigger = forwardRef<
  ComponentRef<typeof Accordion.Trigger>,
  ComponentProps<typeof Accordion.Trigger> & { children: React.ReactNode }
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header>
    <Accordion.Trigger className={clsx(className)} {...props} ref={forwardedRef}>
      {children}
    </Accordion.Trigger>
  </Accordion.Header>
))
Trigger.displayName = 'Trigger'

export const Content = forwardRef<
  ComponentRef<typeof Accordion.Content>,
  ComponentProps<typeof Accordion.Content> & { children: React.ReactNode }
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content className={clsx('Content', className)} {...props} ref={forwardedRef}>
    {children}
  </Accordion.Content>
))
Content.displayName = 'Content'