interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  console.log('AuthModal: Component rendering...', { isOpen });
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Auth Modal</h2>
        <button onClick={onClose} className="px-4 py-2 bg-primary text-white rounded">
          Close
        </button>
      </div>
    </div>
  );
}