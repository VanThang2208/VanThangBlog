import React from 'react';
import { BlogPost } from '../types';

interface PostModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative max-w-3xl w-full mx-4 bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{post.title}</h2>
              <div className="text-sm text-slate-500">{new Date(post.date).toLocaleDateString('vi-VN')} • {post.category}</div>
            </div>
            <button onClick={onClose} aria-label="Close" className="text-slate-500 hover:text-slate-900">✕</button>
          </div>

          {post.imageUrl && (
            <div className="mt-4 rounded-lg overflow-hidden">
              <img src={post.imageUrl} alt={post.title} className="w-full object-cover max-h-64" />
            </div>
          )}

          <div className="prose prose-lg mt-6 text-slate-700 max-w-none">
            <p>{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
