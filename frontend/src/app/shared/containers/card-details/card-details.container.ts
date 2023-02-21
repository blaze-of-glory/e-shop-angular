import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../modules/employees/classes/employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-details-container',
  templateUrl: './card-details.container.html',
  styleUrls: ['./card-details.container.scss']
})
export class CardDetailsContainer implements OnInit {
  employee: Employee = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.pipe().subscribe(resolvedData => {
      this.employee = resolvedData['employee'];
    });
  }
}
