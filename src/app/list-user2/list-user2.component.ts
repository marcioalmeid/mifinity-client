import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ListUser2DataSource } from './list-user2-datasource';

@Component({
  selector: 'list-user2',
  templateUrl: './list-user2.component.html',
  styleUrls: ['./list-user2.component.css']
})
export class ListUser2Component implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ListUser2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new ListUser2DataSource(this.paginator, this.sort);
  }
}
