import { trigger, state, style, transition, animate } from '@angular/animations';

export const scrollCardAnimation = trigger('scrollCard', [
  state('hidden', style({
    opacity: 0,
    transform: 'translateY(-30px) scale(0.95)'
  })),
  state('visible', style({
    opacity: 1,
    transform: 'translateY(0) scale(1)'
  })),
  transition('hidden => visible', [
    animate('700ms cubic-bezier(0.22, 1, 0.36, 1)')
  ])
]);
