import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TraineeService } from '../trainee.service';
import { Trainee } from '../trainee';

@Component({
  selector: 'app-traineelist',
  templateUrl: './traineelist.component.html',
  styleUrls: ['./traineelist.component.css']
})
export class TraineelistComponent implements OnInit {

  traineedata:Trainee;

  constructor(private r:Router,private traineeservice:TraineeService) {
    traineeservice.getTrainee().subscribe(data=>this.traineedata=data);
   }

  ngOnInit() {
    this.traineeservice.getTrainee().subscribe(data=>this.traineedata=data);
  }

  goToAdd(){
    alert("Add");
    this.r.navigate(['dashboard/add']);
  }

  deleteTrainee(e:Trainee){
    //alert(e.id);
    if(confirm("Are you sure ?")){
    this.traineeservice.deleteTrainee(e.id).subscribe(data=>{
      console.log("Deleted");
    });
    }
  }

}
