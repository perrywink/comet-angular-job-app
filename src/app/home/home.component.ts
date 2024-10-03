import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { JobListingComponent } from "../job-listing/job-listing.component";
import { PocketBaseService } from "../../services/pocketbase.service";
import Client, { RecordModel } from "pocketbase";
import { JobListingsResponse } from "src/types/pocketbase-types";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, JobListingComponent],
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  pbService: PocketBaseService = inject(PocketBaseService);

  jobListings: JobListingsResponse []= [];
  pb: Client;

  constructor() {
    this.pb = this.pbService.getPocketBase();
    this.pb
      .collection("job_listings")
      .getList<JobListingsResponse>(1, 10)
      .then((res) => {
        this.jobListings = res.items.map((item) => ({
          ...item,
          image: this.pb.getFileUrl(item, item.image)
        }))
      });
  }
}
