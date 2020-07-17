import { trigger, transition, state, style, animate } from '@angular/animations';

export let fade = (name: string, miliseconds: number, delay?: number) => {
  if(!delay) delay = 0;
  return trigger(name, [
    state('void', style({ opacity: 0 })),
    transition(':enter, :leave', [animate(`${miliseconds}ms ${delay}ms`)])
  ])
}
export let glide = (name: string, pixels: number, miliseconds: number, delay?: number) => {
  if(!delay) delay = 0;
  return trigger(name, [
    state('void', style({ transform: `translateY(${pixels}px)` })),
    transition(':enter', [animate(`${miliseconds}ms ${delay}ms`)])
  ])

}

