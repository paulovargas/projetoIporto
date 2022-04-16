import { Plan } from './plan';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  plans: Plan[] = [
    { _id: 1, planName: 'Plano 1 ', price: 59.99, functions: '3 funções' },
    { _id: 2, planName: 'Plano 2 ', price: 199.99, functions: '6 funções' },
    { _id: 3, planName: 'Plano 3 ', price: 999.99, functions: '16 funções' },
  ];

  constructor() { }

  getAll() {
    return this.plans;
  }
}