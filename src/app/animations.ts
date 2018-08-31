import { animate, state, style, transition, trigger } from '@angular/animations';

// Component transition animations
export const slideInDownAnimation =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)',
        width: 100 + '%',
      })
    ),
    transition(':enter', [ // 入场动画
      style({
        transform: 'translateX(100%)'
      }),
      animate('0.5s ease')
    ]),
    transition(':leave', [ // 出场动画
      animate('0.3s ease', style({
        opacity: 0,
        transform: 'translateX(0%)'
      }))
    ])
  ] );
