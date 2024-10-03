import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import { BaseSystemFields, JobListingsRecord, JobListingsResponse } from 'src/types/pocketbase-types';

@Component({
  selector: 'app-job-listing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './job-listing.component.html',
})
export class JobListingComponent {
  @Input() jobListing!: JobListingsResponse;
}

