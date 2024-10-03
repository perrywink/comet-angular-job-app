import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { PocketBaseService } from '../../services/pocketbase.service';
import { JobListingsResponse } from 'src/types/pocketbase-types';
import Client from 'pocketbase';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './job-details.component.html',
})
export class JobDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  pbService = inject(PocketBaseService);
  pb: Client;
  content: SafeHtml | undefined;

  jobListing: JobListingsResponse | undefined
  jobId = "";

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
  
  constructor(private sanitizer: DomSanitizer) {
    this.jobId = this.route.snapshot.params['id']
    this.pb = this.pbService.getPocketBase()

    this.pb
      .collection("job_listings")
      .getOne<JobListingsResponse>(this.jobId)
      .then((res) => {
        this.jobListing = {
          ...res,
          image: this.pb.getFileUrl(res, res.image)
        }
        this.content = this.sanitizer.bypassSecurityTrustHtml(
          res.description
        );
      });
  }

  submitApplication() {
    // this.jobsService.submitApplication(
    //   this.applyForm.value.firstName ?? '',
    //   this.applyForm.value.lastName ?? '',
    //   this.applyForm.value.email ?? '',
    // );
  }

}
