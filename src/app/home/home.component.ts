import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { JobListingComponent } from "../job-listing/job-listing.component";
import { PocketBaseService } from "../../services/pocketbase.service";
import Client, { RecordModel } from "pocketbase";
import { JobListingsResponse } from "src/types/pocketbase-types";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, JobListingComponent, ReactiveFormsModule],
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  pbService: PocketBaseService = inject(PocketBaseService);

  jobListings: JobListingsResponse[] = [];
  pb: Client;

  searchForm = new FormGroup({
    searchQuery: new FormControl(""),
  });

  constructor() {
    this.pb = this.pbService.getPocketBase();
    this.pb
      .collection("job_listings")
      .getList<JobListingsResponse>(1, 10)
      .then((res) => {
        this.jobListings = res.items.map((item) => ({
          ...item,
          image: this.pb.getFileUrl(item, item.image),
        }));
      });
  }

  async searchJobs() {
    this.pb
      .collection("job_listings")
      .getList<JobListingsResponse>(1, 10, {
        filter: `name~"${this.searchForm.value.searchQuery}"`,
      })
      .then((res) => {
        console.log("search",this.searchForm.value.searchQuery)
        this.jobListings = res.items.map((item) => ({
          ...item,
          image: this.pb.getFileUrl(item, item.image),
        }));
      });
  }
}
