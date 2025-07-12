import { PropsWithChildren, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ModalProps extends PropsWithChildren {
  className?: string;
  onClose?: () => void;
}

function ModalHeader({ children, className }: ModalProps) {
  return (
    <header
      className={cn(
        'fixed flex h-[4.8rem] shrink-0 items-center gap-[1rem] self-stretch border-b border-pink-500 p-[0.8rem] pl-[1.6rem]',
        className
      )}
    >
      {children}
    </header>
  );
}

function ModalBody({ children, className }: ModalProps) {
  return <div className={cn('flex flex-col', className)}>{children}</div>;
}

function ModalFooter({ children, className }: ModalProps) {
  return <div className={cn('bottom-0 flex', className)}>{children}</div>;
}

function Modal({ children, className, onClose }: ModalProps) {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onClose) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 transition-colors"
      onClick={handleBackdropClick}
    >
      <dialog
        className={cn(
          'relative z-50 flex flex-col overflow-hidden rounded-[0.8rem] bg-white',
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </dialog>
    </div>
  );
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
