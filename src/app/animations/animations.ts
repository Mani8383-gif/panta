import { animate, style, transition, trigger } from '@angular/animations';

export const navbarAnimation = trigger('navbarAnim', [
  transition(':enter', [
    style({ height: '0', opacity: 0, transform: 'translateY(-20px)' }),
    animate('300ms ease-out',
      style({ height: '*', opacity: 1, transform: 'translateY(0)' })
    )
  ]),
  transition(':leave', [
    animate('250ms ease-in',
      style({ height: '0', opacity: 0, transform: 'translateY(-20px)' })
    )
  ])
]);
