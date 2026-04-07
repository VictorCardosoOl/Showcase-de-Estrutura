import React, { useState } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { SortableSection } from '../../components/SortableSection';
import { HeroSection, AboutSection, FeaturesSection, CasesSection, FooterSection } from '../../components/sections';

export default function EmpresarialLayout(props: any) {
  const { mode } = props;
  const isDraggable = mode === 'xray';

  const [sections, setSections] = useState([
    { id: 'hero', component: HeroSection },
    { id: 'about', component: AboutSection },
    { id: 'features', component: FeaturesSection },
    { id: 'cases', component: CasesSection },
    { id: 'footer', component: FooterSection },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setSections((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="w-full">
      <DndContext 
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext 
          items={sections.map(s => s.id)}
          strategy={verticalListSortingStrategy}
        >
          {sections.map((section) => {
            const Component = section.component;
            return (
              <SortableSection key={section.id} id={section.id} isDraggable={isDraggable}>
                <Component {...props} />
              </SortableSection>
            );
          })}
        </SortableContext>
      </DndContext>
    </div>
  );
}
