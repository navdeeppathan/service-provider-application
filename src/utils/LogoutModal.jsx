import React from 'react';


export function LogoutModal({ open, onClose, onLogout }){
    if(!open) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
                <h3 className="text-lg font-semibold mb-2">Confirm Logout</h3>
                <p className="text-sm text-gray-600 mb-4">Are you sure you want to log out?</p>
                <div className="flex justify-end gap-3">
                    <button onClick={onClose} className="px-4 py-2 rounded border">Cancel</button>
                    <button onClick={onLogout} className="px-4 py-2 rounded bg-red-600 text-white">Logout</button>
                </div>
            </div>
        </div>
    );
}