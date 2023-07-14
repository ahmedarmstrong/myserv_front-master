import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import { ActivatedRoute, Router } from '@angular/router';
import { Entretien } from 'src/app/services/models/entretien';
import { EntretienService } from 'src/app/services/service/entretien.service';

@Component({
  selector: 'app-list-candidate',
  templateUrl: './list-candidate.component.html',
  styleUrls: ['./list-candidate.component.css'],
})
export class ListCandidateComponent implements OnInit {
  listeEntretien: Array<Entretien> = [];
  errorMsg = '';
  typePoste = '';
  constructor(private entretienService: EntretienService) {}
  ngOnInit(): void {
    this.findListEntretien();
  }

  findListEntretien(): void {
    this.entretienService.findall().subscribe((entretien) => {
      this.listeEntretien = entretien;
    });
  }
}
