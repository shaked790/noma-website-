import { useEffect, useRef, type ReactNode } from 'react'
import { cn } from '@/lib/cn'

export type DialogProps = {
  open: boolean
  onClose: () => void
  labelledBy: string
  className?: string
  children?: ReactNode
}

export function Dialog({
  open,
  onClose,
  labelledBy,
  className,
  children,
}: DialogProps) {
  const nodeRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const node = nodeRef.current
    if (!node) return

    if (open) {
      if (!node.open) node.showModal()
    } else if (node.open) {
      node.close()
    }
  }, [open])

  useEffect(() => {
    const node = nodeRef.current
    if (!node) return

    function handleClose() {
      onClose()
    }

    node.addEventListener('close', handleClose)
    return () => node.removeEventListener('close', handleClose)
  }, [onClose])

  return (
    <dialog
      ref={nodeRef}
      aria-labelledby={labelledBy}
      aria-modal="true"
      onClick={(event) => {
        if (event.target === nodeRef.current) nodeRef.current.close()
      }}
      className={cn(
        'dialog-panel m-0 h-svh w-full max-h-svh max-w-none border-0 bg-surface p-0 text-ink',
        'md:m-auto md:h-[calc(100svh-2rem)] md:max-h-[calc(100svh-2rem)] md:w-[min(var(--container-wide),calc(100%-2*var(--gutter)))]',
        className,
      )}
    >
      {children}
    </dialog>
  )
}
