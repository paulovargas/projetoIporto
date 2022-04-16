import { PlanService } from '../shared/plan.service';
import { Component, OnInit } from '@angular/core';
import { Plan } from '../shared/plan';

@Component({
  selector: 'app-plan-list',
  templateUrl: './plan-list.component.html',
  styleUrls: ['./plan-list.component.css']
})
export class PlanListComponent implements OnInit {
  plans: Plan[] = [];

  constructor(private planService: PlanService) { }

  ngOnInit() {
    this.plans = this.planService.getAll();
  }
}
