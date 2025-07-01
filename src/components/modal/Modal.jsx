import { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, children, title, footer, className = '' }) => {
    const modalRef = useRef(null);

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    // Close modal when pressing Escape key
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    // Prevent scrolling of background content when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 bg-opacity-50" onClick={onClose}>
            <div
                className={`relative bg-white rounded-lg shadow-xl  w-full mx-auto overflow-hidden ${className}`}
                ref={modalRef}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? "modal-title" : undefined}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    {title && <h2 className="text-xl font-semibold" id="modal-title">{title}</h2>}
                    <button
                        className="text-gray-500 hover:text-gray-700 text-2xl font-bold transition-colors focus:outline-none"
                        onClick={onClose}
                        aria-label="Close"
                        type="button"
                    >
                        &times;
                    </button>
                </div>
                <div className="p-4">
                    {children}
                </div>
                {footer && <div className="p-4 border-t">{footer}</div>}
            </div>
        </div>
    );
};

export default Modal;
