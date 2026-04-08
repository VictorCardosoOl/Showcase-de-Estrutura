import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';
import { cn } from '../lib/utils';

interface SortableSectionProps {
  id: string;
  children: React.ReactNode;
  isDraggable: boolean;
  key?: React.Key;
}

export function SortableSection({ id, children, isDraggable }: SortableSectionProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id, disabled: !isDraggable });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 'auto',
  };

  return (
    <div ref={setNodeRef} style={style} className={cn("relative", isDragging && "opacity-50")}>
      {isDraggable && (
        <div 
          {...attributes} 
          {...listeners}
          className="absolute top-4 left-1/2 -translate-x-1/2 z-50 p-2 bg-brand-yellow text-brand-dark rounded-full shadow-xl cursor-grab active:cursor-grabbing hover:scale-110 transition-all flex items-center gap-2 font-bold text-xs uppercase tracking-widest"
        >
          <GripVertical size={16} />
          Arrastar Seção
        </div>
      )}
      {children}
    </div>
  );
}
