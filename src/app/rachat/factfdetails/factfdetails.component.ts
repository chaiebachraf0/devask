import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FacturesService } from 'src/app/services/facturef.service';
import * as jspdf from "jspdf"
import html2canvas from 'html2canvas';
declare var export_pdf:any;
@Component({
  selector: 'app-factfdetails',
  templateUrl: './factfdetails.component.html',
  styleUrls: ['./factfdetails.component.css']
})
export class FactfdetailsComponent implements OnInit {
  facture: any;
  id: any;
  Net:any=0;
  rows:any=[]
  data:any;
  constructor(private route:ActivatedRoute,private router:Router,private toastr: ToastrService,private factfService:FacturesService) { }
  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.getfactfdetails();
  }

  exports(){
    export_pdf()
    }
    export()
{
 this.data = document.getElementById('contnetpdf');
html2canvas(this.data).then(canvas => {
const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
const pageWidth = pdf.internal.pageSize.getWidth();
const pageHeight = pdf.internal.pageSize.getHeight();
const widthRatio = pageWidth / canvas.width;
const heightRatio = pageHeight / canvas.height;
const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;
const canvasWidth = canvas.width * ratio;
const canvasHeight = canvas.height * ratio;
const marginX = (pageWidth - canvasWidth) / 2;
const marginY = (pageHeight - canvasHeight) / 2;
pdf.addImage(contentDataURL, 'PNG', marginX, marginY, canvasWidth, canvasHeight)
pdf.save('new-file.pdf');
});
}

  getfactfdetails(){
  this.factfService.getFactureById(this.id).subscribe(res =>{
  this.facture=res;
this.rows=this.facture[0]

  console.log("asa",this.facture[0])
  this.Net=this.facture[1].Montant_TTC+this.facture[1].Timbre_fiscale;
  });
  }
  annuler(){
    this.router.navigate(['rachat/achat/facturef']);
  }
}
